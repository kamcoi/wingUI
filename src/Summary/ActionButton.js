import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const ActionButton = ({
	onPress1,
	onPress2,
	isDisabled,
	buttonCaption,
	forSummary,
	request,
	user,
	turn
}) => {
	return (
		<View>
			{!turn && !forSummary ? (
				<View style={[s.bg_greydark, s.pv4, s.aic, s.mh4, s.mv3]}>
					<Text>Waiting for others to approve</Text>
				</View>
			) : (
				<View style={[s.flx_row]}>
					<Button
						isDisabled={isDisabled}
						onPress={onPress2}
						caption={forSummary ? "Edit" : "Revert"}
					/>
					<Button
						isDisabled={isDisabled}
						onPress={onPress1}
						caption={forSummary ? "Submit" : buttonCaption}
					/>
				</View>
			)}
		</View>
	);
};

const Button = ({ onPress, caption, isDisabled }) => {
	return (
		<TouchableOpacity
			disabled={!isDisabled}
			onPress={onPress}
			style={[
				s.flx_i,
				s.bg_orange,
				s.pv4,
				s.mv4,
				s.mh4,
				s.aic,
				s.br4,
				!isDisabled && s.bg_greydark
			]}
		>
			<Text>{caption}</Text>
		</TouchableOpacity>
	);
};

export default ActionButton;
