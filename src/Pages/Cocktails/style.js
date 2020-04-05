import styled from 'styled-components';

export const FormCocktails = styled.form`

    width: 45%;
    margin: 4em auto;
    @media (max-width: 600px){
        width: 80%; 
    }

    input{

        width: 100%;
        height: 2.5em;
        color: #eeeeee;
        background: transparent;
        border: 0;
        border-bottom: solid 2px;
        border-image-source: linear-gradient(to left top, #53a3ec, #6381ca, #695fa4, #663f7b, #5b2052);
        border-image-slice: 1;
        padding: 0 0.5em; 
        font-size: 1.2em;

    }

    button{
        border: 0;
        background-image: linear-gradient(to right top, #53a3ec, #6381ca, #695fa4, #663f7b, #5b2052);
        padding: 1em 2em;
        cursor: pointer;
        color: #eeeeee;
        border-radius: 50px;
        box-shadow: 10px 10px 14px 1px rgba(00,00,00,0.2);
        letter-spacing: 0.094em;
        text-align: center;
        transition: all 0.5s;
        margin-top: 1.5em;
        display: inline-flex;
        align-items: center;
        &:hover{
            box-shadow: none;
        }
        svg{
            color: #eeeeee;
            margin-left: 1em;
        }
    }
`;

export const IconFormWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

    h2{
        color: rgb(26, 30, 36, 0.6);
        font-weight: bold;
    }
    
`;

export const CocktailsUl = styled.ul`
    width: 45%;
    margin: 2em auto;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2em;
    @media (max-width: 600px){
        width: 80%; 
    }
`;

export const CocktailsLi = styled.li`
    cursor: pointer;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    color: #eeeeee;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    font-size: 0.75em;
    padding: 2em 2em;
    transition: all 0.5s;
    &:hover{
        transform: scale(1.03);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    }

    img{
        width: 45px;
        height: 45px;
        margin-right: 2em;
    }

    svg{
        margin-left: auto;
    }

`;