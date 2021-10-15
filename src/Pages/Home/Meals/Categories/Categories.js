import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useData from '../../../../hooks/useData';
import Meal from '../Meal/Meal';
import './Categories.css'

const Categories = () => {
    const breakfast = useData('./breakfastDB.json');
    const dinner = useData('./dinnerDB.json');
    const lunch = useData('./lunchDB.json');
    const [meals, setMeals] = useState(false);

    return (
        <div>
            <Container>
                <div className="d-flex justify-content-evenly my-5">
                    <button className="menu-btn" onClick={() => setMeals(breakfast)}>Breakfast</button>
                    <button className="menu-btn" onClick={() => setMeals(lunch)}>Lunch</button>
                    <button className="menu-btn" onClick={() => setMeals(dinner)}>Dinner</button>
                </div>
                <div className="row">
                    {
                        !meals ? lunch.map(meal => <Meal key={meal.id} meal={meal}></Meal>) : meals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                    }

                </div>
            </Container>

        </div>
    );
};

export default Categories;