import styled from "styled-components";
import bg from "../../images/background-login.jpg"


export const Container = styled.main`

    height: 100vh;
    font-size: 1rem;
    background-image: url(${bg});
    display: flex;

    * {
        border: 1px solid red;
    }

    section:first-of-type {
        border: 4px solid red;
        color: red;
        width: 50vw;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    section {
        border: 4px solid blue;
        color: white;
        width: 50vw;
        justify-content: center;
        display: flex;
        align-items: center;

        div {
            padding: 9rem;
            background: rgba(148, 50, 247, 0.3);
            backdrop-filter: blur(5.5px);
            width: 41rem;
            height: 46rem;
            border-radius: 0.5rem;
            margin-top: 6rem;
            /* justify-content: space-around; */
            align-items: center;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            
            h2 {
                font-size: 2rem;
            }

            h4 {
                font-weight: 300;
                font-size: 1.5rem;
            }


            input, input:focus {
                height: 2rem;
                width: 24rem;
                border: none;
                outline: none;
                padding: 0.2rem;
                font-size: 1rem;
                border-radius: 0.25rem;
            }

            button {
                padding: 0.2rem;
                width: 8rem;
                height: 2rem;
            }
            
        }
    }


    
`