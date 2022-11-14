import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;


        @media screen and (max-width: 1920px) {
        font-size: 100%;
       }

        @media screen and (max-width: 1024px) {
        font-size: 94%;
       }

       @media screen and (max-width: 960px) {
        font-size: 90%;
       }

       @media screen and (max-width: 480px) {
        font-size: 80%;
       }
    }

    

`