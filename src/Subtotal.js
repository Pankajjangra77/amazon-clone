import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    const history = useHistory();
    const [{basket}, action]= useStateValue();

    return (
        <div className="subtotal">
        <CurrencyFormat 
            renderText = {(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order contains a gift
                </small>
                </>
            )}
            displayType={"text"}
            decimalScale={2}
            value={getBasketTotal(basket)}
            prefix={"$"}
            thousandSeparator={true}
        />
            
            <button onClick={e=> history.push('/payment')}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;
