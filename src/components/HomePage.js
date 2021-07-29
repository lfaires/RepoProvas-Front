import { useHistory } from 'react-router';

import Header from './Header';
import { Body, Text, Form, Button } from '../styles/commonStyles';

export default function HomePage() {
    const history = useHistory()

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
                <Button onClick={() => history.push('/course-instructor')}>View Exams</Button>
                <Button onClick={() => history.push('/send-exam')}>Send Exam</Button>
            </Form>
        </Body>
        </>
    )
};

