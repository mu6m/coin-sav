import styled from "@emotion/styled";

function Row({ dataPoints, color }: any) {
	const pathString = `M${dataPoints[0].x},${dataPoints[0].y} C${dataPoints[1].x},${dataPoints[1].y} ${dataPoints[2].x},${dataPoints[2].y} ${dataPoints[3].x},${dataPoints[3].y} ${dataPoints[4].x},${dataPoints[4].y} ${dataPoints[5].x},${dataPoints[5].y} ${dataPoints[6].x},${dataPoints[6].y}`;

	return (
		<div className="market_item">
			<div className="name">
				<div className="bold">ETH_USDT</div>
				<div className="light">0.15%</div>
			</div>
			<div className="stat">
				<div className="chart-container">
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="xMinYMin meet"
						width="100%"
						height="100%"
					>
						<path
							d={pathString}
							fill="none"
							className={`line ${color}`}
							strokeWidth="2"
						/>
					</svg>
				</div>
			</div>
			<div className="change">9.30%</div>
			<div className="price">
				<div className="bold">32543.32</div>
				<div className="light">$2543.32</div>
			</div>
			<div className="volume">
				<div className="bold">140.12 ETH</div>
				<div className="light">$440.12</div>
			</div>
			<div className="tyl">
				<div className="bold">$23.5M</div>
			</div>
		</div>
	);
}

const MainMarket = styled("div")`
	margin: 1rem 0;
	padding: 1rem 0;
	border-radius: 7px;
	border: solid 2px #1e2840;
	background-color: #151d31;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	.market_nav {
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.market_items {
		max-width: 100%;
		display: table;
		width: 100%;
		border-collapse: collapse;

		.market_header,
		.market_item {
			display: table-row;
		}

		.market_header {
			background-color: #172138;
			color: white;
		}

		.market_header > *,
		.market_item > * {
			display: table-cell;
			padding: 0.7rem 1rem;
			font-size: 0.8rem;
			height: 100%; /* Set height to 100% */
			vertical-align: middle;
		}
		.market_item {
			.bold {
				font-size: 0.9rem;
				font-weight: bold;
			}
			.light {
				font-weight: lighter;
			}
		}
		.market_item .chart-container {
			.green {
				stroke: #22970f;
			}
			.red {
				stroke: #b41615;
			}
			width: 100%; // Adjust as needed
			max-width: 5rem; // Adjust as needed
		}

		.line {
			fill: none;
			stroke-width: 2;
		}
	}
	.goal {
		max-width: 20rem;
		width: 100%;
	}
	@media (max-width: 60rem) {
		.market_items {
			.market_header {
				.vol {
					display: none;
				}
				.tyl {
					display: none;
				}
			}
			.volume {
				display: none;
			}
			.tyl {
				display: none;
			}
		}
	}
`;

export default function MarketTable() {
	return (
		<MainMarket>
			<div className="market_nav">
				<h2>Top markets</h2>
				<p>View all {" >"}</p>
			</div>
			<div className="market_items">
				<div className="market_header">
					<p>SYMBOL</p>
					<p>MARKET STATS</p>
					<p>1D CHANGE</p>
					<p>PRICE</p>
					<p className="vol">VOLUME</p>
					<p className="tyl">TYL</p>
				</div>
				<Row
					dataPoints={[
						{ x: 10, y: 70 },
						{ x: 30, y: 50 },
						{ x: 50, y: 30 },
						{ x: 70, y: 30 },
						{ x: 90, y: 30 },
						{ x: 110, y: 30 },
						{ x: 130, y: 10 },
					]}
					color={"green"}
				/>
				<Row
					dataPoints={[
						{ x: 10, y: 50 },
						{ x: 30, y: 50 },
						{ x: 50, y: 30 },
						{ x: 70, y: 40 },
						{ x: 90, y: 50 },
						{ x: 110, y: 50 },
						{ x: 130, y: 90 },
					]}
					color={"red"}
				/>
				<Row
					dataPoints={[
						{ x: 10, y: 70 },
						{ x: 30, y: 50 },
						{ x: 50, y: 30 },
						{ x: 70, y: 30 },
						{ x: 90, y: 30 },
						{ x: 110, y: 30 },
						{ x: 130, y: 10 },
					]}
					color={"green"}
				/>
				<Row
					dataPoints={[
						{ x: 10, y: 70 },
						{ x: 30, y: 50 },
						{ x: 50, y: 30 },
						{ x: 70, y: 30 },
						{ x: 90, y: 30 },
						{ x: 110, y: 30 },
						{ x: 130, y: 10 },
					]}
					color={"green"}
				/>
				<Row
					dataPoints={[
						{ x: 10, y: 50 },
						{ x: 30, y: 50 },
						{ x: 50, y: 30 },
						{ x: 70, y: 40 },
						{ x: 90, y: 50 },
						{ x: 110, y: 50 },
						{ x: 130, y: 90 },
					]}
					color={"red"}
				/>
			</div>
		</MainMarket>
	);
}
