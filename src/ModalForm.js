import React,{Component } from 'react';
import {connect} from 'react-redux'


class ModalForm extends Component{

// state = {
// name: this.props.name,
// email: this.props.email,
// phone: this.props.phone,
// website: this.props.website,
// id: this.props.id

// }


// submitHandler = (event) =>{
// //event.preventDefault();

// this.props.updateUserArr(this.state, event);
// }
constructor(props){
	super(props)
this.state = {
name: this.props.display[this.props.i].name,
priority: this.props.display[this.props.i].priority,
date:this.props.display[this.props.i].date,
status : 'Incompleted',
ind : this.props.i

}
console.log(this.state.name)
}

render(){
  console.log(this.props)
return (


  <form onSubmit={ () => this.props.submitHandler(this.state)}>
  <table>

  <tr>
 <td>Name: </td>
<td><input type ="text" value = {this.state.name} id = "name"
onChange={(e) => {this.setState({name: e.target.value})}}
/></td>
</tr>

<tr>
<td>Priority</td>
<td><input type ="number" value = {this.state.priority} id = "priority"
onChange={(e) => {this.setState({priority: e.target.value})}}/></td>
</tr>

<tr>
<td>DateTime</td>
<td><input type ="datetime-local" value = {this.state.date} id = "phone" 
onChange={(e) => {this.setState({date: e.target.value})}}/></td>
</tr>




<input type="submit" value="Save"></input>

<button onClick={ () => this.props.handleClose()}>Close</button>

</table>

</form>
);

}
}

const mapStateToProps = state => {
return {
display: state.todolist,
//name:state.name,
show: state.show

};
};

const mapDispatchToProps = dispatch => {
return {
handleClose: () => dispatch({ type: 'Close'}),
updateList: (payload) => dispatch({ type: 'Update', payload }),
UdateDateTime:(payload) =>dispatch({type:'UdateDateTime', payload}),
UpdateName:(payload) =>dispatch({type:'UpdateName', payload}),
UpdatePriority: (payload) => dispatch({type : 'UpdatePriority', payload}),
submitHandler : (payload) => {event.preventDefault();dispatch({type : 'Update',payload})},
};
};




export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);

