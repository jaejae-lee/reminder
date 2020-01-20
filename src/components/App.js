import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { add_reminder } from '../actions';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }

  add_reminder(){
      console.log('this', this)
  }

    render() { 
        return ( 
            <div className="App">
                <h1 className="title">Reminder</h1>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="I have to.."
                        onChange={(e)=> this.setState({text: e.currentTarget.value})}

                    />
                </InputGroup>
                <Button onClick={ () => this.add_reminder() }>Add Reminder</Button>
            </div>
            );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({add_reminder}, dispatch);
}
 
export default connect(null, mapDispatchToProps)(App);