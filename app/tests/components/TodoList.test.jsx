var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', ()=> {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    // dummy array
    var todos = [{
      id: 1,
      text: 'do test'
    }, {
      id: 2,
      test: 'something'
    }];
    // render our component with a prop
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // check how many todo components are rendered under seperate component
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    // check if testutil array is same length as our array
    expect(todosComponents.length).toBe(todos.length);
  });
});
