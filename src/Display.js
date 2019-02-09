import React, { Component } from 'react';
import Styled from 'styled-components';
import Input from './components/Input';
import MessageList from './MessageList';

const Container = Styled.div`
	display: grid;
	grid-template-rows: 0.1fr 1fr auto;

.no-message {
	text-align: center;
	font-size: 2.5rem;
	margin-top: 20%;
	opacity: 0.3;
}
.slack {
	margin: 0;
	padding: 2rem;
	font-size: 2.5rem;
}
`;

class Display extends Component {
	render() {
		let { slackName } = this.props;
		return (
			<Container>
				<div className="slack">{slackName}</div>
				<MessageList />
				{/* <div className="no-message">No Messages :( </div> */}
				<Input />
			</Container>
		);
	}
}

export default Display;
