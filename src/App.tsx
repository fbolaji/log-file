import React from 'react';
import './App.css';

import LogsListComponent from "./components/logsList";
import { Container } from "react-bootstrap";
import HeaderComponent from "./components/sharedComponents/header";

function App() {
  return (
    <div className="App">
        <Container fluid="lg">
            <HeaderComponent title="Asset control logs File" />
            <LogsListComponent />
        </Container>
    </div>
  );
}

export default App;
