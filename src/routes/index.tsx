import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects/index';

const Routes: React.FC = ()=>{

    return(
            <Switch>
                 <Route  path="/" exact  component={Home}/>
                 <Route  path="/projects" component={Projects}/>
            </Switch>
    )
}

export default Routes;