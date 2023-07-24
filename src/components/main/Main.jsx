import React, { useState, useRef } from 'react';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import mainStyles from "./main_style.module.scss";
import imgPlantOne from './main_images/plant1.jpg';
import imgPlantTwo from './main_images/plant2.jpg';
import imgPlantThree from './main_images/plant3.jpg';
import imgPlantFour from './main_images/plant4.jpg';
import imgPlantFive from './main_images/plant5.jpg';
import imgPlantSix from './main_images/plant6.jpg';
import imgPlantSeven from './main_images/plant7.jpg';
import imgPlantEight from './main_images/plant8.jpg';
import imgArrowLeft from './main_images/arrow-left.png';
import articleBanner from './main_images/monstera.png';

const Card = (props) => {
  return (
    <div className={mainStyles.card}>
      <img className={mainStyles.card_img} src={props.imgUrl} />
      <div>
        <div className={mainStyles.card_description}>
          <p className={mainStyles.product_name}>{props.productName}</p>
          <p className={mainStyles.product_price}>{props.productPrice}</p>
          <p className={mainStyles.product_description}>{props.productDescription}</p>
        </div>
      </div>
      <button onClick={() => console.log("button onClick works")} className={mainStyles.card_btn}>Buy</button>

    </div>
  );
};

const cardPropsList = [
  {
    imgUrl: imgPlantOne,
    productName: "Monstera",
    productPrice: "15$",
    productDescription: "Monstera is a plant with magnificent large leaves that create an impressive green atmosphere in any interior."
  },
  {
    imgUrl: imgPlantTwo,
    productName: "Calathea",
    productPrice: "3$",
    productDescription: "Calathea is a plant with vibrant and colorful leaves that change their position depending on the."
  },
  {
    imgUrl: imgPlantThree,
    productName: "Biofilia",
    productPrice: "5$",
    productDescription: "It is an innate human tendency to seek connection with nature and living organisms."
  },
  {
    imgUrl: imgPlantFour,
    productName: "Spatifillum",
    productPrice: "9$",
    productDescription: "The plant with large, glossy leaves that purifies the air and creates a pleasant atmosphere indoors."
  },
  {
    imgUrl: imgPlantFive,
    productName: "Aloe ",
    productPrice: "4$",
    productDescription: "The plant with fleshy leaves containing healing gel, which is used for skincare and treatment of certain conditions."
  },
  {
    imgUrl: imgPlantSix,
    productName: "Ficus",
    productPrice: "6$",
    productDescription: "The plant with dense foliage that adds a sense of freshness and greenery to the interior, and also helps to purify the air from harmful substances."
  },
  {
    imgUrl: imgPlantSeven,
    productName: "Epipremnum Aureum",
    productPrice: "11$",
    productDescription: "The plant with large green leaves adorned with white stripes, which adds brightness and elegance to the space."
  },
  {
    imgUrl: imgPlantEight,
    productName: "Ficus Ginseng",
    productPrice: "14$",
    productDescription: "The plant with dense foliage and a characteristic stem shape that creates a sense of naturalness and tranquility in the home environment."
  }
];


const Slider = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const visibleSlides = 2;
  const slideWidth = 100 / visibleSlides;

  const handleNextSlide = () => {
    if (currentSlide < items.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(items.length - visibleSlides);
    }
  };

  const transformStyle = {
    transform: `translateX(-${currentSlide * slideWidth}%)`,
  };

  return (
    <div className={mainStyles.slider}>

      <button onClick={handleNextSlide} className={mainStyles.slider_btn_previos}><img className={mainStyles} src={imgArrowLeft}></img></button>




      <div className={mainStyles.cards_wrapper} ref={slideRef} style={transformStyle}>

        {items.map((item, index) => (
          <Card
            key={index}
            imgUrl={item.imgUrl}
            productName={item.productName}
            productPrice={item.productPrice}
            productDescription={item.productDescription}
          />
        ))}

      </div>

      <button onClick={handleNextSlide} className={mainStyles.slider_btn_next}><img className={mainStyles} src={imgArrowLeft}></img></button>
    </div>
  );
};



const Main = () => {
  return (
    <div className={mainStyles.main}>
      <div className={mainStyles.main_container}>
        <div className={mainStyles.article_banner}>

          <div className={mainStyles.article}>
            <span>Let’s Bring</span>
            <h1>A New Friend Home</h1>

            <Divider />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus diam in consequat tempor. Donec eget justo ut est pretium gravida. Phasellus vulputate erat ipsum, nec gravida magna sodales in.</p>
            <div className={mainStyles.main_btn_group}>
              <button className={mainStyles.btn}><Link to="/registration" className={mainStyles.link_btn}>Registration</Link></button>
              <button className={mainStyles.btn}>Register</button>
            </div>
          </div>
          <div>
            <img className={mainStyles.article_banner_img} src={articleBanner} alt="" />
          </div>
        </div>
        <div className={mainStyles}>
          <Slider items={cardPropsList} />
        </div>
      </div>


    </div>
  );
};



export default Main