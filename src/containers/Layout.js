import React from "react";

import { MDBContainer } from "mdbreact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Layout extends React.Component {
    render() {
      return (
        <div>
          <MDBContainer>
            <Navbar />
            <div>
              {this.props.children}
            </div>
            <Footer />
            </MDBContainer>
        </div>
        );
    }
  }


export default Layout;