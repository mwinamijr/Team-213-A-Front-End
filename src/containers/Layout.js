import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Layout extends React.Component {
    render() {
      return (
        <div>
            <Navbar />
            <div>
              {this.props.children}
            </div>
            <Footer />
        </div>
        );
    }
  }


export default Layout;