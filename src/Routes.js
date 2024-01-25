import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './pages/Main';
import CV from './pages/CV';
import Blog from './pages/Blog';

const Routes = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" component={Main}>
            <Route exact path="/CV" component={CV}></Route>
            <Route exact path="/Blog" component={Blog}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default Routes