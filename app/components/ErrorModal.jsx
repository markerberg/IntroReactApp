var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    // React doesnt work well with third party lib that alters DOM, so we move it from render: to componentDidMount
    // take jsx code and create a string version, which we use to create elements to return to screen
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // use jquery to search for this current react component
    // then use jquery html method to pass markup to add(the $modal)
    $(ReactDOM.findDOMNode(this)).html($modal);

    // new instance of foundation reveal, pass in what we use as modal
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    // we dont include anything in return becuase we do so in componentDidMount
    return(
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
