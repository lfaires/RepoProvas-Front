import styled from "styled-components";

import Header from "./Header";
import { Body, Title } from '../styles/commonStyles';

export default function CoursePage() {
    return(
        <>
        <Header/>
        <Body>
            <Title>
                Courses
            </Title>
            <InstructorsContainer>

            </InstructorsContainer>
        </Body>
        </>
    )
}
const InstructorsContainer = styled.ul`
    margin-top: 25px;
`