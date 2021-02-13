import React from "react";
import "./bob.css";
import {Component} from "react";
import OneplaceTelugu from "./oneplacetelugu";
import Akksongs from "./akk";
import BibleStudy from "./biblestudy";
import { Route, HashRouter, NavLink} from "react-router-dom";


class Main extends Component {
    render()
    {
        return(
            <HashRouter>
                <div >
                      <h2>Friday Bible Study</h2>
                         <ul className="header">
                             <li><NavLink exact to="/">Friday Bible Service</NavLink></li>
                             <li><NavLink to ="/biblestudy">Bible Study</NavLink></li>
                             <li><NavLink to ="/akk">Andhra Kristhava Keerthanalu</NavLink></li>
                         </ul>
                   <div className="content">
                       <Route exact path="/" component={OneplaceTelugu} />
                       <Route exact path="/biblestudy" component={BibleStudy} />
                       <Route exact path="/akk" component={Akksongs} />
                  </div>

                </div>
            </HashRouter>
        );
    }

}

export default Main;
