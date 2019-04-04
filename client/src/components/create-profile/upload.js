import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { uploadImage } from '../../actions/authActions';



 class upload extends Component  {
    
            state = {
            multerImage : null,
            errors: {}
         }



    handleSubmit = (e) => {
            e.preventDefault()

        const {multerImage} = this.state
        console.log('image submitted',multerImage)

         this.props.uploadImage(multerImage, this.props.history)
     }


     handleChange = (e)=> {
        // console.log(e.target.files[0])  
        console.log(e.target.files[0])
        this.setState({
            multerImage : e.target.files[0] 
        }) 
    }

  render() {

        // const{errors} = this.state

    return (


    // <div className ="upload">
    //     <div>
    //         <form action="#"/>
    //             <div class="file-field input-field">
    //                 <div class="btn"/>
    //                     <span>File here </span>
    //                     <input type="file"></input>
    //                 </div>
    //             <div class="file-path-wrapper">
    //                 <input class="file-path validate" type="text"/>
    //         </div>
    //     </div>
    // </div>






      <div className = "upload">      
        <div>         
          <h4>IMAGE HERE</h4>
          <input type="file" className="process_upload-btn" onChange = {this.handleChange}/>
            <button className ="btn-btn-blue" onClick = {this.handleSubmit}> Submit photo</button> 
          </div>
             {/* <img src ={this.state.multerImage} alt="upload-image" className ="process_image" /> */}
             {/* onChange = {(e) =>this.uploadImage(e,"multer")} */}
             {/* <form onSubmit =  {this.onSubmit}/> */}
    
      </div>

    )
  }
}

const mapStateToProps = state => ({
    multerImage : state.multerImage,
    errors: state.errors
})



export default connect (mapStateToProps,{uploadImage})(withRouter(upload))






















// import React, { Component } from 'react'
// import axios from 'axios'
// // import { throws } from 'assert';


//  class upload extends Component {
//      constructor(props){
//          super(props) 
//         //  this.state = {
//         //      multerImage: DefaultImg
//         //  }
//      }

//     //  setDefaultImage(uploadType) {
//     //     if(uploadType === "multer") {
//     //         this.setState({
//     //             multerImage:DefaultImg
//     //         })
//     //     }
//     //  }

//   render() {

//         // if (method ==="multer") {
//         //     let imageObj ={}
//         // }

//         // if (method === "multer") {
//         //     let imageFormObj = new  FormData()

//         //     imageFormObj.append('imageName', 'multer-image-' + Date.now())
//         //     imageFormObj.append('imageData', e.target.files[0]);

//         //     this.setState({
//         //         multerImage: URL.createObjectURL(e.target.files[0])
//         //     });

//         //     axios.post(`${API_URL}/image/uploadmulter`, imageFormObj)
//         //         .then((data) => {
//         //             if (data.data.success) {
//         //                 alert("image uploaded done")
//         //                 this.setDefaultImage("multer")
//         //             }
//         //         })
//         //         .catch((err) => {
//         //             alert("Error while uploading")
//         //             this.setDefaultImage("multer")
//         //         })
//         // }


//     return (
//       <div>

//           <h2> IMAGE HERE </h2>
//           {/* <div className = "process">
//             <h4 className = "process_heading"> Process: Using Multer</h4>
//             <p className="process_details">upload image to node server</p>
//             <input type="file" className="process_upload-btn" onChange = {(e) =>this.uploadImage(e,"multer")}/>
//             <img src ={this.state.multerImage} alt="upload-image" className ="process_image" />
//           </div>    */}
        
//       </div>
//     )
//   }
// }

// export default upload