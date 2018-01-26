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

class Summary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pressed: false };
	}
	render() {
		const { user, request } = this.props;
		const { pressed } = this.state;
		const forApproval = true;
		const turn = true;
		return (
			<View style={[s.flx_i, s.bg_greyishWhite]}>
				<NavigationBar
					statusBar={{ tintColor: "#ee7202" }}
					style={[s.bg_orange]}
					title={{
						title: forApproval ? "Approval" : "Status",
						tintColor: "#f8f8ff"
					}}
					leftButton={{
						title: "Back",
						tintColor: "#f8f8ff"
					}}
				/>
				<ScrollView style={[s.flx_i, s.ph4]}>
					<Text style={[s.pv3, s.orange]}>DESCRIPTION</Text>
					<TravelInfo request={request} />
					<Text style={[s.pv3, s.orange]}>STATUS</Text>
					<TrackingBar request={request} />
					<Text style={[s.pv3, s.orange]}>PROFILE</Text>
					<ProfileInfo user={user} request={request} />
					<Text style={[s.pv3, s.orange]}>COST</Text>
					<CostInfo request={request} />
					<Text style={[s.pv3, s.orange]}>APPROVER</Text>
					<ApproverInfo request={request} />
				</ScrollView>
				<ActionButton
					request={request}
					turn={turn}
					isDisabled={!pressed}
					forApproval={forApproval}
					rightButton={e =>
						forApproval &&
						Alert.alert("Approve Request", "Wish to approve this Request?", [
							{
								text: "Back"
							},
							{
								text: "Approve",
								onPress: () => {
									forApproval
										? (this.setState({ pressed: true }),
											this.props.submitRequest({ approved: true }))
										: console.log({ approved: "Canteeekkk" });
								}
							}
						])
					}
					leftButton={a =>
						Alert.alert(
							forApproval ? "Revert Request" : "Cancel Request",
							forApproval
								? "Confirm to revert this Request?"
								: "Confirm to cancel this Request",
							[
								{
									text: "Back"
								},
								{
									text: forApproval ? "Revert" : "Cancel",
									onPress: () => {
										forApproval
											? (this.props.submitRequest({ approved: false }),
												this.setState({ pressed: true }))
											: console.log({ approved: "Canceelllll" });
									}
								}
							]
						)
					}
				/>
			</View>
		);
	}
}

export default Summary;
