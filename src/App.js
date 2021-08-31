import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from "axios";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";

var time;
var timeSite=new Date()-new Date();

// User has entered the website
window.onload=function() {
  time=new Date();
  console.log("Website loaded");
  console.log(time);
  //if there is time stored in localstorage from previous session, send it to the server
  var timePrevSession = localStorage.getItem("timePrevSession");
  if(timePrevSession!=null){
    console.log("sending prev session time "+ timePrevSession);
    //send time to server
    patchData('http://localhost:5000/', { name: "Tanish", timeSpent: timePrevSession }); 
    localStorage.removeItem("timePrevSession");
  }
}

// User has switched away from the tab (AKA tab is hidden)
const onBlur = () => {
  timeSite+=(new Date()-time)/1000;
  console.log('Tab is blurred');
  console.log(timeSite+' sec');
};

// User has switched back to the tab
const onFocus = () => {
  time=new Date();
  console.log('Tab is in focus');
  console.log(time);
};

//User has left the website
const onBeforeUnload = () => {
  timeSite+=(new Date()-time)/1000;
  localStorage.setItem('timePrevSession', timeSite);
}

const sendTime = () => {
  timeSite+=(new Date()-time)/1000;
  console.log("Time is being sent to the server");
  console.log(timeSite);
  //send time to server
  patchData('http://localhost:5000/', { name: "Tanish", timeSpent: timeSite }); 
  time = new Date();
  timeSite = time - time;
}

async function patchData(url, data) {
  const res = await axios.patch(url,data);
}


function App() {
  useEffect(() => {
    // window.addEventListener('load', onLoad);
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    window.addEventListener('beforeunload', onBeforeUnload);
    // Specify how to clean up after this effect:
    return () => {
      // window.removeEventListener('load', onLoad);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  });
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/page1' exact render={() => (
          <Page1 sendTime={sendTime} />
        )} />
        <Route path='/page2' exact render={() => (
          <Page2 sendTime={sendTime} />
        )} />
        <Route path='/page3' exact render={() => (
          <Page3 sendTime={sendTime} />
        )} />
        <Route path='/page4' exact render={() => (
          <Page4 sendTime={sendTime} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;