import React, {Component} from "react";
import Arthur from "./arthur.jpeg";
import Revelations15 from "./revelations15.png";



class biblestudy extends Component{

    render() {
        return (
            <div>
                    <div className="bibleStudy" >
                <div className="bibleStudy">
                   <img src={Revelations15} height="50%" width="50%" className="revelations"/>

                <h2>We are currently reading Revelations Chapter 15.</h2>

                </div>
                </div>
            </div>


        );

    }

}

export default biblestudy;
