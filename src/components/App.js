import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './HomePage';
import CoursePage from './CoursePage';
import ProfessorPage from './ProfessorPage';
import SendExamPage from './SendExamPage';
import FilterPage from "./FilterPage";

import '../styles/reset.css'

export default function App() {
    return(
        <BrowserRouter> 
            <Switch>             
                <Route path="/" component={HomePage} exact/>
                <Route path="/courses" component={CoursePage} exact/>
                <Route path="/instructors" component={ProfessorPage} exact/>
                <Route path="/send-exam" component={SendExamPage} exact/>
                <Route path="/course-instructor" component={FilterPage} exact/>
            </Switch>
        </BrowserRouter>
    )
}