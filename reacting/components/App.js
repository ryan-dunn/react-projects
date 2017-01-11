var React = require('react');

var ListItem = React.createClass({
render: function(){
return <h1>{this.props.listName}</h1>;
}
	});


var App = React.createClass({
getInitialState: function(){
	return {
		name:'Ryan Dunnski',
		listVal: '',
		itemOnList: ''
	};
},

onNameClick: function(){
 this.setState({
 	name: 'Sarah Littleton'
 })
},

onValueUpdate: function(e){
	this.setState({
		listVal: e.target.value  
	})
},

onSaveValue: function(){
var listArray = [];

listArray.push(document.getElementById('ToDoList').value);

console.log(listArray);

this.setState({
	itemOnList: <ListItem key={listArray.length} listName={listArray} />
})

},

render: function(){

	return(
		<div>
			<h1 onClick={this.onNameClick}>{this.state.name}</h1>
			<input id="ToDoList" onChange={this.onValueUpdate} />
			<h1>{this.state.listVal}</h1>
			<div>{this.state.itemOnList}</div>
			<button onClick={this.onSaveValue}>new task</button>
		</div>
		);
	}
});

module.exports = App;