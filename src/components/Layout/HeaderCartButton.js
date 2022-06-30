import React, { useContext, useEffect, useState } from 'react'
import CartIcon from './../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';
//reduce methode is a function that allow us to tranform 
//array of data into a single value (number in this case) 

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighLted, setBtnIsHighLted] = useState(false);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    const btnClasses = `${classes.button} ${btnIsHighLted ? classes.bump : ''} `;


    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);
    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button >
    )
};
export default HeaderCartButton;
