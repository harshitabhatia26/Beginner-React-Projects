import React from "react";
import { useReducer } from 'react';
import './product.css'
import foods from "./Article";

function cartReducer(state, action) {
    switch(action.type){
        case 'add':
            return[...state, action.food_name];
        case 'remove':
            const update = [...state];
            update.splice(update.indexOf(action.food_name), 1);
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

function add(food) {
    const {food_name, food_price} = food;
    setCart({food_name, type: 'add'});
    setTotal({food_price, type:'add'});
}

function remove(food) {
    const {food_name, food_price} = food;
    setCart({food_name, type: 'remove'});
    setTotal({food_price, type: 'remove'});
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
                {foods.map(food => (
                    <div key={food.food_name}>
                    <div className="food">
                        {food.food_name}
                    </div>
                    <button onClick={() => add(food)}>Add</button>
                    <button onClick={() => remove(food)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}