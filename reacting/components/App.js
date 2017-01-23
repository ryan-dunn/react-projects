var React = require('react');

//Read before continuing: instead of array mapping within ListItem, try to declare a funciton in the parent class that takes a parameter and returns the ListItem instance. 
//Using that parameter, repeat the function using a for loop.
//That way, you can select which item needs to be manipulated easier (deleted, modified, whatever)

//Place new to-do item in JSX Element
var ListItem = React.createClass({

	render: function(){
		return(
			<div>
				{
					this.props.items.map(
						item =>
							<div key={item.id + 1}><h1 key={item.id + 2}>{item.text}</h1> <button key={item.id + 3} onClick={() => this.props.onDelete(item.id)}>Delete {item.id}</button></div>
						
					)
				}
			</div>
	);} 
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

	handleOnDelete: function(id){
		var itemToDelete = this.state.itemOnList.find((deletedItem) => deletedItem.id === id);
		var deletedItemIndex = this.state.itemOnList.indexOf(itemToDelete);
		var deletedItemArray = this.state.itemOnList.splice(deletedItemIndex, 1)
		this.setState({
			itemOnList: deletedItemArray  
		})
	},

	render: function(){
		return(
			<div>
				<h1 onClick={this.onNameClick}>{this.state.name}</h1>
				<input id="ToDoList" onChange={this.onValueUpdate} />
				<h1>{this.state.listVal}</h1>
				<ListItem items={this.state.itemOnList} onDelete={() => this.handleOnDelete(id)} />
				<button onClick={this.onSaveValue}>new task</button>
			</div>
		);
	}
});

module.exports = App;