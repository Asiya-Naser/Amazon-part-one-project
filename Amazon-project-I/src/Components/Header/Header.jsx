import React from 'react'
import { SlLocationPin } from "react-icons/sl"; 
import { BiCartAlt } from "react-icons/bi"; 
import { BsSearch } from "react-icons/bs";
import LowerHeader from "../Header/LowerHeader";
import classes from './header.module.css'
const Header = () => {
  return (
    <section>
      <section>
        <div className={classes.header_container}>
          {/* logo section*/}
          <div className={classes.logo_container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>

            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Dlivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch ize={25} />
          </div>
          {/* right side */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://image.shutterstock.com/image-vector/official-american-flag-vector-image-260nw-1903349443.jpg"
                alt=""
              />

              <select>
                <option value="">EN</option>
              </select>
            </a>
          </div>
          {/* three components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& orders</span>
          </a>
          {/* cart */}
          <a href="" className="{classes.cart">
            <BiCartAlt size={25} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader />;
    </section>
  );
   
}

export default Header