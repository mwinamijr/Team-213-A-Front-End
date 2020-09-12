import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, 
  MDBInputGroup, MDBContainer, MDBTable, MDBTableBody, MDBTableHead 
} from "mdbreact";

class HistoryDetail extends Component {
    state = {
        history: []
    }

    componentDidMount() {
        const historyID = this.props.match.params.historyID;
      axios.get(`http://127.0.0.1:8000/api/patientHistory/${historyID}`)
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
          <br />
          <MDBContainer>
            <MDBCard className="w-100 mb-4">
            <MDBCardBody>
            <MDBCardTitle>Patient Information</MDBCardTitle>
              <MDBInputGroup
                material containerClassName="mb-2 mt-0" prepend="Name"
              />
              <MDBInputGroup
                material containerClassName="mb-2 mt-0" prepend="Address"
              />
              <MDBInputGroup
                material conta
                inerClassName="mb-2 mt-0" prepend="Age"
              />
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="w-100">
              <MDBCardBody>
                <MDBCardTitle>Patient medical history</MDBCardTitle>
                <MDBCardText>
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <th>History</th>
                        <th>Details</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                </MDBCardText>
                <MDBBtn color="primary">go somewhere</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
        );
    }
}

export default HistoryDetail;