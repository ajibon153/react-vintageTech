import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { CartContext } from '../context/cart';
import Loading from '../components/Loading';

export default function ProductDetails() {
  const { id } = useParams();

  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const product = products.find((item) => {
    return parseInt(item.data.id) === parseInt(id);
  });
  if (products.length === 0 || product === undefined) {
    return <Loading />;
  } else {
    const { image } = product;
    const {
      title: Title,
      price: Price,
      description: Description,
    } = product.data;
    console.log(product);
    return (
      <section className='single-product'>
        <img src={image} alt={Title} className='single-product-image' />
        <article>
          <h1>{Title}</h1>
          <h2>${Price}</h2>
          <p>{Description}</p>
          <button
            className='btn btn-primary btn-block'
            onClick={() => {
              addToCart(product);
              history.push('/cart');
            }}
          >
            add cart
          </button>
        </article>
      </section>
    );
  }
  // return <h6>nomor id {id}</h6>;
}
