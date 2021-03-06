/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var Stars = require('./stars.js');
var _ = require('lodash');

var mockData = {
		Preparedness: 0,
		Mood: 0,
		Behavior: 0,
		Confidence: 0,
		Independence: 0
	};

var StudentEval = React.createClass({
	mixins: [FluxChildMixin],
	getInitialState: function() {
		return mockData;
	},
	changeRating: function(keyName, newRating) {
		var changeSpec = {};
		changeSpec[keyName] = {$set: newRating};
		var oldState = this.state;
		var newState = React.addons.update(this.state,changeSpec);
		// console.log(oldState, newState);
		this.setState(newState);
	},
	handleSubmit: function() {
		this.getFlux().actions.reset();
	},
	render: function() {
		var list = [];
		for(var key in this.state){
			list.push(<li>
									<div className="small-text red-text">{key.toUpperCase()}</div>
									<Stars count={5} rating={this.state[key]} onTouchTap={_.partial(this.changeRating, key)} />
								</li>)
		}
		return (
			<div className="brown-bg fullscreen-wrap padding">
				<div className="spacer">
					<span className="white-text big-text">STUDENT</span>
					<span className="blue-text small-text">INSTRUMENT</span>
				</div>
				<div className="scroll-outer">
					<div className="scroll-inner">
						<div className="panel yellow-bg half-padding">
							<div className="panel yellow-bg white-border half-padding">
								{React.DOM.ul({},list)}				
							</div>
						</div>
						<div className="panel blue-bg half-padding">
							<div className="panel blue-bg white-border half-padding">
								<div className="spacer">
									<span className="white-text big-text">COMMENTS</span>
									<span className="white-text small-text">OPTIONAL</span>
								</div>
								<div>
									Keyboard input
								</div>

							</div>
						</div>
						<div className="panel red-bg half-padding" onTouchTap={this.handleSubmit}>
							<div className="panel red-bg white-border half-padding">
								<div className="text-center big-text white-text">SUBMIT</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = StudentEval;