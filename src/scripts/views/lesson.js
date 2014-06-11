/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Lesson = React.createClass({
	mixins: [FluxChildMixin],
	render: function() {
		return (
			<div className="brown-bg fullscreen-wrap padding">
				<div>
					<span className="white-text big-text">STUDENT</span>
					<span className="blue-text small-text">INSTRUMENT</span>
				</div>
				<div className="lesson-panel yellow-bg"/>
			</div>
		);
	}

});

module.exports = Lesson;