import '../App.css';
import React from "react";
import axios from "axios";
class APICreate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email:'',
      res: ''
    }
  }
  handle = (e) => {
    this.setState({
      res:''
    });
    if(e.target.name === 'name'){
      this.setState({
        name: e.target.value
      });
    }else{
      this.setState({
        email: e.target.value
      });
    }
  }
  sendMsg = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    let url = "http://localhost:8080/react-php/";

    axios.post(url, formData).then((res) => {
      // console.log(res.data);
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      this.setState({
        res: res.data
      });
    }
    ).catch((err) => {
      // console.log(err);
      this.setState({
        res: err
      });
    }
    );
  }
 

  render() {
    return (
      <div className="create" align="center">
          <label className="form-label">Name:</label>
          <input type="text" onChange={this.handle} className="form-control" name="name" id="name" placeholder="Enter Name"></input>
          <label className="form-label">Email:</label>
          <input type="email" onChange={this.handle} className="form-control" name="email" id="email" placeholder="Enter Email"></input>
          <input onClick={this.sendMsg} className="btn btn-outline-success mt-2 px-3 py-1" type="submit" value="Send Message"></input>
          <span className="bg-success mt-4">{this.state.res}</span>
      </div>
    );
  }
}

export default APICreate;
