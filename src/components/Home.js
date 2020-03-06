import React, { Component } from "react";
import styled from "styled-components";

export default class Home extends Component {
	state = {};

	render() {
		return (
			<Wrapper>
				<Title>Hello World!</Title>
				<Button>Normal</Button>
				<Button primary>Primary</Button>
			</Wrapper>
		);
	}
}

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
	text-decoration: underline;
`;

const Button = styled.button`
	background: ${props => (props.primary ? "palevioletred" : "white")};
	color: ${props => (props.primary ? "white" : "palevioletred")};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;
