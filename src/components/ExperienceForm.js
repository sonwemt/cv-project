import { Component } from "react";

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        company: this.props.experience.company,
        position: this.props.experience.position,
        taskings: this.props.experience.taskings,
        start: this.props.experience.start,
        end: this.props.experience.end,
      }
    }

    this.handleCompanyChange.bind(this);
    this.handlePositionChange.bind(this);
    this.handleTaskingsChange.bind(this);
    this.handleStartChange.bind(this);
    this.handleEndChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleCompanyChange = (e) => {
    this.setState({experience: {
      company: e.target.value,
      position: this.state.experience.position,
      taskings: this.state.experience.taskings,
      start: this.state.experience.start,
      end: this.state.experience.end,
    }});
  }

  handlePositionChange = (e) => {
    this.setState({experience: {
      company: this.state.experience.company,
      position: e.target.value,
      taskings: this.state.experience.taskings,
      start: this.state.experience.start,
      end: this.state.experience.end,
    }});
  }

  handleTaskingsChange = (e) => {
    this.setState({experience: {
      company: this.state.experience.company,
      position: this.state.experience.position,
      taskings: e.target.value,
      start: this.state.experience.start,
      end: this.state.experience.end,
    }});
  }

  handleStartChange = (e) => {
    this.setState({experience: {
      company: this.state.experience.company,
      position: this.state.experience.position,
      taskings: this.state.experience.taskings,
      start: e.target.value,
      end: this.state.experience.end,
    }});
  }

  handleEndChange = (e) => {
    this.setState({experience: {
      company: this.state.experience.company,
      position: this.state.experience.position,
      taskings: this.state.experience.taskings,
      start: this.state.experience.start,
      end: e.target.value,
    }});
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const submitInfo = {
        company: this.state.experience.company,
        position: this.state.experience.position,
        taskings: this.state.experience.taskings,
        start: this.state.experience.start,
        end: this.state.experience.end,
        status: this.props.experience.status,
        index: this.props.experience.index,
        id: this.props.experience.id,
    }
    this.props.submit(submitInfo);
    this.setState({
      experience: {
        company: this.props.experience.company,
        position: this.props.experience.position,
        taskings: this.props.experience.taskings,
        start: this.props.experience.start,
        end: this.props.experience.end,
      }
    })
  }


  render() {
    return(
      <form className="experienceForm" onSubmit={this.handleSubmit}>
        <label htmlFor="companyNameInput">Name of company: </label>
        <input type="text" id="companyNameInput" value={this.state.experience.company} onChange={this.handleCompanyChange} />

        <label htmlFor="positionInput">Position: </label>
        <input type="text" id="positionInput" value={this.state.experience.position} onChange={this.handlePositionChange} />

        <label htmlFor="taskInput">Tasks: </label>
        <input type="text" id="taskInput" value={this.state.experience.taskings} onChange={this.handleTaskingsChange} />

        <label htmlFor="experinceStart">Start date: </label>
        <input type="date" id="experienceStart" value={this.state.experience.start} onChange={this.handleStartChange} />

        <label htmlFor="experienceEnd">End date: </label>
        <input type="date" id="experienceEnd" value={this.state.experience.end} onChange={this.handleEndChange} />

        <button type="submit">{!this.props.experience.status ? 'Add' : 'Update'}</button>
      </form>
    );
  }
}