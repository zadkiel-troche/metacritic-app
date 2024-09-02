import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#ffee00",
				tabBarInactiveTintColor: "gray",
				tabBarStyle: {
					backgroundColor: "black",
					borderTopWidth: 0,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				}}
			/>

			<Tabs.Screen
				name="about"
				options={{
					title: "About",
					tabBarIcon: ({ color }) => <InfoIcon color={color} />,
				}}
			/>
		</Tabs>
	);
}
