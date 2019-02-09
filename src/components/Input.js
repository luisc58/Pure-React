import React, { Component } from 'react';
import Styled from 'styled-components';

const InputContainer = Styled.div`
    padding: 0.8rem;
    border-top: 1px solid black;
    input {
        font-size: 1.5rem;
        border: 1px solid gray;
        border-radius: 5px;
        box-sizing: border-box;
        width: 100%;
        padding: 1rem;
    }
`;
class Input extends Component {
	render() {
		return (
			<InputContainer>
				<input type="text" placeholder="Type your mesage here. Press Enter to send." />
			</InputContainer>
		);
	}
}

export default Input;
