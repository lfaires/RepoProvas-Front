import styled from 'styled-components';

export default function HomePage() {
    return(
        <>
        <Header>
            Driven Repo Exams
        </Header>
        </>
    )
}

const Header = styled.header`
    height: 100px;
    background-color: #260B34;
    font-family: 'Ubuntu';
    font-size: 35px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;
`