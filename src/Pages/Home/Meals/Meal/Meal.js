import React, { useEffect, useState } from 'react';

const Meal = () => {

    const [data, setData] = useState();
    useEffect(() => {
        fetch('./fakeDbMeals.json')
            .then(res => res.json())
            .then(data => setData(data[0].breakfast))
    }, [])
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default Meal;