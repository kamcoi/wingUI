import React from "react";
import { Text, View, ScrollView } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import NavigationBar from "react-native-navbar";

import TravelInfo from "./TravelInfo";
import ProfileInfo from "./ProfileInfo";
import CostInfo from "./CostInfo";
import ApproverInfo from "./ApproverInfo";
import ActionButton from "./ActionButton";

class Summary extends React.Component {
	handleButton(fromForm) {
		if (fromForm == true) {
			return (
				<ActionButton
					navigate={fromForm}
					request={this.props.request}
					submitRequest={this.props.submitRequest}
				/>
			);
		}
	}
	render() {
		const { user, request, submitRequest } = this.props;
		const fromForm = true;
		return (
			<View style={[s.flx_i, s.bg_greyishWhite]}>
				<NavigationBar
					statusBar={{ tintColor: "#ee7202" }}
					style={[s.bg_orange]}
					title={{
						title: fromForm ? "Summary" : "Status",
						tintColor: "#f8f8ff"
					}}
					leftButton={{
						title: fromForm ? "Exit" : "Back",
						tintColor: "#f8f8ff"
					}}
				/>
				<ScrollView style={[s.flx_i, s.ph4]}>
					<Text style={[s.pv3, s.greydark]}>DESCRIPTION</Text>
					<TravelInfo request={request} />
					<Text style={[s.pv3, s.greydark]}>PROFILE</Text>
					<ProfileInfo user={user} request={request} />
					<Text style={[s.pv3, s.greydark]}>COST</Text>
					<CostInfo request={request} />
					<Text style={[s.pv3, s.greydark]}>APPROVER</Text>
					<ApproverInfo request={request} />
				</ScrollView>
				{this.handleButton({ fromForm })}
			</View>
		);
	}
}

export default Summary;
