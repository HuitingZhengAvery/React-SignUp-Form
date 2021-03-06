import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state={
    username:'',
    email:'',
    city:''
};
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handleCityChange(e) {
    this.setState({city: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:');
    console.log(this.state);
    this.setState({username: ''})
    this.setState({email: ''})
    this.setState({city: 'Please Select'})
  }

  render() {
    console.log()
    return (
    
      
      <form style={{width: 300}} onSubmit={this.handleSubmit} className='App'>

       <div id='username'>
       <label>Name</label>
       <input type='text' 
        value={this.state.username} 
        onChange={event=>this.setState({username: event.target.value})}/>
        </div>

        <div id='email'>
        <label>Email</label>
        <input type='text' 
        value={this.state.email} 
        onChange={event=>this.setState({email: event.target.value})}/>
        </div>

        <div>
        <label>City</label> {/* how to log city to console when options remain unchanged */}
          <select id="city" onClick={event=>this.setState({city: event.target.value})}>
          <option value="Please Select">Please Select</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Brisbane">Brisbane</option>
          <option value='Sydney'>Sydney</option>
          </select>
          
        </div>

        <button type='submit'>Sign Up</button>
        
        
        </form>

  

    );
  }
}

export default App;
