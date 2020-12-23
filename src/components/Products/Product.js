import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export default function Product({ data }) {
  // console.log('image', data);
  // console.log('list', products);

  return (
    <article className='product'>
      <div className='img-container'>
        <img src={data.image.url} title={data.title} />
        <Link
          to={`products/${data.id}`}
          className='btn btn-primary product-link'
        >
          details
        </Link>
      </div>
      <div className='product-footer'>
        <p className='product-title'>{data.title}</p>
        <p className='product-price'>
          <NumberFormat
            value={data.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp '}
          />
        </p>
      </div>
    </article>
  );
}
