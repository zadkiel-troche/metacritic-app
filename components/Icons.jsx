import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const CircleInfoIcon = (props) => {
	return (
		<FontAwesome6 name="circle-info" size={24} color={"white"} {...props} />
	);
};

export const HomeIcon = (props) => {
	return <FontAwesome name="home" size={32} color={"white"} {...props} />;
};

export const InfoIcon = (props) => {
	return <FontAwesome name="info" size={32} color={"white"} {...props} />;
};
