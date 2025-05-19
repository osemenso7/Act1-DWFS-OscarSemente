import React, {useContext} from 'react';
import {FilterContext} from "../Context/FilterContext.jsx";

import '../Styles/Filter.css';

const Filter = ({ filterName, filterList}) => {
    const { handleSetSelectedGenre } = useContext(FilterContext);

    const handleFilterChange = (e) => {
        if (filterName === "Género") {
            const { value, checked } = e.target;
            handleSetSelectedGenre(value, checked);
        }
    };

    return (
        <div className="filters__filter">
            <h6 className="filter__title">{filterName}</h6>
            {filterName !== "Price" ? (
                filterList.map((filterItem, index) => (
                    <div className="filter__checkbox" key={index}>
                        <input className="checkbox__checkbox" type="checkbox" id={`${filterName}-filter-${index}`} value={filterItem} onChange={handleFilterChange}/>
                        <label className="checkbox__text" htmlFor={`${filterName}-filter-${index}`}>{filterItem}</label>
                    </div>
                ))
            ) : (
                <div className="filter__price">
                    <div className="price_range">
                        <label>Min</label>
                        <input className="range" type="number"/>
                    </div>
                    <div className="price_range">
                        <label>Max</label>
                        <input className="range" type="number"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;