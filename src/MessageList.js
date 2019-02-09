import React from 'react';
import Styled from 'styled-components';
import Message from './components/Message';

const Container = Styled.div`
    padding: 1rem 2rem;
    overflow-y: auto;
   
`;
const MessageList = () => {
	return (
		<Container>
			<Message />
		</Container>
	);
};

export default MessageList;
