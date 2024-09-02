import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import Score from "../components/Score";

export default function Detail() {
	const { gameslug } = useLocalSearchParams();
	const [gameInfo, setGameInfo] = useState(null);

	useEffect(() => {
		if (gameslug) {
			getGameDetails(gameslug).then(setGameInfo);
		}
	}, [gameslug]);

	return (
		<Screen>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#ffee00" },
					headerTintColor: "black",
					headerLeft: () => {},
					headerTitle: gameInfo ? gameInfo.title : "Nombre del juego",
					headerRight: () => {},
				}}
			/>
			<View>
				{gameInfo == null ? (
					<ActivityIndicator color={"#fff"} size={"large"} />
				) : (
					<ScrollView>
						<View className="flex-1 justify-center items-center">
							<Image
								className="mb-4 rounded"
								source={{ uri: gameInfo.img }}
								style={{ width: 214, height: 294 }}
							/>
							<Score score={gameInfo.score} maxScore={100} />
							<Text className="text-white text-center mt-2 font-bold text-2xl">
								{gameInfo.title}
							</Text>
							<Text className="text-white/70 mt-4 text-left mb-8 text-base">
								{gameInfo.description}
							</Text>
						</View>
					</ScrollView>
				)}
			</View>
		</Screen>
	);
}
