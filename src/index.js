import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import './styles/customize.css';
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './views/HomeView';
import AttackFrequency from './views/AttackFrequencyView';
import TopVictimServers from './views/TopVictimServersView';
import AttackSourcesMap from './views/AttackSourcesMapView';

const routing = (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/attack-frequency" component={AttackFrequency}/>
        <Route exact path="/top-victim-servers" component={TopVictimServers}/>
        <Route exact path="/attack-sources-map" component={AttackSourcesMap}/>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
