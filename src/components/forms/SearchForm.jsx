import React from 'react';
import style from './SearchForm.module.css';
import { SearchButton } from '../inputs/search/searchBTN/SearchButton';
import { SearchInput } from '../inputs/search/searchInput/SearchInput';
export const SearchForm = () => {
    return (
        <div className={style.searchForm}>
            <SearchInput />
            <SearchButton />
        </div>
    );
};
