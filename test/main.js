var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = React.createClass({
	render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <button>{'Add #'}</button>
        </form>
      </div>
	  );
  }
});
	
		
ReactDOM.render(<TodoApp/>,document.getElementById('example')
);