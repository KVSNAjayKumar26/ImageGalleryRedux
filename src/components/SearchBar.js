import React from 'react'
import { useDispatch } from 'react-redux'
import { filterImages } from '../redux/actions';
import './SearchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(filterImages(event.target.value));
    };

  return (
    <input
    className='search-bar'
    type='text'
    placeholder='Search by category...'
    onChange={handleFilterChange}
    />
  );
};

export default SearchBar;