import React, {Component} from "react";
//import Arthur from "./arthur.jpeg";
import Revelations15 from "./revelations.png";



class biblestudy extends Component{

    render() {
        return (
            <div>
                    <div className="bibleStudy" >
                <div className="bibleStudy">
                   <img src={Revelations15} height={"70%"}  width={"70%"} className="revelations" alt={"revelations"}/>
                <h5>We are currently reading Revelations Chapter 15.</h5>

                </div>
                </div>
            </div>


        );

    }

}

export default biblestudy;
