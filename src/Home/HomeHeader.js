import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/EvilIcons";

class HomeHeader extends React.Component {
	renderText(text, size, type, gap) {
		return (
			<Text style={{ paddingBottom: gap, fontSize: size, fontWeight: type }}>
				{(value = text)}
			</Text>
		);
	}
	render() {
		const { user } = this.props;
		return (
			<View style={[s.bg_orange, s.pv5, s.jcc]}>
				<View style={{ paddingVertical: 10, alignItems: "center" }}>
					<Icon name="user" size={70} color="#000000" />
				</View>
				<View style={[s.bg_white, s.aic, s.jcc, s.mh5, s.pv4, s.br3]}>
					{this.renderText(
						(this.props.text = user.name),
						(this.props.size = 14),
						(this.props.type = "bold"),
						(this.props.gap = 0)
					)}
					{this.renderText(
						(this.props.text = user.division),
						(this.props.size = 12)
					)}
					{this.renderText(
						(this.props.text = user.staffID),
						(this.props.size = 12)
					)}
				</View>
			</View>
		);
	}
}

export default HomeHeader;
