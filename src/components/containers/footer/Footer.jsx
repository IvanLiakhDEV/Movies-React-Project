import React from 'react';
import style from './Footer.module.css';
import github from '../../../images/github.png';
export const Footer = () => {
    return (
        <div className='container'>
            <div className={`content`}>
                <a
                    className={style.githubHref}
                    href='https://www.youtube.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <img
                        src={github}
                        width={50}
                    />
                    Repository
                </a>
            </div>
        </div>
    );
};
