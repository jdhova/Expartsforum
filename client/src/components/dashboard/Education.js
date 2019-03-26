
import React, { Component } from 'react'
import Moment from 'react-moment'
import {deleteEducation} from '../../actions/profileActions'
import {connect} from 'react-redux'


 class Education extends Component {

    onDelete(id){
        this.props.deleteEducation(id)
    }
    
  render() {

    const education = this.props.education.map(edu => (
        <tr key ={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>{edu.fieldofstudy}</td>
        <td>{edu.description}</td>
        <Moment format = "DD/MM/YYYY">{edu.from}</Moment> - {edu.to === null ? ' Now' : <Moment format = "DD/MM/YYYY">{edu.to}</Moment>}

        <td>
                <button onClick = {this.onDelete.bind(this,edu._id)} className ="btn btn-danger">Delete</button>
            </td>
        </tr>
    
        ))

    return ( 
        
      <div>
          <h4 className= "mb-4"> Education Credentials </h4>
          <table className="table">
            <thead>
                <tr>
                    <th>School</th>
                    <th>Degree</th>
                    <th>Field of study</th>
                    <th>Description</th>
                    <th>Years DD/MM/YYYY</th>
                    
                </tr>
                {education}
            </thead>

          </table>
        
      </div>
    )
  }
}

export default connect(null,{deleteEducation})(Education)