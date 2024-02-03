import { info } from "~/lib/info";
import styled from "@emotion/styled";

const MainHead = styled("header")`
	margin: 5rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	.title {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		h1 {
			line-height: 1;
			margin: 0;
			font-size: 5rem;
		}
	}
	.desc {
		margin: 0 auto;
		text-align: center;
		font-weight: lighter;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.buttons {
		margin: 0 auto;
		display: flex;
		gap: 3rem;
		.grey {
			background-color: #3c424f;
		}
		button {
			border-radius: 7px;
			padding: 0.6rem 2.3rem;
			background-color: #1649ff;
		}
	}
	@media (max-width: 60rem) {
		.title {
			h1 {
				font-size: 4.5rem;
			}
		}
	}
`;

export default function Header() {
	return (
		<MainHead>
			<div className="title">
				<h1>TRADE</h1>
				<h1>TOKENS ON</h1>
				<h1>COINSAV</h1>
			</div>
			<div className="desc">{info.description}</div>
			<div className="buttons">
				<button>Enter App</button>
				<button className="grey">View Docs</button>
			</div>
		</MainHead>
	);
}
