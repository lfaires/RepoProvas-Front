import styled from 'styled-components';

export default function Header(){
    return(
        <Container>
            Driven Repo Exams
        </Container>
    )
}

const Container = styled.header`
    width: 100vw;
    height: 100px;
    background-color: #260B34;
    font-family: 'Ubuntu';
    font-size: 40px;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 35px;
    box-shadow: 0 1px 6px 0 rgb(64, 64, 64);

    @media (max-width: 414px){
        font-size: 28px;
        justify-content: center;
        padding-left: 0;
    }
`