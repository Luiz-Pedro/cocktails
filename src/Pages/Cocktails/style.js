import styled from 'styled-components';


export const CasosUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    list-style: none;
    
    
    li{
        background: #fff;
        padding: 2em;
        border-radius: 8px;
        position: relative;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        transition: 0.3s;
        &:hover{
            transform: scale(1.03);
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        }

        strong{
            display: block;
            margin-bottom: 1em;
            color: #41414d;
        }

        p + strong{
            margin-top: 2.1em;
        }

        p{
            color: #737380;
            line-height: 21px;
            font-size: 1.1em;
        }

        button{
            position: absolute;
            right: 1.7em;
            top: 1.4em;
            border: 0;
            background: transparent;
            color: #a8a8b3;
            &:hover{
                color: #e02041;
            }
        }
    }
`;