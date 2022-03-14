import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './Meal.css'

const Meal = (props) => {
    const { id, name, thumb, price, rating } = props.meal;

    const history = useHistory();
    const handleDetailClick = () => {
        history.push(`/meal/${id}`);
    }

    return (
        <Col className="text-center menu-card my-3">
            <div className='pt-2'>
                <img src={thumb} alt="" className="w-50" />
                <h5 className="text-center pt-2">{name}</h5>

                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly></Rating>
                <br />
                <h4 className="fw-bold">${price}</h4>
                <button onClick={handleDetailClick} className="secondary-btn px-4 py-1 mb-3 border-0">Details</button>
            </div>
        </ Col>
    );
};

export default Meal;