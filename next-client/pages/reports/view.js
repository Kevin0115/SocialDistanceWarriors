import { Component } from 'react';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: []
    }
  }
  componentDidMount() {
    // execute the fetch API request here
  }
  render() {
    return(
      <div>
        VIEWING ALL REPORTS
      </div>
    );
  }
}