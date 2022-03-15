import React, { useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../../../hooks/useData';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import './MealDetail.css'


const MealDetail = () => {

    const { mealid } = useParams();
    const meal = useData(`https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Garlic-Bey/Single-Meals/${mealid}`);

    const { categories, description, name, price, rating, thumb } = meal;
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
        <Container>
            <div>

            </div>
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
                {

                }
            </div>

        </Container>
    );
};

export default MealDetail;