var React = require('react');
var TodoList = require('TodoList');

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
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
