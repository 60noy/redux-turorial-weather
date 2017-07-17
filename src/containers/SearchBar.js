import React, { Component} from 'react';
import {Form,FormGroup,FormControl} from 'react-bootstrap';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <Form inline onSubmit={this.onFormSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            placeholder='get a 5-day forecast'
            value={this.state.term}
            bsSize='sm' onChange={this.onInputChange} />
            <FormControl
              type="submit"
              value='search'/>
        </FormGroup>
      </Form>
  );
  }
}
