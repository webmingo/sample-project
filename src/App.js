import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sample project for you to show a sample deployment</p>
        <div>
          
            Project description:
            Have you ever deployed/hosted a site on 
            www.stormkit.io
             ? It's serverless architecture and you just have to signup with your git account to deploy a project from in just a few seconds. It's simple and it's free. Can you create an account on 
            www.stormkit.io
            and try to deploy something?
            If you manage to deploy something please send the url of the deployment and then we can discuss the project. Please try 
            www.stormkit.io
            and let me know if this is something you can work 
        </div>
      </header>
    </div>
  );
}

export default App;
