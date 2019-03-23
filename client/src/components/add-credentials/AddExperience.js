

import React, { Component } from 'react'

 class AddExperience extends Component {
     constructor(props) {
         super(props);
         this.state = { experience: [
            {
                title: "",
                company:"",
                location: "",
                from:"",
                to: "",
                current: "",
                description:"",           
            }
          ],
         }
     }

     componentWillReceiveProps(newProps) {
        if(newProps.errors) {
            this.setState({errors:newProps.errors})
        }
     }

     onSubmit = (e) => {
        e.preventDefault()

           const newExperience = 
        {
            title: this.state.title,
            company: this.state.company,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description,           
        }

        onChange = (e) => {
            this.setState({[e.target.value] : e.target.name})
        }
     }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}



export default AddExperience