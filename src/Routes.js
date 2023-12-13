import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './pages/Main';
import CV from './pages/CV';
import PS from './pages/PS';

const Routes = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" component={Main}>
            <Route exact path="/CV" component={CV}></Route>
            <Route exact path="/PS" component={PS}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default Routes