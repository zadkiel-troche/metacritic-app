import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

import Screen from "../../components/Screen";

export default function About() {
	return (
		<Screen>
			<ScrollView>
				<Text className="text-white font-bold mb-4 text-2xl">
					Sobre el Proyecto
				</Text>

				<Text className="text-white text-white/90 mb-4">
					Esta aplicación fue desarrollada con fines educativos,
					enfocada en mejorar mis habilidades en React Native y Expo.
					Siguiendo el curso de Midudev en YouTube y consultando la
					documentación oficial de React Native y Expo, este proyecto
					representa un paso significativo en mi crecimiento como
					desarrollador móvil.
				</Text>

				<Text className="text-white text-white/90 mb-4">
					Desarrollador: ZadCode
				</Text>

				<Text className="text-white text-white/90 mb-4">
					Idea Original:{" "}
					<Link href={"https://midu.dev/"} className="text-blue-400">
						Midudev
					</Link>
				</Text>

				<Text className="text-white text-white/90 mb-4">
					Referencias Externas:{" "}
					<Link
						href={"https://www.metacritic.com/"}
						className="text-blue-400"
					>
						Metacritic
					</Link>
				</Text>

				<Text className="text-white text-white/90 mb-4">
					Tecnologías Utilizadas: React Native, Expo
				</Text>

				<Text className="text-white text-white/90 mb-4">
					Próximos Pasos: Integrar más funcionalidades y optimizar el
					rendimiento de la aplicación para dispositivos iOS y
					Android.
				</Text>

				<Text className="text-white text-white/90 mb-4">
					Contacto: Puedes seguir mis proyectos en{" "}
					<Link
						href={"https://github.com/zadkiel-troche"}
						className="text-blue-400"
					>
						GitHub
					</Link>{" "}
					o conectarte conmigo en{" "}
					<Link
						href={"https://www.linkedin.com/in/zadkiel-troche"}
						className="text-blue-400"
					>
						LinkedIn
					</Link>
					.
				</Text>
			</ScrollView>
		</Screen>
	);
}
