import { Component } from "react";

export default class EducationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      education: {
        school: this.props.education.school,
        study: this.props.education.study,
        start: this.props.education.start,
        end: this.props.education.end,
      }
    }

    this.handleSchoolChange.bind(this);
    this.handleStudyChange.bind(this);
    this.handleStartChange.bind(this);
    this.handleEndChange.bind(this);
    this.handleSubmit.bind(this);
  } 
  
  handleSchoolChange = (e) => {
    this.setState({education: {
      school: e.target.value,
      study: this.state.education.study,
      start: this.state.education.start,
      end: this.state.education.end,
    }});
  }

  handleStudyChange = (e) => {
    this.setState({education: {
      school: this.state.education.school,
      study: e.target.value,
      start: this.state.education.start,
      end: this.state.education.end,
    }});
  }

  handleStartChange = (e) => {
    this.setState({education: {
      school: this.state.education.school,
      study: this.state.education.study,
      start: e.target.value,
      end: this.state.education.end,
    }});
  }

  handleEndChange = (e) => {
    this.setState({education: {
      school: this.state.education.school,
      study: this.state.education.study,
      start: this.state.education.start,
      end: e.target.value,
    }});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const submitInfo = {
      school: this.state.education.school,
      study: this.state.education.study,
      start: this.state.education.start,
      end: this.state.education.end,
      status: this.props.education.status,
      index: this.props.education.index,
      id: this.props.education.id,
    };
    this.props.submit(submitInfo);
    this.setState({
      education: {
        school: this.props.education.school,
        study: this.props.education.study,
        start: this.props.education.start,
        end: this.props.education.end,
      }
    })
  }

  render() {
    return(
      <form id="educationForm" onSubmit={this.handleSubmit}>
        <label htmlFor="schoolNameInput">Name of school: </label>
        <input type="text" id="schoolNameInput" value={this.state.education.school} onChange={this.handleSchoolChange} />

        <label htmlFor="studyInput">Type of study: </label>
        <input type="text" id="studyInput" value={this.state.education.study} onChange={this.handleStudyChange} />

        <label htmlFor="studyStart">Start date: </label>
        <input type="date" id="studyStart" value={this.state.education.start} onChange={this.handleStartChange} />

        <label htmlFor="studyEnd">End date: </label>
        <input type="date" id="studyEnd" value={this.state.education.end} onChange={this.handleEndChange} />

        <button type="submit">{!this.props.education.status ? 'Add' : 'Update'}</button>
      </form>
    );
  }
}