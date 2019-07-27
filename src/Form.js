import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Icon} from 'antd'
import './todo.css'
import Modal from './Modal'
import ModalForm from './ModalForm'
class Form extends Component {

submitHandler = (event) => {
event.preventDefault();
const todo = {
name: event.target.elements.name.value,
priority: event.target.elements.priority.value,
date:event.target.elements.date.value,
status: 'Incompleted'
};
console.log(todo);
this.props.updateList(todo);
}

render() {
return (
<div>
<div>
<form onSubmit={this.submitHandler} className="form">
<div>
<label>Name:</label>
<input type="text" name="fullname" id="name" placeholder="Name" required />
</div>
<br/>

<div>

<label>Priority :</label>
<input type="number" id="priority" placeholder="priority" required />
</div>
<br/>
<div>
<label>Date:</label>
<input type="datetime-local" id="date"  min="1980-01-01T00:00" max="2019-12-12T00:00" required />
</div>
<br/>

<input className="button" type="submit" value="submit" />

<br/>
</form>
<br/>
</div>
<table id="table2">
<tr>
<th>Name</th><th>Status</th><th>Priority</th><th>DateTime</th>

</tr>
<br/>

{
this.props.display.map((value, index) => {
return <tr>

<td>{value.name}</td>
<td>{value.status}</td>
<td>{value.priority}</td>
<td>{value.date}</td>


<td><button onClick={() => this.props.updateStatus(index)}>Mark as Completed </button></td>
<td><button onClick={() => this.props.delete(index)}>Delete</button></td>
<td> <Icon type="edit" onClick = { () => this.props.edit(index)}/></td>

{ this.props.show === true ? <Modal><ModalForm
  i = {index} /> </Modal> : null}
</tr>

})
}
</table>
<br/>
</div>
);
}
}




const mapStateToProps = state => {
return {
display: state.todolist,
show: state.show,

};
};

const mapDispatchToProps = dispatch => {
return {
updateList: (payload) => dispatch({ type: 'ADD_DETAILS', payload }),
updateStatus: (index) => dispatch({ type: 'MARK_STATUS', index }),
delete: (index) => dispatch({ type: 'DELETE', index }),
edit : (index) => dispatch({type:'EDIT' , index}),


};
};




export default connect(mapStateToProps, mapDispatchToProps)(Form);