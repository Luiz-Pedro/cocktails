import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../Components/Header';
import { FormCocktails, IconFormWrapper, CocktailsUl, CocktailsLi } from './style';
import { MdSearch } from 'react-icons/md';
import { TiArrowRight } from 'react-icons/ti';

import imgcocktail from '../../Assets/Icons/party.svg'
import IconCoqueteleira from "../../Assets/Icons/coqueteleira";
import IconSad from "../../Assets/Icons/sad";

import Api from '../../Services/Api';


export default function Cocktails(){

    const [query, setQuery] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [queryStatus, setQueryStatus] = useState('waiting');

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            await Api.get(`/search.php?s=${query}`)
            .then(response => {
                if(response.data.drinks === null){
                    setQueryStatus('not found');
                }else{
                    setCocktails(response.data.drinks);
                    setQueryStatus('found');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    function handleRecipe(cocktailData){
        history.push(`/recipe:${cocktailData.strDrink}`, { cocktailData });
    }
    
  
    return(
        <>
            <Header />

            <FormCocktails onSubmit={handleSubmit}>
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder={"Cocktail name"}/>
                <button type="submit">Search for recipes <MdSearch size={20}/></button>
                
                {queryStatus === 'waiting' &&
                    <IconFormWrapper>
                        <IconCoqueteleira/>
                    </IconFormWrapper>
                }
                {queryStatus === 'not found' &&
                    <IconFormWrapper>
                        <IconSad />
                        <h2>Cocktail Not Found</h2>
                    </IconFormWrapper>
                }
            </FormCocktails>

            {queryStatus === 'found' && 
                <CocktailsUl>
                    {cocktails.map(cocktail => (
                    <CocktailsLi key={cocktail.idDrink} onClick={() => handleRecipe(cocktail)}>
                        <img src={imgcocktail}/>
                        <h2>{cocktail.strDrink}</h2>
                        <TiArrowRight size={25}/>
                    </CocktailsLi>
                    ))}
                </CocktailsUl> 
            }
        </>
    );
}