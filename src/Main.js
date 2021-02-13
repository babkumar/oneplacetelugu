import React from "react";
import "./bob.css";
import {Component} from "react";
import OneplaceTelugu from "./oneplacetelugu";
import Akksongs from "./akk";
import BibleStudy from "./biblestudy";
import { Route, HashRouter, NavLink} from "react-router-dom";
import fbsbanner from "./fsbbanner.png";
import fbsfooter from "./fbs-footer.png";


class Main extends Component {
    render()
    {
        return(
            <HashRouter>
                <div >
                    <div><img src={fbsbanner} alt={"fbs banner"} className={"fbsbanner"}/></div>
                         <ul className="header">
                             <li><NavLink exact to="/">Friday Bible Study</NavLink></li>
                             <li><NavLink to ="/biblestudy">Current Study</NavLink></li>
                             <li><NavLink to ="/akk">Andhra Kristhava Keerthanalu</NavLink></li>
                         </ul>
                   <div className="content">
                       <Route exact path="/" component={OneplaceTelugu} />
                       <Route exact path="/biblestudy" component={BibleStudy} />
                       <Route exact path="/akk" component={Akksongs} />
                  </div>

                    <div><img src={fbsfooter} alt={"fbsfooter"} className={"fbsfooter"}/></div>
                    <div>

                        <footer className="footer-format">&copy;Friday Bible Study, Phoenix-Arizona. All rights reserved.</footer>
                    </div>

                </div>
            </HashRouter>
        );
    }

}

export default Main;
