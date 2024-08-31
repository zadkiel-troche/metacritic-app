import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
	const [games, setGames] = useState([]);
	const insets = useSafeAreaInsets();

	useEffect(() => {
		getLatestGames().then((games) => {
			setGames(games);
		});
	}, []);

	return (
		<View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<StatusBar style="light" />
			<View style={{ marginBottom: 20 }}>
				<Logo />
			</View>
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
		</View>
	);
}
