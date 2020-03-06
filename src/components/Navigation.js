import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import WesworthConstruction from "../WCG_White.png";
import styled from "styled-components";

const NavWrapper = styled.section`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	background: #404041;
	color: white;
	height: 15vh;
`;

const NavLink = styled.link`
	width: 20%;
	border: 10px;
	padding: 5px 25px 10px 10px;
	float: left;
`;

// .nav-logo {

// }

// .nav-titles ul li {
// 	float: right;
// 	list-style: none;
// 	padding: 10px;
// 	font-family: "futuraStdBold";
// 	font-size: 1.1vw;
// }

// .nav-titles ul li a {
// 	text-decoration: none;
// }

// .link {
// 	color: white;
// }

export default class NavBar extends Component {
	render() {
		return (
			<NavWrapper>
				<div>
					<Link to={"/"} className="link">
						<img
							src={WesworthConstruction}
							alt="Wesworth Construction"
							width="25%"
						/>
					</Link>
				</div>
				<div className="nav-titles">
					<ul>
						<li>
							<Link to={"/management"} className="link">
								MANAGEMENT
							</Link>
						</li>
						<li>
							<Link to={"/builders"} className="link">
								BUILDERS
							</Link>
						</li>
						<li>
							<Link to={"/electric"} className="link">
								ELECTRIC
							</Link>
						</li>
						<li>
							<Link to={"/"} className="link">
								{Home}HOME
							</Link>
						</li>
					</ul>
				</div>
			</NavWrapper>
		);
	}
}
