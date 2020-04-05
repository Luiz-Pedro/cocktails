import styled from 'styled-components';


export const BackButton = styled.div`
    width: 65%;
    margin: auto;
    margin-top: 5em;
    svg{
        color: #eeeeee;
        cursor: pointer;
        &:hover{
        opacity: 0.8
    }
    }
    
    @media (max-width: 1300px){
        margin-top: 4em;
    }
   
`;

export const RecipeWrapper = styled.section`
    width: 65%;
    height: 60%;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 2em;

    @media (max-width: 600px){
        grid-template-columns: 1fr;
        position: inherit;
        transform: none;
        height: auto;
        margin-bottom: 3em;
    }
`;

export const PrincipalInfo = styled.div`
    background: rgb(26, 30, 36, 0.7);
    border-radius: 26px;
    color: #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 2em;

    h1{
        @media (max-width: 600px){
            margin-bottom: 1em;
        }
    }

    img{
        width: 100px;
        height: 100px;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 1em;
    }

    div{
        display: flex;
        justify-content: space-evenly;
        margin-top: auto;
        margin-bottom: auto;
    }
`;

export const IngredientsMeasures = styled.section`
    border-left: solid 2px #eeeeee;
    padding: 0 0 0 1em;

    span{
        font-size: 0.7em;
        
    }
    p{
        margin-bottom: -0.5em;
        margin-top: 0.5em;
    }
`;

export const DescriptionalInfo = styled.div`
    background: rgb(26, 30, 36, 0.7);
    border-radius: 26px;
    color: #eeeeee;
    padding: 2em 2em;

    h2{
        text-align: center;
    }

    p{
        margin-top: 2em;
        font-size: 1em;
        letter-spacing: .5px;
        line-height: 1.5em;
        @media (max-width: 1300px){
            font-size: 0.8em;
        }
        @media (max-width: 600px){
            font-size: 1em;
        }
    }
`;