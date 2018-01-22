import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const ActionButton = ({ submitRequest, navigate, request }) => {
	return (
		<View style={[s.flx_row]}>
			<Button onPress={() => null} caption={navigate ? "EDIT" : "REVERT"} />
			<Button
				onPress={() => submitRequest({ submit: true })}
				caption={navigate ? "SUBMIT" : "APPROVE"}
			/>
		</View>
	);
};

const Button = ({ onPress, caption }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[s.flx_i, s.bg_orange, s.pv4, s.mv4, s.mh4, s.aic, s.br4]}
		>
			<Text>{caption}</Text>
		</TouchableOpacity>
	);
};

export default ActionButton;
