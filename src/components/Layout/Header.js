import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1> ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage}  alt =" Meal Img"/>
            </div>
        </Fragment>
    );
}

export default Header;