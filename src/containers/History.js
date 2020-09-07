import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import HistoryList from '../components/HistoryList';

class History extends Component {
    state = {
        history: []
    }

    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/patientHistory/')
      .then(res => {
        this.setState({
          history: res.data
        });
        console.log(res.data)
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
              <HistoryList />
              <HistoryList />
            </MDBTableBody>
          </MDBTable>
        </div>
        );
    }
}

export default History;