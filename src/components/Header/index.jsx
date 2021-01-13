import React from 'react';
import './styles.css';

function Header({ black }) {
    return (
        <header className={black ? 'black' : ''}>
           <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/300px-Netflix_2014_logo.svg.png"/>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
            
        </header>
    )
}



export default Header;