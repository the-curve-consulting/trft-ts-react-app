import 'bootstrap/dist/css/bootstrap.min.css';
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
      <hr />
      <StateDemo initalValue={10} multipleOfTen={(val) => { alert(val); }} />
      <hr />
      <StateDemo initalValue={-100} />
    </div>
  );
}

export default App;
