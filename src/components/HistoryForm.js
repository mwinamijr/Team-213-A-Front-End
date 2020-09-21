import React from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const HistoryForm = () => {

    const handleSubmit = (event, requestType, historyID) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const address = event.target.elements.address.value;
        const age = event.target.elements.age.value;
        const presentHistory = event.target.elements.presentHistory.value;
        const medicationHistory = event.target.elements.medicationHistory.value;
        const pastHistory = event.target.elements.pastHistory.value;
        const familyHistory = event.target.elements.familyHistory.value;
        const socialHistory = event.target.elements.socialHistory.value;

        switch (requestType) {
          case "post":
            axios.post("http://127.0.0.1:8000/api/", {
              name: name, address: address, age: age, presentHistory: presentHistory,
              medicationHistory: medicationHistory, pastHistory: pastHistory,
              familyHistory: familyHistory, socialHistory: socialHistory
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            break;
          case "put":
            axios.put(`http://127.0.0.1:8000/api/${historyID}/`, {
              name: name, address: address, age: age, presentHistory: presentHistory,
              medicationHistory: medicationHistory, pastHistory: pastHistory,
              familyHistory: familyHistory, socialHistory: socialHistory
            })
            .then(res => console.log(res))
            .catch(err => console.err(err))
            break;
          default:
            break;
        }
    };
    
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form onSubmit={(event) => handleSubmit(event, "post", null)}>
          <br />
        <p className="h5 text-center mb-4">Add new patient history</p>
        <div className="grey-text">
          <MDBInput label="Patient name" name='name' group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Address" name='address' group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Age" name='age' group type="number" validate error="wrong" success="right" />
         
        </div>
        
        <p className="h5 text-center mb-4">Patient Medical History</p>
        <div className="grey-text">
          <MDBInput label="Presenting illness history" name='presentHistory' group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Medication History" name='medicationHistory' group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Past Medical History" name='pastHistory' group type="text" validate error="wrong" success="right" />
          <MDBInput label="Family History" name='familyHistory' group type="text" validate error="wrong" success="right" />
          <MDBInput label="Social History" name='socialHistory' group type="text" validate error="wrong" success="right" />
         
        </div>
        <div className="text-center">
          <MDBBtn outline color="primary" type='submit'>
            Submit
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default HistoryForm;