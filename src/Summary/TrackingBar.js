import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Circle from "react-native-vector-icons/Entypo";
import Check from "react-native-vector-icons/MaterialCommunityIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";

const TrackingBar = ({ request }) => {
	if (request.status == "eeiu") {
		return (
			<View style={[s.bg_lightblue, s.pv4, s.aic, s.br4]}>
				<Text>Pending EEIU Approval</Text>
			</View>
		);
	} else
		return (
			<View style={[s.flx_row, s.bg_white, s.jcc, s.pv4, s.ph4, s.br4]}>
				{request.costCategory == "External Sponsorship" && (
					<View style={[s.aic]}>
						{request.status == "nominate" ||
						request.status == "endorse" ||
						request.status == "approve" ||
						request.status == "approved" ? (
							<CheckIcon />
						) : (
							<CircleIcon />
						)}
						<Text style={[s.f4]}>EEIU</Text>
					</View>
				)}
				{request.costCategory == "External Sponsorship" && <Line />}
				<View style={[s.aic]}>
					{request.status == "endorse" ||
					request.status == "approve" ||
					request.status == "approved" ? (
						<CheckIcon />
					) : (
						<CircleIcon />
					)}
					<Text style={[s.f4]}>Nominate</Text>
				</View>
				<Line />
				<View style={[s.aic]}>
					{request.status == "approve" || request.status == "approved" ? (
						<CheckIcon />
					) : (
						<CircleIcon />
					)}
					<Text style={[s.f4]}>Endorse</Text>
				</View>
				<Line />
				<View style={[s.aic]}>
					{request.status == "approved" ? <CheckIcon /> : <CircleIcon />}
					<Text style={[s.f4]}>Approve</Text>
				</View>
			</View>
		);
};

function Line() {
	return (
		<View style={{ flex: 0.3 }}>
			<View
				style={{
					alignItems: "center",
					flex: 0.5,
					borderColor: "#c4c4c4",
					borderBottomWidth: 1
				}}
			/>
		</View>
	);
}

const CheckIcon = () => {
	return <Check name="check-circle" size={24} color="green" style={[s.ph4]} />;
};

const CircleIcon = () => {
	return <Circle name="circle" size={24} color="grey" style={[s.ph4]} />;
};

export default TrackingBar;
