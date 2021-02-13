import React, {Component} from "react";
import Arthur from "./arthur.jpeg";
import "./bob.css";


class oneplacetelugu extends Component{

    render() {
        return (
            <div>
                <h2>Welcome!  Let me introduce myself.</h2>
                <h3> I am Arthur Paul Netala leading the Friday Bible Study</h3>
                <img src={Arthur} className="arthur-image" alt={"arthur"} />
                <h3>We are Happy that you were able to find us.  We want you to join us in reading the Word of GOD, Studying and applying to our lives.</h3>
                    <h3>Let us grow together in the faith and hope our Lord has set for us.</h3>
                <h4>If you are interested to join us, please write to us at <i><u>fbsphx@gmail.com</u></i> we will let you know our next steps.</h4>
            </div>

        );

    }

}

export default oneplacetelugu;
