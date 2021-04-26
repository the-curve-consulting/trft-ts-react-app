import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { EditTitle } from './EditTitle';
import { PageTitle } from './PageTitle';

function App() {

  const [pageTitle, setPageTitle] = useState<string>("Example Page");

  return (
    <div>
      <PageTitle title={pageTitle} />
      <hr />
      <EditTitle onChange={(name) => setPageTitle(name)} />
      {/* <StateDemo initalValue={10} multipleOfTen={(val) => { alert(val); }} /> 
      <hr />
      <StateDemo initalValue={-100} /> */}
    </div>
  );
}

export default App;
