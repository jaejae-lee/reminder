import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputGroup, FormControl,ListGroup } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { add_reminder, delete_reminder } from '../actions';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }

  add_reminder(){
      this.props.add_reminder(this.state.text);
  }
  delete_reminder(id){
      console.log("deleting in app by id", id)
      console.log("this.props", this.props)
  }
  

  render_reminder(){
    const { reminders } = this.props;
    return(
        <ListGroup>
            { reminders.map(reminder => {
                return(
                    <>
                    <ListGroup.Item 
                        className="list-items"
                        key={reminder.id}>{reminder.text}
                    </ListGroup.Item>
                    <ListGroup.Item 
                        className="list-items del-btn"
                        onClick={ () => this.delete_reminder(reminder.id) }>&#x2715;
                    </ListGroup.Item>
                    </>
                )
            })}
        </ListGroup>
    )
  }

    render() { 
        return ( 
            <div className="App">
                <h1 className="title">Reminder</h1>
                <InputGroup className="mb-3 input">
                    <FormControl
                        placeholder="I have to.."
                        onChange={(e)=> this.setState({text: e.currentTarget.value})}
                    />
                </InputGroup>
                <Button onClick={ () => this.add_reminder() }>Add Reminder</Button>
                { this.render_reminder() }
            </div>
            );
    }
}

function mapStateToProps(state){
    return { reminders : state }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({add_reminder, delete_reminder}, dispatch);
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);