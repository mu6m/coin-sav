import styled from "@emotion/styled";

const MainDiv = styled("div")`
	margin: 5rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 500px;
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
			font-size: 3rem;
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
`;

export default function Trade() {
	return (
		<MainDiv>
			<div className="title">
				<h1>TRADE ANYTHING</h1>
			</div>
			<div className="desc">
				trade any token on BNB Smart Chain in seconds, just connect your wallet
				and you are good to go.
			</div>
			<div className="buttons">
				<button>Trade Now</button>
			</div>
		</MainDiv>
	);
}
