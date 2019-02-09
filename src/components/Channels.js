import React, { Component } from 'react';
import Styled, { css } from 'styled-components';

const Container = Styled.div`
	color: white;
	h1 { font-size: 1.8rem; padding-bottom: 1.5rem;}
	a { 
		font-size: 1.8rem; cursor: pointer;
		${(props) => props.selected && css`color: red;`}
		}
	.sep {
		padding: 10px 0;
	}
	.selected { background: rgb(242, 242, 242, 0.1)}
`;
//||||||| Logic |||||||||||||||||
class Channels extends Component {
	render() {
		let { title, slacks, handleClick, selectedTab } = this.props;
		return (
			<Container>
				<h1>{title}</h1>
				{slacks.map((item) => (
					<Channel onTabClick={handleClick} key={item.id} id={item.id} idSelected={selectedTab}>
						{title === 'CHANNELS' ? `# ${item.name}` : item.name}
					</Channel>
				))}
			</Container>
		);
	}
}

function Channel({ children, onTabClick, id, idSelected }) {
	return (
		<div onClick={() => onTabClick(id)} className={` sep ${id === idSelected ? ' selected' : ''}`}>
			<a>{children}</a>
		</div>
	);
}

export default Channels;
