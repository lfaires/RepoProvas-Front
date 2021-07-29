import { useHistory } from 'react-router';
import { Body, Text, Form, Button } from '../styles/commonStyles';

import Header from "./Header";

export default function FilterPage() {
    const history = useHistory();

    return(
        <>
        <Header/>
        <Body>
            <Text>
                Find an exam by instructor or course.
            </Text>
            <Form>
                <Button onClick={() => history.push('/instructors')}>Instructors</Button>
                <Button onClick={() => history.push('/courses')}>Courses</Button>
            </Form>
        </Body>
        </>
    )
}