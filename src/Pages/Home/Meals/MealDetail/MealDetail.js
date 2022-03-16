import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import './MealDetail.css'
import Menu from '../../../Shared/Navbar/Menu';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryMeal from './CategoryMeal';
import useData from '../../../../hooks/useData';


const MealDetail = () => {


    // const [categoryMeals, setCategoryMeals] = useState([]);

    const { mealid } = useParams();
    const meal = useData(`https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Garlic-Bey/Single-Meals/${mealid}`);


    const { categories, description, name, price, rating, thumb } = meal;



    // slider settings
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    let sum = price;
    const [quantity, setQuantity] = useState(0);
    const [mealPrice, setMealPrice] = useState(0);


    const handleIncrement = () => {

        sum += price * quantity;
        sum = sum.toFixed(2);
        setMealPrice(sum);
        setQuantity(quantity + 1);

    }
    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            sum -= price * quantity;
            sum = Math.abs(sum.toFixed(2));
            setMealPrice(sum);
        }
    }

    return (
        <div>
            <Menu></Menu>
            <Container className='mt-4'>
                <div className="d-lg-flex flex-lg-row-reverse align-items-center justify-content-center">
                    <div>
                        <img src={thumb} alt="" className="w-100" />
                    </div>
                    <div>
                        <h1 className="fw-bold">{name}</h1>
                        <small className="secondary-text">{categories}</small>
                        <p className="pt-3 me-5 pe-5">{description}</p>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating>
                        <br />
                        <div className="d-flex align-items-center mt-3">
                            <div>
                                <h3>${mealPrice}</h3>
                            </div>
                            <div className="ms-3 quantity-btn-container">
                                <button onClick={handleDecrement} className="px-4 py-2 text-secondary"><i className="fas fa-minus"></i></button>
                                <span>{quantity}</span>
                                <button onClick={handleIncrement} className="secondary-text px-4 py-2"><i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <button className="secondary-btn mt-3 border-0 px-3 py-2"> <i className="fas fa-cart-plus"></i> Add to Cart</button>

                    </div>

                </div>
                <div className="mt-5">
                    <h3>More From Lunch Items</h3>
                    <div>
                        {/* <Slider {...settings}>
                            {
                                categoryMeals.map(categoryMeal => <CategoryMeal
                                    key={categoryMeal._id}
                                    categoryMeal={categoryMeal}
                                >
                                </CategoryMeal>)
                            }
                        </Slider> */}
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default MealDetail;