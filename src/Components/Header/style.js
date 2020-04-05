import styled from 'styled-components';


export const Header = styled.header`
    background: transparent ;
    display:flex;
    justify-content: space-between;
    padding: 1em 6em 0.5em 6em;
    align-items: center;
    @media (max-width: 600px){
        padding: 1.5em 3em 1.5em 1em
    }

    a{
    
        padding: 0.5em;
        color: #eeeeee;
        font-size: 1.7em;
        font-weight: 600;
        @media (max-width: 600px){
            font-size: 1.2em;
        }
    }

    
`;

export const Menus = styled.ul`
    display:flex;

    li{
        margin-left: 1em;

        a{
            font-size: 1.2em;
            @media (max-width: 600px){
                font-size: 0.85em;
            }
        }
    }

`;