import React from 'react';

const CategoryMeal = (props) => {

    const { thumb } = props.categoryMeal;
    return (
        <div>
            <img src={thumb} alt="" className='w-25' />
        </div>
    );
};

export default CategoryMeal;