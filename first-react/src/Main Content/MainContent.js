import React from "react";

function MainContent() {
    return(
        <div className="main">
        <div className="content container-fluid text-white pt-5 d-inline-block">
        <h1>Fun facts about React</h1>
        <ul>
          <li className="mt-4">Was first released in 2013</li>
          <li className="mt-2">Was originally created by Jordan Walke</li>
          <li className="mt-2">Has well over 100K stars on Github</li>
          <li className="mt-2">Is maintained by Facebook</li>
          <li className="mt-2">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
        </div>
    )
}

export default MainContent;