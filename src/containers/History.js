import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import HistoryList from '../components/HistoryList';

class History extends Component {
    state = {
        histories: []
    }

    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/patientHistory/')
      .then(res => {
        this.setState({
          histories: res.data
        });
      })
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
        </div>
        );
    }
}

export default History;