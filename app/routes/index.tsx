import styles from "~/styles/modules/indexpage.module.css";
import MarketTable from "~/components/MarketTable";
import Header from "~/components/Header";
import Goals from "~/components/Goals";
import Footer from "~/components/Footer";
import Trade from "~/components/Trade";
import Earn from "~/components/Earn";
import Start from "~/components/Start";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
	return (
		<>
			<Header />
			<Goals />
			<MarketTable />
			<Trade />
			<Earn />
			<Start />
			<Footer />
		</>
	);
}
