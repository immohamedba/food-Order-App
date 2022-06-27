import React from 'react'
import styles from './CartItem.module.css'

const CartItem = (props) => {

    const mealsList = props.DUMMY_MEALS.map(meal =>
        <div className={styles['cart-item']}>
            <li><h2>{meal.name}</h2></li>
            <li className={styles.summary}> {meal.description}</li>
            <li className={styles.price}> {meal.price}</li>
            <div>
                <h2> Amount</h2> <input type="number" id="amount" name ="amount" value ="1"></input>
            </div>
            <button> Add</button>
        </div>
    );

    return (
        <div>
            <ul>
                {mealsList}
            </ul>
        </div>
    )
};
export default CartItem;