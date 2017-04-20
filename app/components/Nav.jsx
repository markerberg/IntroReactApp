var React = require('react');
var {Link, IndexLink} = require('react-router'); // es6 destructuring

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.search.value;
    // encode the string for a url
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.search.value = '';
      // use this to switch pages, using the encoded strings as query
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">MarkApp<a href="https://www.linkedin.com/in/mark-goberdhan" target="_blank"></a></li>
            <li>
              <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active">Examples</Link>
            </li>
            <li>
              <Link to="/timer" activeClassName="active">Timer</Link>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
