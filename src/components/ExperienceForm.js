import { Component } from "react";

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: this.props.experience.company,
      position: this.props.experience.position,
      taskings: this.props.experience.taskings,
      start: this.props.experience.start,
      end: this.props.experience.end,
    }

    this.handleCompanyChange.bind(this);
    this.handlePositionChange.bind(this);
    this.handleTaskingsChange.bind(this);
    this.handleStartChange.bind(this);
    this.handleEndChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleCompanyChange = (e) => {
    this.setState({company: e.target.value});
  }

  handlePositionChange = (e) => {
    this.setState({position: e.target.value});
  }

  handleTaskingsChange = (e) => {
    this.setState({taskings: e.target.value});
  }

  handleStartChange = (e) => {
    this.setState({start: e.target.value});
  }

  handleEndChange = (e) => {
    this.setState({end: e.target.value});
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const submitInfo = {
        company: this.state.company,
        position: this.state.position,
        taskings: this.state.taskings,
        start: this.state.start,
        end: this.state.end,
        showEdit: this.props.experience.showEdit,
        index: this.props.experience.index,
        id: this.props.experience.id,
    };
    this.props.submit(submitInfo);
    this.setState({
        company: this.props.experience.company,
        position: this.props.experience.position,
        taskings: this.props.experience.taskings,
        start: this.props.experience.start,
        end: this.props.experience.end,
    });
  }


  render() {
    return(
      <form className="experienceForm" onSubmit={this.handleSubmit}>
        <label htmlFor="companyNameInput">Name of company: </label>
        <input type="text" id="companyNameInput" value={this.state.company} onChange={this.handleCompanyChange} />

        <label htmlFor="positionInput">Position: </label>
        <input type="text" id="positionInput" value={this.state.position} onChange={this.handlePositionChange} />

        <label htmlFor="taskInput">Tasks: </label>
        <input type="text" id="taskInput" value={this.state.taskings} onChange={this.handleTaskingsChange} />

        <label htmlFor="experinceStart">Start date: </label>
        <input type="date" id="experienceStart" value={this.state.start} onChange={this.handleStartChange} />

        <label htmlFor="experienceEnd">End date: </label>
        <input type="date" id="experienceEnd" value={this.state.end} onChange={this.handleEndChange} />

        <button type="submit">{!this.props.experience.showEdit ? 'Add' : 'Update'}</button>
      </form>
    );
  }
}