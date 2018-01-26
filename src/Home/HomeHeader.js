import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/EvilIcons";

const HomeHeader = ({ user }) => {
	return (
		<View style={[s.bg_orange, s.pv5, s.jcc]}>
			<View style={[s.pv4, s.aic]}>
				<Icon name="user" size={70} color="#000000" />
			</View>
			<View style={[s.bg_white, s.aic, s.jcc, s.mh5, s.pv4, s.br3]}>
				<Text style={s.b}>{user.name}</Text>
				<Text style={s.f3}>{user.division}</Text>
				<Text style={s.f3}>{user.staffID}</Text>
			</View>
		</View>
	);
};

export default HomeHeader;
