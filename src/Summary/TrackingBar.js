import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Circle from "react-native-vector-icons/Entypo";
import Check from "react-native-vector-icons/MaterialCommunityIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";

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

class TrackingBar extends React.Component {
	renderLine() {
		return <Line />;
	}
	render() {
		const { request } = this.props;
		if (request.submit == true && request.eeiuApproved == false) {
			return (
				<View style={[s.bg_lightblue, s.aic, s.pv4, s.br4]}>
					<Text>Pending EEIU Approval</Text>
				</View>
			);
		} else
			return (
				<View style={[s.flx_row, s.bg_white, s.jcc, s.pv4, s.ph4, s.br4]}>
					<View style={[s.aic]}>
						{request.submit == true ? (
							<Check
								name="check-circle"
								size={24}
								color="green"
								style={[s.ph4]}
							/>
						) : (
							<Circle name="circle" size={24} color="grey" style={[s.ph4]} />
						)}
						<Text style={[s.f4]}>Submit</Text>
					</View>
					{this.renderLine()}
					<View style={[s.aic]}>
						{request.nominated == true && request.nominated2 == true ? (
							<Check
								name="check-circle"
								size={24}
								color="green"
								style={[s.ph4]}
							/>
						) : (
							<Circle name="circle" size={24} color="grey" style={[s.ph4]} />
						)}
						<Text style={[s.f4]}>Nominate</Text>
					</View>
					{this.renderLine()}
					<View style={[s.aic]}>
						{request.endorsed == true ? (
							<Check
								name="check-circle"
								size={24}
								color="green"
								style={[s.ph4]}
							/>
						) : (
							<Circle name="circle" size={24} color="grey" style={[s.ph4]} />
						)}
						<Text style={[s.f4]}>Endorse</Text>
					</View>
					{this.renderLine()}
					<View style={[s.aic]}>
						{request.approved == true ? (
							<Check
								name="check-circle"
								size={24}
								color="green"
								style={[s.ph4]}
							/>
						) : (
							<Circle name="circle" size={24} color="grey" style={[s.ph4]} />
						)}
						<Text style={[s.f4]}>Approve</Text>
					</View>
				</View>
			);
	}
}

export default TrackingBar;
