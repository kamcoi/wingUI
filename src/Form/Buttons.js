import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const Buttons = ({ onPress, buttonConfig }) => {
	return (
		<View style={[s.flx_row]}>
			<TouchableOpacity
				onPress={() => null}
				style={[s.flx_i, s.bg_white, s.jcc, s.aic, s.pv4, s.mh4, s.mv4, s.br4]}
			>
				<Text style={[s.red]}>Cancel</Text>
			</TouchableOpacity>
			<TouchableOpacity
				disabled={buttonConfig}
				onPress={onPress}
				style={[
					s.flx_i,
					s.bg_orange,
					s.jcc,
					s.aic,
					s.pv4,
					s.mh4,
					s.mv4,
					s.br4,
					buttonConfig && s.bg_greydark
				]}
			>
				<Text>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Buttons;
