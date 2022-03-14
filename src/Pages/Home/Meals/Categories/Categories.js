import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../../hooks/useData';
import Meal from '../Meal/Meal';
import './Categories.css'
import { NavHashLink } from 'react-router-hash-link';


const Categories = () => {
    const breakfast = useData('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Garlic-Bey/Breakfast');
    const dinner = useData('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Garlic-Bey/Dinner');
    const lunch = useData('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Garlic-Bey/Lunch');
    const [meals, setMeals] = useState([]);


    return (
        <div>
            <Container className='mt-5'>
                <div className='d-lg-flex d-md-flex align-items-center justify-content-evenly'>
                    <div>
                        <NavHashLink onClick={() => setMeals(breakfast)} className='meal-link px-2' to='/'>Breakfast</NavHashLink>
                    </div>
                    <div>
                        <NavHashLink onClick={() => setMeals(lunch)} className='meal-link px-2' to='/#lunch'>Lunch</NavHashLink>
                    </div>
                    <div>
                        <NavHashLink onClick={() => setMeals(dinner)} className='meal-link px-2' to='/#dinner'>Dinner</NavHashLink>
                    </div>
                </div>

                <div className='mt-4'>
                    <Row sm={1} md={3}>
                        {
                            meals.map(meal => <Meal
                                key={meal.id}
                                meal={meal}
                            >

                            </Meal>)
                        }
                    </Row>

                </div>
            </Container>

        </div>
    );
};

export default Categories;