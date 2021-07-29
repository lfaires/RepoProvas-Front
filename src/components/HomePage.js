import styled from 'styled-components';

import Header from './Header';

export default function HomePage() {
    return(
        <>
        <Header/>
        <Body>
            <Text>
                This repository contains a set of past exams provided by students. 
            </Text>
            <br/>
            <Text>
                You can search for exams clicking on view button below and filter your search by instructor or course.
            </Text>
            <br/>
            <Text>
                If you want to include an exam into the repository click on send button bellow.
            </Text>
            <Form>
                <Button>View Exams</Button>
                <Button>Send Exam</Button>
            </Form>
        </Body>
        </>
    )
}

const Body = styled.main`
    width: 950px;
    margin-top: 130px;
    margin-left: 35px;
`
const Text = styled.p`
    font-family: 'Gowun Batang';
    font-size: 20px;
`
const Form = styled.form`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`
const Button = styled.button`
    background-color: #3C1053;
    height: 50px;
    width: 200px;
    color: #fff;
    margin-right: 30px;
    border: none;

`