import styled from "@emotion/styled";

const MainDiv = styled("div")`
	margin: 5rem auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	.image {
		min-width: 20rem;
		img {
			width: 100%;
		}
	}
	.items {
		display: flex;
		flex-direction: column;

		max-width: 500px;
		* {
			text-align: left;
		}

		gap: 2rem;
		.title {
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			align-items: left;
			h1 {
				line-height: 1;
				margin: 0;
				font-size: 2rem;
			}
		}
		.desc {
			margin: 0 auto;
			text-align: left;
			font-weight: lighter;
			max-width: 700px;
			font-size: 0.8rem;
		}
		.buttons {
			display: flex;
			justify-content: left;
			align-items: left;
			gap: 2rem;
			.grey {
				background-color: #3c424f;
			}
			button {
				border-radius: 7px;
				padding: 0.6rem 2.3rem;
				background-color: #1649ff;
			}
		}
	}
	@media (max-width: 60rem) {
		flex-direction: column;
		* {
			align-items: center;
		}
		.items {
			.desc {
				max-width: 380px;
				text-align: center;
			}
		}
		.image {
			display: none;
		}
	}
`;

export default function Earn() {
	return (
		<MainDiv>
			<div className="image">
				<img src="/assets/globe.png" />
			</div>
			<div className="items">
				<div className="title">
					<h1>EARN PASSIVE</h1>
					<h1>INCOME WITH</h1>
					<h1>CRYPTOCURRENCIES</h1>
				</div>
				<div className="desc">
					our platforms allows you to trade multiple crypto coins with a couple
					of clicks making it way easier than ever, with live price and
					connected community of ethusaits we provide you an exclusive
					opportunity to learn and earn.
				</div>
				<div className="buttons">
					<button>Explore</button>
					<button className="grey">Learn</button>
				</div>
			</div>
		</MainDiv>
	);
}
