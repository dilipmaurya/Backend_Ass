import React, { Component } from 'react';
import Form from './Form';
import './App.css';
import { connect } from 'react-redux';
class App extends Component {

render() {
return (
<div className="App">

<Form />
<div>
<button onClick = {this.props.sort_By_Priority}>SortByPriority</button>
<button onClick={this.props.sort_By_Time}>SortByDateTime</button>
<button onClick = {this.props.sort_By_Name}>SortByName</button>
</div>
</div>
);
}
}


const mapStateToProps = state =>{
return{
display: state.todolist

};
};
const mapDispatchToProps = dispatch =>{
return{
sort_By_Priority: ()=> dispatch({ type:'SORT_BY_PRIORITY'}),
sort_By_Time: ()=> dispatch( {type:'SORT_BY_TIME'}),
sort_By_Name: ()=> dispatch( {type:'SORT_BY_NAME'}),
sort_By_Date: ()=> dispatch( {type: 'SORT_BY_DATE'}),
filter_By_Status: ()=>dispatch( {type:'FILTER_STATUS'}) 
};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);