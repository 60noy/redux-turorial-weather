import React, { Component} from 'react';
import {Form,FormGroup,FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
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
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
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

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
