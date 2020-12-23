import React from 'react';

// // strapi function
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
import { registerUserApi, loginUserApi } from '../firebase/ApiAuth';
// // handle user
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  // // setup user context
  const { userLogin, alert, showAlert } = React.useContext(UserContext);

  // // state value
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((prevValue) => {
      let isMember = !prevValue;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showAlert({
      msg: 'Sedang mengakses server. Mohon tunggu sebentar...',
      show: true,
    });
    let response;
    if (isMember) {
      response = await loginUserApi({ email, password });
    } else {
      response = await registerUserApi({ email, password, username });
    }

    console.log(response);

    if (response.success) {
      // success
      const { refreshToken: token, email: username } = response.data;
      const newUser = { token, username };
      console.log('newuser', newUser);
      userLogin(newUser);
      showAlert({
        msg: `Anda telah Login : ${username}. Selamat berbelanja`,
      });
      setTimeout(() => {
        history.push('/products');
      }, 500);
    } else {
      // show alert

      if (isMember) {
        showAlert({
          msg: 'wrong email and password',
          type: 'danger',
        });
      } else {
        showAlert({
          msg: 'Please insert email and password correctly',
          type: 'danger',
        });
      }
    }
  };

  return (
    <section className='form section'>
      <h2 className='section-title'>
        {isMember ? 'Masuk Akun' : 'Daftar Akun'}
      </h2>
      <form className='login-form'>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* endsingle input */}
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* endsingle input */}
        {!isMember && (
          <div className='form-control'>
            <label htmlFor='username'>User Name</label>
            <input
              type='username'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {isEmpty && <p className='form-empty'>Mohon isi kolom yang kosong</p>}
        {/* submit btn */}
        {!isEmpty && (
          <button
            type='submit'
            className='btn btn-block btn-primary'
            onClick={handleSubmit}
          >
            {isMember ? 'Masuk' : 'Daftar'}
          </button>
        )}
        {/* register link */}
        <p className='register-link'>
          {isMember ? 'Belum punya akun ?' : 'sudah punya akun ?'}
          <button type='button' onClick={toggleMember}>
            Klik disini
          </button>
        </p>
      </form>
    </section>
  );
}
