import { Component } from "react";
import EducationForm from "./EducationForm";

export default class EducationOverview extends Component{
  constructor(props) {
    super(props)

    this.onEdit.bind(this);
    this.onDelete.bind(this);
  }

  onEdit = (e) => {
    this.props.editEducation(e.target.getAttribute('data-id'));
  }

  onDelete = (e) => {
    this.props.deleteEducation(e.target.getAttribute('data-id'));
  }

  render() {
    return (
      this.props.educationList.map((education) => {
        if(education.status) {
          return (
            <div key={education.id}>
              <EducationForm education={education} submit={this.props.submit} />
            </div>
          )
        }
        return(
        <div key={education.id}>
          School: {education.school}<br />
          Type of study: {education.study}<br />
          Start date: {education.start}<br />
          End date: {education.end}<br />
          <button data-id={education.index} onClick={this.onEdit}>Edit</button>
          <button data-id={education.index} onClick={this.onDelete}>Delete</button>
        </div>
        )
      })
    );
  }
}