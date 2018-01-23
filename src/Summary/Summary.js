import React from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import NavigationBar from "react-native-navbar";

import TravelInfo from "./TravelInfo";
import TrackingBar from "./TrackingBar";
import ProfileInfo from "./ProfileInfo";
import CostInfo from "./CostInfo";
import ApproverInfo from "./ApproverInfo";
import ActionButton from "./ActionButton";
import {
	validateCaption,
	validateAuth,
	revertAuth,
	turnApprove
} from "./index";

class Summary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pressed: false };
	}
	render() {
		const { user, request } = this.props;
		const { pressed } = this.state;
		const forRequest = false;
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
					<Text style={[s.pv3, s.orange]}>DESCRIPTION</Text>
					<TravelInfo request={request} />
					{fromForm ? null : <Text style={[s.pv3, s.greydark]}>STATUS</Text>}
					{fromForm ? null : <TrackingBar request={request} />}
					<Text style={[s.pv3, s.orange]}>PROFILE</Text>
					<ProfileInfo user={user} request={request} />
					<Text style={[s.pv3, s.orange]}>COST</Text>
					<CostInfo request={request} />
					<Text style={[s.pv3, s.orange]}>APPROVER</Text>
					<ApproverInfo request={request} />
				</ScrollView>
				{!fromForm && forRequest ? null : (
					<ActionButton
						forSummary={fromForm}
						buttonCaption={validateCaption(request, user)}
						request={request}
						turn={turnApprove(request, user)}
						user={user}
						isDisabled={!pressed}
						onPress1={e =>
							Alert.alert(
								fromForm
									? "Submit Request"
									: `${validateCaption(request, user)}` + " " + "Request",
								fromForm
									? "Ready to submit the request?"
									: "Wish to approve this Request?",
								[
									{
										text: "Back"
									},
									{
										text: fromForm
											? "Confirm"
											: `${validateCaption(request, user)}`,
										onPress: () => {
											this.setState({ pressed: true }),
												fromForm
													? this.props.submitRequest({ submit: true })
													: this.props.submitRequest(
															validateAuth(request, user)
														);
										}
									}
								]
							)
						}
						onPress2={a =>
							fromForm
								? console.log("Edit")
								: Alert.alert(
										"Revert Request",
										"Confirm to revert this Request?",
										[
											{
												text: "No"
											},
											{
												text: "Yes",
												onPress: () => {
													this.props.submitRequest(revertAuth(request, user)),
														this.setState({ pressed: true });
												}
											}
										]
									)
						}
					/>
				)}
			</View>
		);
	}
}

export default Summary;
