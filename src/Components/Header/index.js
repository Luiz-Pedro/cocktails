import React from 'react';
import { NavLink } from 'react-router-dom';

import { Header, Menus } from './style';
import { FaCocktail } from 'react-icons/fa';


export default function Home(){

    return(
        <Header>
            <NavLink to="/" ><FaCocktail size={25}/></NavLink>
            <Menus>
                <li>
                    <NavLink to="/cocktails" activeClassName="menuClicado">cocktails</NavLink>
                </li>
            </Menus>
        </Header>
    );
}