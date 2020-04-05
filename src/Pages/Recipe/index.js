import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BackButton, RecipeWrapper, PrincipalInfo, IngredientsMeasures, DescriptionalInfo } from './style';
import cocktailImage from '../../Assets/Icons/cocktail.svg'

import { TiArrowLeft } from 'react-icons/ti';

export default function Recipe(props){
    const cocktailData = props.location.state.cocktailData;

    // const [ingredients, setIngredients] = useState([]);

    // let array = [];
    // for(var i = 1; i <= 15; i++){
    //     console.log(cocktailData[`strIngredient${i}`])
    //     array.push(cocktailData[`strIngredient${i}`]);
        
    // }
    // setIngredients(array)

    const history = useHistory();

    function back(){
        history.goBack();
    }

    return(
        <>
        <BackButton>
            <TiArrowLeft onClick={back} size={40}></TiArrowLeft>
        </BackButton>
        <RecipeWrapper>
            <PrincipalInfo>
                <h1>{cocktailData.strDrink}</h1>
                <div>
                    <img src ={`${cocktailData.strDrinkThumb}/preview`}/>
                    <IngredientsMeasures>
                        <p>{cocktailData.strIngredient1}</p>
                        <span>{cocktailData.strMeasure1}</span>
                        <p>{cocktailData.strIngredient2}</p>
                        <span>{cocktailData.strMeasure2}</span>
                        <p>{cocktailData.strIngredient3}</p>
                        <span>{cocktailData.strMeasure3}</span>
                        <p>{cocktailData.strIngredient4}</p>
                        <span>{cocktailData.strMeasure4}</span>
                    </IngredientsMeasures>
                </div>
            </PrincipalInfo>
            <DescriptionalInfo>
                <h2>Instructions</h2>
                <p>{cocktailData.strInstructions}</p>
            </DescriptionalInfo>
        </RecipeWrapper>
        </>
    );
}