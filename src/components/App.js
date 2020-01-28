import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputGroup, FormControl,ListGroup } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { add_reminder, delete_reminder, clear_reminders } from '../actions';
import moment from 'moment';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            dueDate: ''
        }
    }

  add_reminder(){
      console.log('this.state.dueDate', this.state.dueDate)
      this.props.add_reminder(this.state.text, this.state.dueDate);
  }
  delete_reminder(id){
    this.props.delete_reminder(id);
  } 
  clear_reminders(){
    this.props.clear_reminders();
  } 

  render_reminder(){
    const { reminders } = this.props;
    return(
        <ListGroup>
            { reminders.map(reminder => {
                return(
                    <li className="list-group-item" key={reminder.id}>
                        <div className="list-items">{reminder.text}</div>
                        <div className="list-items"><em>{moment(new Date(reminder.dueDate))
                                                    .fromNow()}</em></div>
                        <div className="list-items del-btn"
                                onClick={ () => this.delete_reminder(reminder.id) }>&#x2715;
                        </div>
                    </li>
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
                <InputGroup className="mb-3 input">
                    <FormControl
                        type="datetime-local"
                        onChange={(e)=> this.setState({dueDate: e.currentTarget.value})}
                    />
                </InputGroup>
                <Button onClick={ () => this.add_reminder() }>Add Reminder</Button>
                { this.render_reminder() }
                <Button onClick={ () => this.clear_reminders() }>Delete All</Button>
            </div>
            );
    }
}

function mapStateToProps(state){
    return { reminders : state }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({add_reminder, delete_reminder, clear_reminders}, dispatch);
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);