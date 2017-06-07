var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', ()=> {
    expect(TodoApp).toExist();
  });

  it('should add todo to todos state on handleAddTodo', () => {
    var todoText = 'dummy test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []}); // make state empty array
    todoApp.handleAddTodo(todoText); // call function and pass dummy text

    //assertions to see if new state is same as text
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
