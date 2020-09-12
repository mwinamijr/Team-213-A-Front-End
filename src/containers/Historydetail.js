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
      axios.get(`http://127.0.0.1:8000/api/${historyID}`)
      .then(res => {
        this.setState({
          history: res.data
        });
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
                material containerClassName="mb-2 mt-0" prepend="Name" value={this.state.history.name}
              />
              <MDBInputGroup
                material containerClassName="mb-2 mt-0" prepend="Address" value={this.state.history.address}
              />
              <MDBInputGroup
                material conta
                inerClassName="mb-2 mt-0" prepend="Age" value={this.state.history.age}
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
                        <td>Presenting illness history</td>
                        <td>{this.state.history.history_of_presenting_illness}</td>
                      </tr>
                      <tr>
                        <td>Medication History</td>
                        <td>{this.state.history.medication_history}</td>
                      </tr>
                      <tr>
                        <td>Past Medical History</td>
                        <td>{this.state.history.past_medical_history}</td>
                      </tr>
                      <tr>
                        <td>Family History</td>
                        <td>{this.state.history.family_history}</td>
                      </tr>
                      <tr>
                        <td>Social History</td>
                        <td>{this.state.history.social_history}</td>
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