import React, {Fragment, useState} from 'react';
import Form from './components/Form';
import Header from './components/Header';

function App() {

  const [category, saveCategory] = useState('');

  return (
    <Fragment>
      <Header
        title='News Finder'
      />
      <div className="container white">
        <Form
          saveCategory={saveCategory}
        />
      </div>
    </Fragment>
  );
}

export default App;
