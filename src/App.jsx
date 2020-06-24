import React, { useState, useEffect } from "react";

const App = () => {
    const [state, setState] = useState({ url: "url"});
    useEffect(() => {
        const tabUrl = url => setState(url);
        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "message", function(response){
                setState({url: response});
            })
        })
    }, []);
return <h1>{state.url}</h1>
};
export default App;