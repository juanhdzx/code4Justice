import React, { Component } from 'react';
//import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            commentBox: ""
        }
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleUserInput(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }

    handleChange(e) {
        alert(`Name ${this.state.firstName} lastName ${this.state.lastName}`)
        e.preventDefault()
        console.log(e)
    }

    render() {
        return (
        <div>
            <main>
                 <form onSubmit={this.handleChange}>
{/* <!-- FIRST NAME    --> */}
 
  <label htmlfor="first-name">First Name</label>
  <br /> 
  {/* <!-- adds a line break to text but I am also using it to add space between certain information and also the appearance of my website --> */}
  <input onChange={(e) => this.handleUserInput(e)} name="firstName" value={this.state.firstName} type="text" id="first-name"  />
  <br />
  <br />
{/* <!-- LAST NAME   --> */}
 
  <label htmlfor="last-name">Last Name</label>
  <br />
  <input onChange={(e) => this.handleUserInput(e)} name="lastName" value={this.state.lastName} type="text" id="last-name"  />
  <br />
  <br />
{/* <!-- PHONE NUMBER   --> */}
{/*   
  <label for="phone-number">Phone Number</label>
  <br />
  <input type="text" id="phone-number" name="phone-number" />
  <br /> */}
  <br />
{/* <!--  EMAIL  --> */}
  {/* <label for="email">Email</label>
  <br />
  <input type="text" id="email" name="email" />
  <br />
  <br /> */}
  
{/* <!--  COMMENT BOX  --> */}
 
  <label htmlfor="comment-box">Comment Box</label>
  <br />
  <textarea onChange={(e) => this.handleUserInput(e)} name="commentBox" value={this.state.commentBox} id="comment-box" ></textarea>
  <br />
  <br />
{/*   
<!--  SUBMIT BUTTON  --> */}
    <input disabled={!this.state.firstName || !this.state.lastName || !this.state.commentBox}  type="submit" value="Submit" />
  
                    </form>
                </main>
            </div>
        )
    }
};

export default Contact;
