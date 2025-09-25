import React from 'react';
import style from './SearchInput.module.css';
export const SearchInput = () => {
    return (
        <>
            <div className={style.searchContainer}>
                <input
                    className={style.input}
                    // onKeyDown={event => {
                    //     //event.key === 'Enter' && alert('doSmth');
                    // }}
                ></input>
            </div>
        </>
    );
};
