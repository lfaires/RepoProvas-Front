import styled from "styled-components";

export const Body = styled.main`
    width: 895px;
    margin-top: 130px;
    margin-left: 35px;

    @media (max-width: 895px){
        width: 100vw;
        margin-left: 0;
        margin: 130px auto;
        padding: 0 35px;
    }
`
export const Text = styled.p`
    text-align: justify;
    font-family: 'Gowun Batang';
    font-size: 20px;

    @media (max-width: 414px){
        font-size: 16px;
    }
`
export const Form = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 895px){
        width: 100%;
        height: 160px;
        flex-direction: column;
    }
`
export const Button = styled.button`
    background-color: #3C1053;
    height: 50px;
    width: 200px;
    color: #fff;
    margin-right: 30px;
    border: none;

    @media (max-width: 895px){
        width: 150px;
        margin-right: 0;
        margin-bottom: 30px;
    }
`
export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    font-family: 'Gowun Batang';
    color: #3C1053;
`