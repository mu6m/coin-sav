import styled from "@emotion/styled";

const MainGoal = styled("div")`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	gap: 2rem;
	margin: 0 auto;
	max-width: 35rem;
	width: 100%;
	.goal {
		background-color: #151d31;
		border-radius: 7px;
		border: solid 2px #2466ff;
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		padding: 1rem;
		align-items: center;
		max-height: 7rem;
		h2 {
			font-weight: bold;
		}
		p {
			line-height: 1.2;
			text-align: center;
			font-weight: lighter;
		}
	}
	@media (max-width: 60rem) {
		display: flex;
		flex-direction: column;
		align-items: center;
		.goal {
			max-width: 20rem;
			width: 100%;
		}
	}
`;

export default function Goals() {
	return (
		<MainGoal>
			<div className="goal">
				<h2>$1.5M</h2>
				<p>Trade Volume</p>
			</div>
			<div className="goal">
				<h2>$26.2M</h2>
				<p>Trade Value Locked</p>
			</div>
			<div className="goal">
				<h2>12</h2>
				<p>Markets</p>
			</div>
			<div className="goal">
				<h2>5</h2>
				<p>Assets</p>
			</div>
		</MainGoal>
	);
}
