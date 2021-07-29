import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from './HomePage'
import CoursePage from './CoursePage'
import ProfessorPage from './ProfessorPage'

import '../styles/reset.css'

export default function App() {
    return(
        <BrowserRouter> 
            <Switch>             
                <Route path="/" component={HomePage} exact/>
                <Route path="/courses" component={CoursePage} exact/>
                <Route path="/professors" component={ProfessorPage} exact/>
            </Switch>
        </BrowserRouter>
    )
}