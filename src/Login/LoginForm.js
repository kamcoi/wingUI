import React from "react";
import { TextInput, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/EvilIcons";

const LoginForm = ({ value, caption, secure, length, thumbnail }) => {
	return (
		<View style={[s.mb3, s.ph3, s.ba, s.br5, s.flx_row, s.b__white]}>
			<View style={[s.flx_i]}>
				<TextInput
					value={value}
					style={{ paddingVertical: 16 }}
					placeholder={caption}
					placeholderTextColor="#f8f8ff"
					clearButtonMode="always"
					underlineColorAndroid="transparent"
					secureTextEntry={secure}
					onChangeText={value => this.props.onChangeText(value)}
					maxLength={length}
				/>
			</View>
			<View style={[s.jcc]}>
				<Icon name={thumbnail} size={24} color="#ffffff" />
			</View>
		</View>
	);
};

export default LoginForm;
