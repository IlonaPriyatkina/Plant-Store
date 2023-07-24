import { Grid } from "@mui/material";
import React from 'react';
import goodsItemStyle from "./goodsItem_style.module.scss";


const GoodsItem = (props) => {
  const { plant,addToOrder } = props;
  const { Img, Categories,price,plantDescription}  = plant;

  return (
    <Grid item xs="12" md="4" >

      <div className={goodsItemStyle.card}>
        <img className={goodsItemStyle.card_img} src={Img} alt={ plant["Latin name"]}/>
        <div>
          <div className={goodsItemStyle.card_description}>
           
              <h3 className={goodsItemStyle.product_name}>{ Categories}</h3>
             <span className={goodsItemStyle.product_price}>{price} $</span>
              <p className={goodsItemStyle.product_description}>{plantDescription}</p>
            </div>
        
        </div>
        <button className={goodsItemStyle.card_btn} onClick={() => addToOrder(plant)}>Buy</button>
      </div>
    </Grid>
  )
}

export default GoodsItem