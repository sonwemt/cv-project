import { Component } from "react";

export default class EducationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      school: this.props.education.school,
      study: this.props.education.study,
      start: this.props.education.start,
      end: this.props.education.end,
    }

    this.handleSchoolChange.bind(this);
    this.handleStudyChange.bind(this);
    this.handleStartChange.bind(this);
    this.handleEndChange.bind(this);
    this.handleSubmit.bind(this);
  } 
  
  handleSchoolChange = (e) => {
    this.setState({ school: e.target.value });
  }

  handleStudyChange = (e) => {
    this.setState({ study: e.target.value });
  }

  handleStartChange = (e) => {
    this.setState({start: e.target.value});
  }

  handleEndChange = (e) => {
    this.setState({end: e.target.value,});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const submitInfo = {
      school: this.state.school,
      study: this.state.study,
      start: this.state.start,
      end: this.state.end,
      showEdit: this.props.education.showEdit,
      index: this.props.education.index,
      id: this.props.education.id,
    };
    this.props.submit(submitInfo);
    this.setState({
        school: this.props.education.school,
        study: this.props.education.study,
        start: this.props.education.start,
        end: this.props.education.end,
    });
  }

  render() {
    return(
      <form className="educationForm" onSubmit={this.handleSubmit}>
        <label htmlFor="schoolNameInput">Name of school: </label>
        <input type="text" id="schoolNameInput" value={this.state.school} onChange={this.handleSchoolChange} />

        <label htmlFor="studyInput">Type of study: </label>
        <input type="text" id="studyInput" value={this.state.study} onChange={this.handleStudyChange} />

        <label htmlFor="studyStart">Start date: </label>
        <input type="date" id="studyStart" value={this.state.start} onChange={this.handleStartChange} />

        <label htmlFor="studyEnd">End date: </label>
        <input type="date" id="studyEnd" value={this.state.end} onChange={this.handleEndChange} />

        <button type="submit">{!this.props.education.showEdit ? 'Add' : 'Update'}</button>
      </form>
    );
  }
}