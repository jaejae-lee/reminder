import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add_reminder, delete_reminder, clear_reminders } from '../actions';
import moment from 'moment';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './Theme';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            dueDate: ''
        }
    }
  add_reminder(){
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
        <ul>
            { reminders.map(reminder => {
                return(
                    <List className="list-group-item" key={reminder.id}>
                        <div className="list-items">{reminder.text}</div>
                        <div className="list-items"><em>{moment(new Date(reminder.dueDate))
                                                    .fromNow()}</em></div>
                        <div className="list-items del-btn"
                                onClick={ () => this.delete_reminder(reminder.id) }>&#x2715;
                        </div>
                    </List>
                )
            })}
        </ul>
    )
  }

    render() { 
        return ( 
            <>
            <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <div className="App">
                <Title>Reminder</Title>
                    <Input
                        placeholder="I have to.."
                        onChange={(e)=> this.setState({text: e.currentTarget.value})}
                    />
                    <Input
                        type="datetime-local"
                        onChange={(e)=> this.setState({dueDate: e.currentTarget.value})}
                    />

                <Button onClick={ () => this.add_reminder() }>Add Reminder</Button>
                { this.render_reminder() }
                <Button onClick={ () => this.clear_reminders() }>Delete All</Button>
            </div>
            </ThemeProvider>
            </>
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

const Title = styled.h1`
    font-size: 40px;
    color: white;
`
const Button = styled.button`
    background: #4dc3f1;
    /* background: ${props => props.theme.color2}; */
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px; margin: 10px;
    &:hover{
        background: #ec5093;
    }
`
const Input = styled.input`
    width: 90%;
    padding: 10px; margin: 10px;
    border: none;
    border-bottom: 2px solid #ec5093;
    background: rgba(42,28,88,0.3);
    color: white;
`

const List = styled.li`
    width: 250px;
    border: none;
    background: rgba(42,28,88,0.3);
    color: white;
    margin: 10px;
`
