import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import Screen from "./Screen";

import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";

export function Main() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGames().then((games) => {
			setGames(games);
		});
	}, []);

	return (
		<Screen>
			{games.length == 0 ? (
				<ActivityIndicator color={"#fff"} size={"large"} />
			) : (
				<FlatList
					data={games}
					keyExtractor={(item) => item.slug}
					renderItem={({ item, index }) => (
						<AnimatedGameCard game={item} index={index} />
					)}
				/>
			)}
		</Screen>
	);
}
