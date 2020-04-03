import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header';

import { CasosUl } from './style';

import Api from '../../Services/Api';

export default function Cocktails(){

    const [cocktails, setCocktails] = useState([])

    useEffect( () => {
        Api.get('/filter.php?c=Cocktail')
        .then(response => {
            setCocktails(response.data.drinks);
        })
    }, []);

    return(
        <>
            <Header />
            <CasosUl>
                {cocktails.map(cocktail => (
                <li key={cocktail.idDrink}>
                    <strong>cocktail:</strong>
                    <p>{cocktail.strDrink}</p>
                </li>
                ))}
            </CasosUl>
        </>
    );
}