import React, {Fragment} from 'react';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header
        title='News Finder'
      />
      <div className="container white">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
