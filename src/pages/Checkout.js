import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory, Redirect } from 'react-router-dom';
import emptyCart from '../components/Cart/EmptyCart';
import NumberFormat from 'react-number-format';

// import submitOrder from '../strapi/submitOrder';
import { submitOrder } from '../firebase/ApiOrder';

import EmptyCart from '../components/Cart/EmptyCart';

// react-stripe-element
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();

  // state value
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;

  async function handleSubmit(e) {
    showAlert({ msg: 'Mengirim pesanan... mohon tunggu' });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch((err) => console.log(err));
    const { token } = response;
    console.log(token);
    console.log(user);

    if (token) {
      // hideAlert();
      setError('');
      const { id } = token;
      console.log(id);
      let order = await submitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token,
      });
      console.log('order', order);
      if (order) {
        showAlert({ msg: 'Pesanan Selesai' });
        clearCart();
        setTimeout(() => {
          history.push('/');
        }, 1000);
        return;
      } else {
        showAlert({
          msg: 'Ada error saat pemesanan, mohon ulangi kembali',
          type: 'danger',
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
    console.log(response);
  }

  if (cart.length < 1) return <EmptyCart />;

  return (
    <section className='section form'>
      <h2 className='section-title'>Checkout</h2>
      <form className='checkout-form'>
        <h3>
          Total Order :{' '}
          <span>
            <NumberFormat
              value={total}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
            />
          </span>
        </h3>
        {/* Single input */}
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* end Single input */}
          {/* Card Element */}
          <div className='stripe-input'>
            <label htmlFor='card-element'>Credit or Debit</label>
            <p className='stripe-info'>
              Test using this credit card : <span>4242 4242 4242 4242</span>
              <br />
              Masukan 5 digit untuk kode pos
              <br />
              Masukan 3 digit untuk CVC
            </p>
          </div>
          {/* end Card Element */}

          {/* STRIPE element */}
          <CardElement className='card-element'></CardElement>
          {/* stripe error */}
          {error && <p className='form-empty'>{error}</p>}
          {/* empty value */}
          {isEmpty ? (
            <p className='form-empty'>please fill out name field</p>
          ) : (
            <button
              type='submit'
              onClick={handleSubmit}
              className='btn btn-primary btn-block'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

// react-stripe-element
const CardForm = injectStripe(Checkout);
const StripeWrapper = () => {
  return (
    <StripeProvider apiKey='pk_test_51HEGO4JXD4EHi4IMzwjG3SxK4zb8DnMIu8rCmhpVlPWxMSaeQafKLnWTx3uPITIaPu6Jz6gk7DsFMVCsEWcYnGya00dcQfgnN7'>
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
