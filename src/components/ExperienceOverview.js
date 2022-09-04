import { Component } from "react";
import ExperienceForm from "./ExperienceForm";

export default class ExperienceOverview extends Component{
  constructor(props) {
    super(props)

    this.onEdit.bind(this);
    this.onDelete.bind(this);
  }

  onEdit = (e) => {
    this.props.editExperience(e.target.getAttribute('data-id'));
  }

  onDelete = (e) => {
    this.props.deleteExperience(e.target.getAttribute('data-id'));
  }
 
  render() {
    return (
      this.props.experiences.map((experience) => {
        if(experience.status) {
          return (
            <div key={experience.id}>
              <ExperienceForm experience={experience} submit={this.props.submit} />
            </div>
          );
        }
        return(
          <div key={experience.id}>
            Company: {experience.company}<br />
            Position: {experience.position}<br />
            Tasks: {experience.taskings}<br />
            Start date: {experience.start}<br />
            End date: {experience.end}<br />
            <button data-id={experience.index} onClick={this.onEdit}>Edit</button>
            <button data-id={experience.index} onClick={this.onDelete}>Delete</button>
          </div>
        );
      })
    );
  }
}