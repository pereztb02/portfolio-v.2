import React from "react";
import Resume from "../assets/Tiffany Perez^J resume 2022.pdf";

export default function ResumePage() {
    return (
<div className="resume-div">
    <h2>Skills</h2>
    <p>Javascript, React, Node.js</p>
    <h2>Download my<a href={Resume}download >resume</a></h2>
</div>
    );
}