import styled from 'styled-components';

export const HomeWrapper = styled.section`
    max-height: 100vh;
    height: 85vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0em;
    @media (max-width: 1300px){
        height: 80vh;
    }
    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`;

export const ImagemCocktail = styled.img`
    height: 94%;
    width: 108%;
    @media (max-width: 600px){
        height: auto;
        width: 43%;
        order: 2;
        transform: rotate(-89deg);
        justify-self: center;
        margin-top: 3em;
    }
`;

export const RightSide = styled.div`
    align-self: center;

    @media (max-width: 600px){
        text-align: center;
        margin-top: 2em;
    }
`;

export const Description = styled.div`
    margin-top: 3em;
    text-align: center;
    margin-left: -8em;

    @media (max-width: 600px){
        margin-left: 0;
    }

    p{
        color: #B9B9B0;
        font-size: 1em;
    }
    a{
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
        margin-top: 1em;
        display: inline-flex;
        align-items: center;
        &:hover{
            box-shadow: none;
        }
        svg{
            color: #eeeeee;

        }
    }
`;

export const Title = styled.img`
    height: auto;
    width: 80%;
`;

