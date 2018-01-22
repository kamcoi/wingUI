import React from "react";
import { TextInput, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/EvilIcons";

class LoginForm extends React.Component {
	render() {
		return (
			<View style={[s.mb3, s.ph3, s.ba, s.br5, s.flx_row, s.b__white]}>
				<View style={[s.flx_i]}>
					<TextInput
						value={this.props.value}
						style={{ paddingVertical: 16 }}
						placeholder={this.props.caption}
						placeholderTextColor="#f8f8ff"
						clearButtonMode="always"
						underlineColorAndroid="transparent"
						secureTextEntry={this.props.secure}
						onChangeText={value => this.props.onChangeText(value)}
						maxLength={this.props.length}
					/>
				</View>
				<View style={[s.jcc]}>
					<Icon name={this.props.thumbnail} size={24} color="#ffffff" />
				</View>
			</View>
		);
	}
}

export default LoginForm;
