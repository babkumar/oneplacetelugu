import React, {Component} from "react";
import Arthur from "./arthur.jpeg";
import Revelations15 from "./revelations15.png";



class biblestudy extends Component{

    render() {
        return (
            <div>
                    <div className="bibleStudy" >
                <div className="bibleStudy">
                   <img src={Revelations15} height={"100%"}  width={"100%"} className="revelations"/>

                <i>We are currently reading Revelations Chapter 15.</i>

                </div>
                </div>
            </div>


        );

    }

}

export default biblestudy;
