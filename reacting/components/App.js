var React = require('react');

//Place new to-do item in JSX Element
var ListItem = React.createClass({
	render: function(){
		return (
			<div>
				{this.props.items.map(item => (
					<h1 key={item.id}>{item.text}</h1>
				))}
			</div>
		);
	} 
});


var App = React.createClass({
	getInitialState: function(){
		return {
			name:'Ryan Dunn',
			listVal: '',
			itemOnList: []
		};
	},

	//switch state of name handler
	onNameClick: function(){
		this.setState({
	 		name: 'Sarah Littleton'
	 	})
	},

	//set state listVal to whatever the input target is
	onValueUpdate: function(e){
		this.setState({
			listVal: e.target.value  
		})
	},

	//create new item object, add it to itemOnList array
	onSaveValue: function(){
		var newItem = {
			text: document.getElementById('ToDoList').value,
			id: Date.now()
		}

		this.setState((prevState) => ({
			itemOnList: prevState.itemOnList.concat(newItem)
		}))
	},

	render: function(){
		return(
			<div>
				<h1 onClick={this.onNameClick}>{this.state.name}</h1>
				<input id="ToDoList" onChange={this.onValueUpdate} />
				<h1>{this.state.listVal}</h1>
				<ListItem items={this.state.itemOnList} />
				<button onClick={this.onSaveValue}>new task</button>
			</div>
		);
	}
});

module.exports = App;