import styled from 'styled-components';

export const FormCocktails = styled.form`

    width: 45%;
    margin: 2em auto;
    @media (max-width: 600px){
        width: 80%; 
    }

    input{
        width: 100%;
        height: 3.5em;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 1em;

    }
`;

export const WaitingGlasses = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 3em;

    svg{
        width: 150px;
        height: 150px;
        @media (max-width: 1300px){
            width: 100px;
            height: 100px;
        }
        @media (max-width: 600px){
            width: 150px;
            height: 150px;
        }
    }
    
`;

export const CocktailsUl = styled.ul`
    width: 45%;
    margin: 2em auto;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
`;

export const CocktailsLi = styled.li`
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100px;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    
    h2{
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;