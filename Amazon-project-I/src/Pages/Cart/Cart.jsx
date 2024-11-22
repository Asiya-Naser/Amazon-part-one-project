import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from '../Cart/cart.module.css'
import {Type} from '../../utils/action.type'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Cart = () => {
    const[{basket,user},dispatch]=useContext(DataContext)
    const total=basket.reduce((amount,item)=>{
        return item.price*item.amount+amount
    },0)
    const increment=(item)=>{
        dispatch({
            type:Type.ADD_TO_BASKET,
            item
        })
    }
    const decrement=(id)=>{
        dispatch({
            type:Type.REMOVE_FROM_BASKET,
            id
        })
    }
  return (
    <LayOut>
<section className={classes.container}>
    <div className={classes.cart_container}>
        <h2>Hello</h2>
        <h3>Your shopping basket</h3>
        <hr />
        
       { basket?.length==0?(<p>ohh!No item in your cart</p>):(basket?.map((item,i)=>{
        return (
          <section className={classes.cart_product}>
            <ProductCard
              key={i}
              product={item}
              productDesc={true}
              flex={true}
              renderAdd={false}
            />
            <div className={classes.button_container}>
              <button className={classes.btn} onClick={() => increment(item)}>
                <IoIosArrowDropupCircle size={20}/>
              </button>
              <span>{item.amount}</span>
              <button
                className={classes.btn}
                onClick={() => decrement(item.id)}
              >
                <IoIosArrowDropdownCircle size={20}/>
              </button>
            </div>
          </section>
        );
        
        }))}

    </div>
    {basket?.length !==0&&(
<div className={classes.subtotal}>
<div>
    <p>Subtotal({basket.length}items)</p>
    <CurrencyFormat amount={total}/>
</div>
<span>
    <input type="checkbox" />
    <small>This order contains a gift</small>
</span>
<Link to ="/payments">continue to checkout</Link>
    </div>

    )}
    

</section>
    </LayOut>
  )
}

export default Cart