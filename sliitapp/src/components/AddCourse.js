import React, { Component } from 'react';


class AddCourse extends Component {

    constructor(props){
        super(props);
        this.state = {
            cName:"",
            cCode:"",
            cPassmarks:"",
            cLecture:""
        };
        this.setCname = this.setCname.bind(this);
        this.setCcode = this.setCcode.bind(this);
        this.setCpassmarks = this.setCpassmarks.bind(this);
        this.setClecture = this.setClecture.bind(this);
      
    }

    setCname(event){
        this.setState({
            cName: event.target.value
        });
    }
    setCcode(event){
        this.setState({
            cCode: event.target.value
        });
    }
    setCpassmarks(event){
        this.setState({
            cPassmarks: event.target.value
        });
    }
    setClecture(event){
        this.setState({
            cLecture: event.target.value
        });
    }
  

render(){
  return (
    <div className="AddCourse">
      <form className="form-signin bg-danger mt-5" style={{width:"600px", marginLeft:"50px" }} action="/AddCourse/courses" method="POST">
                    <h1 className="h3  font-weight-normal ">Add Course</h1>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Course Name</div>
                    </div>
                    <input type="text" id="inputCname" name="cName" onChange={this.setCname} value={this.state.cName}  className="form-control" placeholder="Course Name" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Code</div>
                    </div>
                    <input type="text" id="inputCode" name="cCode" onChange={this.setCcode} value={this.state.cCode} className="form-control" placeholder="Code" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Pass Marks</div>
                    </div>
                    <input type="text" id="inputPassMarks" name="cPassmarks" onChange={this.setCpassmarks} value={this.state.cPassmarks} className="form-control" placeholder="Pass Marks" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Lecture In Charge</div>
                    </div>
                    <input type="text" id="inputLecture" name="cLecture" onChange={this.setClecture} value={this.state.cLecture} className="form-control" placeholder="Lecture In Charge" required autoFocus></input>
                    </div>
                
                   
                    <div className="text-center">
                    <button className="btn btn-md btn-primary mb-3 "  type="submit" style={{width:"70px"}}>ADD</button>
                   

                    
                    </div>
                </form>
    </div>
  );
}
}

export default AddCourse;