'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];


var ListItemWrapper = React.createClass({
  render: function() {
    return <button onClick={this.onClickHandler}>{this.props.data.author}</button>;
  },
  onClickHandler: function(){
	  afficherQuote(this.props.data.author);
  }
});

var QuotesList = React.createClass({
  render: function() {
    return (
      <ul>
        {quotes.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});

function afficherQuote(author){
	console.log(author)
	var quote= "";
	for(var i=0; i < quotes.length; ++i){
		if(quotes[i].author === author){
			quote = quotes[i].quote;
			break;
		}
	}
	
	console.log(quote)
	ReactDOM.render(
	  React.createElement('h1',null, quote),
	  document.getElementById('quote')
	);
}


ReactDOM.render(<QuotesList/>,document.getElementById('example')
);