import styled from "@emotion/styled";

const MainDiv = styled("div")`
	margin: 5rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 7px;
	background-color: #151d31;
	border: solid 2px #1e2840;
	padding: 2rem;

	width: 50rem;
	* {
		text-align: center;
	}
	gap: 2rem;
	.title {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		h1 {
			line-height: 1;
			margin: 0;
			font-size: 2rem;
		}
	}
	.desc {
		margin: 0 auto;
		text-align: center;
		font-weight: lighter;
		max-width: 700px;
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
		width: 100%;
	}
`;

export default function Start() {
	return (
		<MainDiv>
			<div className="title">
				<h1>START IN NOW</h1>
			</div>
			<div className="desc">
				simply connect you crypto wallet using the app in seconds no
				registration no fees.
			</div>
			<div className="buttons">
				<button>Connect Wallet 💰</button>
			</div>
		</MainDiv>
	);
}
