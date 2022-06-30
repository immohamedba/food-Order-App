import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from './../UI/Modal';
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const crtCtx = useContext(CartContext)
    const totalAmount = `$${crtCtx.totalAmount.toFixed(2)}`;
    const hasItems = crtCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        crtCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        crtCtx.addItem({ ...item, amount: 1 })
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {crtCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}> Close </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;