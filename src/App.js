import React, { Component } from 'react';
import Styled from 'styled-components';
import Nav from './Nav';
import Display from './Display';
import { People, Channels } from './static-data';

const AppContainer = Styled.div`
  display: grid;
  grid-template-columns: 0.25fr auto;
`;

// Top level component
class App extends Component {
	state = {
		selectedSlackName: ` # ${Channels[0].name}`,
		selectedPersonId: null,
		selectedChannelId: 1
	};

	findName = (arr, id) => {
		let filteredArr = arr.filter((e) => e.id === id);
		return filteredArr[0].name;
	};

	handleChannelClicked = (id) => {
		let name = this.findName(Channels, id);
		this.setState({
			selectedChannelId: id,
			selectedSlackName: `# ${name}`,
			selectedPersonId: null
		});
	};
	handlePersonClicked = (id) => {
		let name = this.findName(People, id);
		this.setState({
			selectedPersonId: id,
			selectedSlackName: name,
			selectedChannelId: null
		});
	};
	render() {
		return (
			<AppContainer>
				<Nav
					people={People}
					channels={Channels}
					onSelectedPerson={this.handlePersonClicked}
					onSelectedChannel={this.handleChannelClicked}
					selectedPerson={this.state.selectedPersonId}
					selectedChannel={this.state.selectedChannelId}
				/>
				<Display slackName={this.state.selectedSlackName} />
			</AppContainer>
		);
	}
}

export default App;
