import { Component } from "react"
import "../styles/information.css";

export default class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      showForm: true,
    }
  }

  onNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  onPhoneChange = (e) => {
    this.setState({phoneNumber: e.target.value});
  }

  onSubmitContactInfo = (e) => {
    e.preventDefault();
    this.setState({showForm: false});
  }

  onEditContactInfo = (e) => {
    e.preventDefault();
    this.setState({showForm: true});
  }

  getForm() {
    return (
      <div id="contactInfoContainer">
        <form id="contactInfoForm" onSubmit={this.onSubmitContactInfo}>
          <label htmlFor="fullNameInput">Full Name: </label>
          <input type="text" id="fullNameInput" value={this.state.name} onChange={this.onNameChange}/>
          <label htmlFor="emailInput">Email: </label>
          <input type="email" id="emailInput" value={this.state.email} onChange={this.onEmailChange}/>
          <label htmlFor="phoneNumberInput">Phone Number: </label>
          <input type="number" id="phoneNumberInput" value={this.state.phoneNumber} onChange={this.onPhoneChange} />
          <button type="submit" className="submitButton" >Submit Info</button>
        </form>
      </div>
    );
  }

  showInformation() {
    return (
      <div id="contactInfoContainer">
        <form id="contactInfoForm" onSubmit={this.onEditContactInfo}>
          <div>Full Name: </div>
          <div>{this.state.name}</div>
          <div>Email: </div>
          <div>{this.state.email}</div>
          <div>Phone Number: </div>
          <div>{this.state.phoneNumber}</div>
          <button type="submit" className="editButton">Edit Info</button>
        </form>
      </div>
    )
  }

  render() {
    if(this.state.showForm) {
      return this.getForm();
    }
    return this.showInformation();
  }   
}