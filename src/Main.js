import React from "react";
import "./bob.css";
import {Component} from "react";
import OneplaceTelugu from "./oneplacetelugu";
import Mydailybread from "./mydailybread";
import Akksongs from "./akk";
import Ptcs from "./ptcs";
import BibleStudy from "./biblestudy";
import { Route, HashRouter, NavLink} from "react-router-dom";


class Main extends Component {
    render()
    {
        return(
            <HashRouter>
                <div >
                    <h1>Telugu Christian Bible Resources</h1>
                    <ul className="header">
                        <li><NavLink to ="/biblestudy">Bible Study</NavLink></li>
                        <li><NavLink exact to="/">OneplaceTelugu</NavLink></li>
                        <li><NavLink to ="/akk">Andhra Kristhava Keerthanalu</NavLink></li>
                        <li><NavLink to ="/ptcs">Popular Telugu Christian Songs</NavLink></li>


                    </ul>
                   <div className="content">
                       <Route path="/biblestudy" component={BibleStudy}/>
                       <Route exact path="/" component={OneplaceTelugu}/>
                       <Route path="/akk" component={Akksongs}/>
                       <Route path="/ptcs" component={Ptcs}></Route>


                   </div>
                </div>
            </HashRouter>
        );
    }

}

export default Main;
