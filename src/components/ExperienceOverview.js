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
        if(experience.showEdit) {
          return (
            <div key={experience.id}>
              <ExperienceForm experience={experience} submit={this.props.submit} />
            </div>
          );
        }
        return(
          <div key={experience.id} id="experienceEntry">
            <div>Company:</div>
            <div>{experience.company}</div>
            <div>Position:</div>
            <div>{experience.position}</div>
            <div>Tasks:</div>
            <div>{experience.taskings}</div>
            <div>Start date:</div>
            <div>{experience.start}</div>
            <div>End date:</div>
            <div>{experience.end}</div>
            <button data-id={experience.index} onClick={this.onEdit}>Edit</button>
            <button data-id={experience.index} onClick={this.onDelete}>Delete</button>
          </div>
        );
      })
    );
  }
}