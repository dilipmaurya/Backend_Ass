const initialState = {
todolist: [],
display: false,
timeClicked:true,
show: false
}

const reducer = (state=initialState,action) => {
//console.log(action.type);
//console.log(action.index);

switch(action.type){

case 'ADD_DETAILS':
return {
...state,
todolist: state.todolist.concat(action.payload)
}
// case 'UpdateName':
// //console.log(action.payload)
// return{
// 	...state,
// 	name: action.payload
// }


// case 'UpdatePriority':
// return{
// 	...state,
// 	priority:action.payload
// }

// case 'UpdateDateTime':
// return{
// 	...state,
// 	date: action.payload
// }

case 'Update':
//alert(action.payload.name)
let arr = []
arr = [...state.todolist];
arr[action.payload.ind] = action.payload
return{
...state,
todolist:arr
}



case 'MARK_STATUS':
let todolist = [...state.todolist];
todolist[action.index].status = "Completed";

return{
...state,
todolist: todolist
}

case 'DELETE':
const newtodolist = [...state.todolist];
newtodolist.splice(action.index,1);
return{
...state,
todolist: newtodolist
}

case 'EDIT' :

return{
	...state,
	show:true
}

case 'Close' :
return{
	...state,
	show:false
}

case 'SORT_BY_PRIORITY':
todolist = [...state.todolist];
function compare(a,b){
if(parseInt(a.priority)<parseInt(b.priority))
return -1;
if(parseInt(a.priority)>parseInt(b.priority))
return 1;
else
return 0;
}

todolist.sort( compare );
return{
...state,
todolist: todolist
}

case 'SORT_BY_NAME':
todolist = [...state.todolist];
function compare(a,b){
// if(parseInt(a.name)<parseInt(b.name))
// 	return -1;
// else if(parseInt(a.name)>parseInt(b.name))
// 	return 1;
// else
// 	return 0;

// todolist.sort( compare );
if(a.name.localeCompare(b.name) === -1)
      return -1;
else if(a.name.localeCompare(b.name) === 1)
	return 1;
else
	return 0;
}
todolist.sort(compare)


return{
...state,
todolist: todolist
}


case 'SORT_BY_TIME':

const items = [...state.todolist];
    items.sort((a, b) =>  new Date(a.date) > new Date(b.date) ? 1 :-1);
    
    
    return {
      ...state,
      todolist: items
      //timeClicked: !this.state.timeClicked
    }
}
return state;
};

export default reducer;
