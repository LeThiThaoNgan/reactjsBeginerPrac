import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      firstName:"",
      lastName:"",
      isFriendly: true,
      gender:""
    }

    this.handleChange=this.handleChange.bind(this)
    
  }

    handleChange(event){
      // const{name, value} = event.target
      // target = DOM element
      // event.target = {name: '', value: 'xx', type:'xxxxxx', checked:'xxxdxfd'}

      const {name, value, type, checked} = event.target
      type === "checkbox"? this.setState({[name] : checked}) : this.setState({[name] : value})
      // this.setState({
        // firstName:even.target.value
        // [even.target.name]: even.target.value
        // [name]:value
        
      // })
    }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        {/* <input type="text" placeholder="First Name" onChange={this.handleChange} />
        <br />
        <input type="text" placeholder="Last Name" onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName} </h1> */}
         <input 
         type="text" 
         value={this.state.firstName} 
         name="firstName" placeholder="First Name" 
         onChange={this.handleChange} 
         />
        <br />

        <input 
        type="text" 
        value={this.state.lastName} 
        name="lastName" 
        placeholder="Last Name" 
        onChange={this.handleChange} 
        />

        <br />
        <textarea value = "some default value" />

        <label>
          <input type="checkbox"
          name= "isFriendly" 
          checked={this.state.isFriendly}
          onChange={this.handleChange}
          /> Is Friendly?
        </label>

        <label>
          <input type="radio"
          name= "gender" 
          value= "male"
          checked={this.state.gender=== "male"}
          onChange={this.handleChange}
          /> Male
        </label>

        <label>
          <input type="radio"
          name= "gender" 
          value= "female"
          checked={this.state.gender=== "female"}
          onChange={this.handleChange}
          /> Female
        </label>

        <h1>{this.state.firstName} {this.state.lastName} </h1>
        <h2>You are {this.state.gender}</h2>
        <button>submit</button>
      </form>
    )
  }
}

export default App