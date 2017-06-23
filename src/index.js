import React from 'react';
import ReactDOM from 'react-dom';

import {  HashRouter as Router, Route} from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Teacher from './pages/Teacher'
import TeacherLiving from './pages/TeacherLiving'
import Doctor from './pages/Doctor'
import Parent from './pages/Parent'

//import styles
import 'weui';
import 'react-weui/lib/react-weui.min.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    
    <Router>
        <div >
            <Route exact path="/" component={App}/>
            <Route path="/teacher" component={Teacher}/>
            <Route path="/teacher-living" component={TeacherLiving}/>
            <Route path="/doctor" component={Doctor}/>
            <Route path="/parent" component={Parent}/>
           
        </div>
    </Router>

    , document.getElementById('root'));
registerServiceWorker();
