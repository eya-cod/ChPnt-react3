
import React from "react";
import './App.css';

import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ProfilPhoto from "./Component/Profile/ProfilPhoto";


function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
