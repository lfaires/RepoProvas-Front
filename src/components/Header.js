import styled from 'styled-components';

export default function Header(){
    return(
        <Container>
            Driven Repo Exams
        </Container>
    )
}

const Container = styled.header`
    height: 100px;
    background-color: #260B34;
    font-family: 'Ubuntu';
    font-size: 40px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 35px;
    box-shadow: 0 1px 6px 0 rgb(64, 64, 64);
`