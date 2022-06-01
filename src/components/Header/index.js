import React from "react";
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {


    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/c3/3b/32/c33b322b61b8f30f0df1d0b3de690734.png" alt="Usuario"/>
                </a>
            </div>
        </header>

    );

}