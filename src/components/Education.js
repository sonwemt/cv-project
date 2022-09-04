import { Component } from "react";
import "../styles/education.css";
import EducationOverview from '../components/EducationOverview';
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationList: [],
      education: {
        school: '',
        study: '',
        start: '',
        end: '',
        status: 0,
        index: false,
        id: uniqid(),
      },
    }


    this.onEditSubmit.bind(this);
    this.onEducationSubmit.bind(this);
    this.deleteEducation.bind(this);
    this.editEducation.bind(this);
  }

  editEducation = (index) => {
    const newArray = Array.from(this.state.educationList);
    newArray[index].status = 1;
    this.setState({
      educationList:  newArray,
    })
  }

  deleteEducation = (index) => {
    const newArray = Array.from(this.state.educationList);
    newArray.splice(index, 1);
    for(let i = 0; i < newArray.length; i += 1) {
      newArray[i].index = i;
    }
    this.setState({
      educationList: newArray,
    })
  }

  onEditSubmit = (info) => {
    const newArray = Array.from(this.state.educationList);
    const index = info.index;
    const newInfo = info;
    newInfo.status = false;
    newArray.splice(index, 1, newInfo);
    this.setState({
      educationList:  newArray,
    })
  }

  onEducationSubmit = (info) => {
    const newInfo = info;
    newInfo.index = this.state.educationList.length;
    this.setState({
      educationList: this.state.educationList.concat(newInfo),
      education: {
        school: '',
        study: '',
        start: '',
        end: '',
        status: 0,
        index: false,
        id: uniqid(),
      },
    });
  }

  render() {
    return (
      <div id="educationContainer">
        <EducationOverview 
          educationList={this.state.educationList} 
          editEducation={this.editEducation} 
          deleteEducation={this.deleteEducation} 
          submit={this.onEditSubmit}
        />
        <EducationForm
          education={this.state.education}
          submit={this.onEducationSubmit}
        />
      </div>
    )
  }
}