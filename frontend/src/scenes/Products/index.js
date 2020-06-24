import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { getProductsData, getUser } from '../../store/selectors';
import { addProduct } from '../../store/cart/actions';
import { notificationAdd } from '../../store/notifications/actions';
import { useProductData } from '../../App/hooks';
import Loading from '../../components/Loading';

function Products() {
  useProductData();
  const { products, isFetching } = useSelector(getProductsData);
  const { isClient } = useSelector(getUser);
  const dispatch = useDispatch();

  function addToCart(product) {
    if (!isClient) {
      dispatch(notificationAdd('Sorry! You are not a client!', 'error'));
      return;
    }
    dispatch(addProduct(product));
    dispatch(notificationAdd(`"${product.name}" added to cart`, 'success'));
  }

  const productsList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      addToCart={() => addToCart(product)}
    />
  ));

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div>
      {productsList}
    </div>
  );
}

export default Products;
