import { Component } from "react";
import "../styles/experience.css";
import ExperienceOverview from "../components/ExperienceOverview";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceList: [],
      experience: {
        company: '',
        position: '',
        taskings: '',
        start: '',
        end: '',
        showEdit: false,
        index: false,
        id: uniqid(),
      }
    }

    this.onEditSubmit.bind(this);
    this.onExperienceSubmit.bind(this);
    this.deleteExperience.bind(this);
    this.editExperience.bind(this);
  }

  editExperience = (index) => {
    const newArray = Array.from(this.state.experienceList);
    newArray[index].showEdit = true;
    this.setState({
      experienceList:  newArray,
    })
  }

  deleteExperience = (index) => {
    const newArray = Array.from(this.state.experienceList);
    newArray.splice(index, 1);
    for(let i = 0; i < newArray.length; i += 1) {
      newArray[i].index = i;
    }
    this.setState({
      experienceList: newArray,
    })
  }

  onEditSubmit = (info) => {
    const newArray = Array.from(this.state.experienceList);
    const index = info.index;
    const newInfo = info;
    newInfo.showEdit = false;
    newArray.splice(index, 1, newInfo);
    this.setState({
      experienceList:  newArray,
    })
  }


  onExperienceSubmit = (info) => {
    const newInfo = info;
    newInfo.index = this.state.experienceList.length;
    this.setState({
      experienceList: this.state.experienceList.concat(newInfo),
      experience: {
        company: '',
        position: '',
        taskings: '',
        start: '',
        end: '',
        showEdit: false,
        index: false,
        id: uniqid(),
      }
    });
  }

  render() {
    return (
      <div id="experienceContainer">
        <h2 className="subheader">Experience</h2>
        <div id="experienceEntries">
          <ExperienceOverview
            experiences={this.state.experienceList}
            editExperience={this.editExperience}
            deleteExperience={this.deleteExperience}
            submit={this.onEditSubmit}
          />
        </div>
        <div id="experienceMainForm">
          <ExperienceForm
            experience={this.state.experience}
            submit={this.onExperienceSubmit}
          />
        </div>
      </div>
    );
  }
}