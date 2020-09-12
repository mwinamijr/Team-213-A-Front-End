import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './containers/Layout';
import BaseRouter from './routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <BaseRouter />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
