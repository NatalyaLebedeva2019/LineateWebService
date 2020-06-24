import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts, getCurrentUser, fetchAllOrders } from '../services/api';
import { setProducts, setIsFetching } from '../store/products/actions';
import { setUser } from '../store/user/actions';
import { setOrders } from '../store/orders/actions';

export function useUserData() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const user = await getCurrentUser();
      if (user.id) {
        dispatch(setUser(user));
        const orders = await fetchAllOrders({ id: user.id });
        dispatch(setOrders(orders));
      }
    }
    fetchData();
  }, [dispatch]);
}

export function useProductData() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const products = await fetchAllProducts();
      dispatch(setIsFetching(false));
      dispatch(setProducts(products));
    }
    fetchData();
  }, [dispatch]);
}
