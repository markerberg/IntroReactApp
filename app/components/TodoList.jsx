var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        // when iterating over array and making components, we must give each a unique key id
        // use spread operator, spread out all attr to be used as individual props
        return(
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
