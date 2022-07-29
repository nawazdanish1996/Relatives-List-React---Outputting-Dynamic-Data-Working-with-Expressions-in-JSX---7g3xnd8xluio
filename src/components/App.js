import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */
                    <ol key={relativeList}>
                        <li key={relativeListItem1}>Raja</li>
                        <li key={relativeListItem2}>Rana</li>
                    </ol>
               }
            </div>
        )
    }
}


export default App;
