import React, { useRef, useState } from 'react'
import Input from '../UI/Input';
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {

    const amountInputRed = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        const entredAmount = amountInputRed.current.value;

        const entredAmountNumber = +entredAmount // convert to number 
        if (entredAmount.trim().length === 0|| entredAmountNumber < 1|| entredAmountNumber > 5) {
            setAmountIsValid(false);
        }

        props.onAddTocart(entredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRed}
                label='Amount'
                input={
                    {
                        id: 'amount',
                        type: 'number',
                        max: '5',
                        min: '1',
                        step: '1',
                        defaultValue: '1'
                    }
                } />
            <button>+ Add</button>
            {!amountIsValid && <p> pleaase enter a valid ammount (1-5)</p>}
        </form>
    )
}
export default MealItemForm;
