import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects/index';
import CardsVideos from '../pages/CardsVideos';
import Videos from '../pages/Videos';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/cardsvideos" component={CardsVideos} />
            <Route path="/:id" component={Videos} />
        </Switch>
    )
}

export default Routes;