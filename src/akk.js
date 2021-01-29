import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
//import { sampleBase64pdf } from "./sampleBase64pdf";
/* This is required only if the project file is located
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./akk.pdf";

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <h4>Andhra Kristhava Keerthanalu</h4>
            <div className="all-page-container">
                <AllPagesPDFViewer pdf={samplePDF} />
            </div>

            <hr />
        </div>
    );
}
