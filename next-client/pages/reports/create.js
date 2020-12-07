import { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Submit a Report</h1>
        <p>Be a Social Distance Warrior. Earn cash.</p>
        <form onSubmit={this.handleSubmit}>
          <label> 
            <p>
            Status  
            <input type="text" value={this.state.value} onChange={this.handleChange} /> 
            </p>
            <p>
            Location  
            <input type="text" value={this.state.value} onChange={this.handleChange} /> 
            </p>
            <p>
            Perpetrator Name  
            <input type="text" value={this.state.value} onChange={this.handleChange} /> 
            </p>
            <p>
            Details   
            <input type="text" value={this.state.value} onChange={this.handleChange} /> 
            </p>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}