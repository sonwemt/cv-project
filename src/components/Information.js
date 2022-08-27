import { Component } from "react"

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
      <form id="contactInfoForm">
      <label htmlFor="fullNameInput">Full Name: </label>
      <input type="text" id="fullNameInput" value={this.state.name} onChange={this.onNameChange}/>

      <label htmlFor="emailInput">Email: </label>
      <input type="email" id="emailInput" value={this.state.email} onChange={this.onEmailChange}/>

      <label htmlFor="phoneNumberInput">Phone Number: </label>
      <input type="number" id="phoneNumberInput" value={this.state.phoneNumber} onChange={this.onPhoneChange} />

      <input type="submit" id="submitContactInfo" onClick={this.onSubmitContactInfo}/>
    </form>
    );
  }

  showInformation() {
    return (
      <form id="contactInfo">
        <div>Full Name: {this.state.name}<br/></div>
        <div>Email: {this.state.email}<br/></div>
        <div>Phone Number: {this.state.phoneNumber}<br/></div>
        <button type="submit" onClick={this.onEditContactInfo}>Edit</button>
      </form>
    )
  }

  render() {
    if(this.state.showForm) {
      return this.getForm();
    } 
    return this.showInformation();
  }   
}