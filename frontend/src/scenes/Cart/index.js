import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartData, getUser } from '../../store/selectors';
import Dropdown from '../../components/Dropdown/Dropdown';
import Trigger from '../../components/Dropdown/Trigger';
import Menu from '../../components/Dropdown/Menu';
import NavbarItem from '../../components/Navbar/NavbarItem';
import CartContent from './CartContent';
import { removeProduct } from '../../store/cart/actions';
import { notificationAdd } from '../../store/notifications/actions';
import { createOrder, fetchAllOrders, getCurrentUser } from '../../services/api';
import { setOrders } from '../../store/orders/actions';
import { setUser } from '../../store/user/actions';

function Cart() {
  const products = useSelector(getCartData);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const { id } = useSelector(getUser);

  function remove(itemId) {
    dispatch(removeProduct(itemId));
  }

  async function makeOrder() {
    products.forEach(async (product) => {
      try {
        await createOrder({ client_id: id, product_id: product.id });
        dispatch(notificationAdd('Order created', 'success'));
        remove(product.ItemId);
        const orders = await fetchAllOrders({ id });
        dispatch(setOrders(orders));
        const user = await getCurrentUser();
        dispatch(setUser(user));
      } catch (error) {
        dispatch(notificationAdd('Can not make order. Not enough money', 'error'));
      }
    });
  }

  return (
    <Dropdown isActive={isActive}>
      <Trigger>
        <NavbarItem onClick={() => setIsActive(!isActive)}>
          <img src="/icons/cart.png" alt="cart" />
        </NavbarItem>
      </Trigger>
      <Menu>
        <CartContent
          products={products}
          removeProduct={remove}
          makeOrder={makeOrder}
        />
      </Menu>
    </Dropdown>
  );
}

export default Cart;
