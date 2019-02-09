import React from 'react';
import Styled from 'styled-components';

const MessageContainer = Styled.div`
    font-size: 15px;
    color: #333;
    line-height: 8px;
    .avatar { 
        width: 50px;
        height: 50px;
        display: inline-block;
        float: left;
        border: 1px solid #ddd;
        margin-right: 1rem;
        border-radius: 4px;
    }
    .message { 
        padding-top: 7px;
        .username { font-weight: 700; ;}
        .time { opacity: 0.5; padding-left: 0.5rem; font-size: 13px;}
    }

`;
const Message = () => {
	return (
		<MessageContainer>
			<span className="avatar" />
			<div className="message">
				<span className="username">Username </span>
				<span className="time">• 3hr ago</span>
				<p>Message Text testing testing </p>
			</div>
		</MessageContainer>
	);
};

export default Message;
