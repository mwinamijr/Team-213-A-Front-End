import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './containers/Layout';
import History from './containers/History';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <History />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
