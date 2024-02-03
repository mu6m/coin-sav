import styled from "@emotion/styled";
import { info } from "~/lib/info";

const MainNav = styled("nav")`
	display: flex;
	padding: 0 1rem;
	justify-content: space-between;
	gap: 7rem;
	align-items: center;

	.left {
		font-weight: bold;
		font-size: 1.8rem;
	}
	.center {
		display: flex;
		gap: 1rem;
	}
	.right {
		button {
			border-radius: 7px;
			padding: 0.6rem 1.4rem;
			background-color: #1649ff;
		}
	}
	@media (max-width: 60rem) {
		.center {
			display: none;
		}
	}
`;

export default function Nav() {
	return (
		<MainNav>
			<div className="left">{info.title}</div>
			<div className="center">
				<div className="text">About</div>
				<div className="text">Docs</div>
				<div className="text">Api</div>
			</div>
			<div className="right">
				<button>Enter The App</button>
			</div>
		</MainNav>
	);
}
