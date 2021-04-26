import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageTitle } from './PageTitle';
import { StateDemo } from './StateDemo';

function App() {

  
  return (
    <div>
     <PageTitle title="My Page" />
     {/* <PageTitle title="My Other Page" /> */}
     <StateDemo />
    </div>
  );
}

export default App;
