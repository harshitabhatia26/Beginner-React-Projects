import React from "react";
import { useReducer } from 'react';
import './product.css'

const products = [
    {
        name: 'Ice cream',
        price: 5,
    },
    {
        name: 'Donuts',
        price: 3,
    },
    {
        name: 'Watermelon',
        price: 4,
    }
]

function cartReducer(state, action) {
    switch(action.type){
        case 'add':
            return[...state, action.name];
        case 'remove':
            const update = [...state];
            update.splice(update.indexOf(action.name), 1);
            return update;
        default:
            return state;
    }
}

function totalReducer(state, action){
    if(action.type === 'add'){
        return state + action.price
    }
    return state - action.price ;
}


export default function Product () {

const [cart, setCart] = useReducer(cartReducer, []);
const [total, setTotal] = useReducer(totalReducer, 0);

function add(product) {
    const {name, price} = product;
    setCart({name, type: 'add'});
    setTotal({price, type:'add'});
}

function remove(product) {
    const {name, price} = product;
    setCart({name, type: 'remove'});
    setTotal({price, type: 'remove'});
}

    return(
        <div className="wrapper">
            <div>
                Shopping Cart : {cart.length} total items
            </div>
            <div>
                Total: {total}
            </div>
            <div>
                {products.map(product => (
                    <div key={product.name}>
                    <div className="product">
                        {product.name}
                    </div>
                    <button onClick={() => add(product)}>Add</button>
                    <button onClick={() => remove(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}