import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0c4a6e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: #fff;
        font-family: 'Monospace', sans-serif;
        margin: 1rem 0;
    }

    p{
        color: #fff;
        font-family: 'Monospace', sans-serif;
        font-size: 1rem;
        margin: 1rem 0;
    }
`

export const Content = styled.div`
    background-color: #fff;
    width: 40%;
    margin-top: 3rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`