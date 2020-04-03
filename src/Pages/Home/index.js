import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header';

import { HomeWrapper, ImagemCocktail, RightSide, Title, Description} from './style';
import { TiArrowRight } from 'react-icons/ti';
import imagemCocktail from '../../Assets/cocktail.png';
import titleImage from '../../Assets/title.png';


export default function Home(){

    return(
        <>
            <Header />
            <HomeWrapper>
                <ImagemCocktail src ={imagemCocktail}/>
                <RightSide>
                    <Title src ={titleImage} />
                    <Description>
                        <p>The ultimate guide to cocktails.</p>
                        <Link to="/cocktails">Search for recipes <TiArrowRight size={20}/></Link>
                    </Description>
                </RightSide>
            </HomeWrapper>
        </>
    );
}