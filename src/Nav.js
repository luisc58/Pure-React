import React, { Component } from 'react';
import Styled from 'styled-components';
import Channels from './components/Channels';

const Container = Styled.div`
    background: black;
    height: 100vh;
    display: grid;
    padding: 1rem 0 3rem 2rem;
`;

const Nav = ({ channels, people, onSelectedPerson, onSelectedChannel, selectedPerson, selectedChannel }) => {
	return (
		<Container>
			<Channels
				title="CHANNELS"
				slacks={channels}
				handleClick={onSelectedChannel}
				selectedTab={selectedChannel}
			/>
			<Channels title="PEOPLE" slacks={people} handleClick={onSelectedPerson} selectedTab={selectedPerson} />
		</Container>
	);
};

export default Nav;
