var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function (){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk pet'
        }, {
          id: 2,
          text: 'Clean house'
        }, {
          id: 3,
          text: 'Buy food'
        }, {
          id: 4,
          text: 'Wash car'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo' + text);
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
