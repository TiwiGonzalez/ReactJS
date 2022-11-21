import React from 'react';

const CartWidget = () => {
    return (
        <div>
        <ul className='navbar-nav me-auto'>
       
            <li className='nav-link'>
                
                <button className='btn btn-dark'>Carrito</button>
            </li>
            <p>0</p>
        </ul>
        </div>
    );
}

export default CartWidget;
