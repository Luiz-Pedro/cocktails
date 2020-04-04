import React, { useState } from 'react';

import Header from '../../Components/Header';
import { FormCocktails, WaitingGlasses, CocktailsUl, CocktailsLi } from './style';
// import { FaGlassMartiniAlt, FaWineGlassAlt, FaGlassWhiskey } from 'react-icons/fa';
import IconCoqueteleira from "../../Assets/Icons/coqueteleira";


import Api from '../../Services/Api';


export default function Cocktails(){

    const [query, setQuery] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [queryStatus, setQueryStatus] = useState('waiting');



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
    
  
    return(
        <>
            <Header />

            <FormCocktails onSubmit={handleSubmit}>
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder={"Search for a cocktail"}/>
                <button type="submit">
                    Search
                </button>
                {queryStatus === 'waiting' &&
                    <WaitingGlasses>
                        <IconCoqueteleira/>
                    </WaitingGlasses>
                }
                {queryStatus === 'not found' &&
                    <WaitingGlasses>
                        <h1>Cocktail not found</h1>
                    </WaitingGlasses>
                }
            </FormCocktails>

            {queryStatus === 'found' && 
                <CocktailsUl>
                    {cocktails.map(cocktail => (
                    <CocktailsLi key={cocktail.idDrink} backgroundImage={`${cocktail.strDrinkThumb}/preview`}>
                        <h2>{cocktail.strDrink}</h2>
                    </CocktailsLi>
                    ))}
                </CocktailsUl> 
            }
        </>
    );
}