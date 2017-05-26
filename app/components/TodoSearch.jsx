var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    // get check value of checkbox
    var showCompleted = this .refs.showCompleted.checked;
    // get value of text field
    var searchText = this.refs.searchText.value;
    // pass these values to prop method
    this.props.onSearch(showCompleted, searchText);
  },
  render: function(){
    return(
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show Completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
