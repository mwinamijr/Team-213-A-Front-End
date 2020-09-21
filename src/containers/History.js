import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";

import HistoryList from "../components/HistoryList";

class History extends Component {
    state = {
        histories: []
    }

    componentDidMount() {
      axios.get("http://127.0.0.1:8000/api/")
      .then((res) => {
        this.setState({
          histories: res.data
        });
      });
    }


    render() {
        return (
        <div>
          <MDBTable>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <HistoryList data={this.state.histories} />
              
            </MDBTableBody>
          </MDBTable>

          <Fragment>
          <MDBBtn outline><Link to="/addHistory">Add New History</Link></MDBBtn>
          
        </Fragment>
        </div>
        );
    }
}

export default History;