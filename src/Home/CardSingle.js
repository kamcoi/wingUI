import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import moment from "moment";
import { checkStatus } from "./CheckStatus";

import Icon from "react-native-vector-icons/EvilIcons";
import Circle from "react-native-vector-icons/FontAwesome";

class CardSingle extends React.Component {
	handleNotification(notification) {
		if (notification == true)
			return (
				<View style={{ paddingRight: 4 }}>
					<Circle name="circle" size={10} color="red" />
				</View>
			);
	}
	handleNavigateSummary() {
		if (this.props.submit == false) {
			//navigate to Summary screen (console.log() == false)
			console.log();
			// length;
		} else console.log();
		//navigate to Summary screen (console.log() == true)
	}
	handleNavigateTask(navigate) {
		//navigate to TaskSummary
		console.log();
	}
	numberofDays(travelFrom, travelUntil) {
		const dayFrom = moment(travelFrom);
		const dayUntil = moment(travelUntil);
		return dayUntil.diff(dayFrom, "days");
	}
	numberofStaffs(staffs) {
		const numberofStaff = staffs.length;
		return numberofStaff + 1;
	}
	render() {
		const { travelFrom, travelUntil, notification, staffs } = this.props;
		const draft = this.props.submit == false ? "[Draft]" : null;
		const status = checkStatus(
			this.props.eeiuApproved,
			this.props.submit,
			this.props.nominated,
			this.props.nominated2,
			this.props.endorsed,
			this.props.approved
		);
		return (
			<TouchableOpacity
				onPress={() => {
					if (this.props.request) {
						this.handleNavigateSummary();
					} else this.handleNavigateTask();
				}}
				style={[
					styles.submitCardStyle,
					this.props.submit == false && styles.draftCardStyle
				]}
			>
				<View
					style={[
						styles.taskCardStyle,
						this.props.request && styles.requestCardStyle
					]}
				>
					<View style={styles.cardLeftContainer}>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ fontSize: 12 }}>{draft}</Text>
							<Text
								style={{ fontSize: 14, fontWeight: "bold", paddingBottom: 2 }}
							>
								{this.props.destination}
							</Text>
						</View>
						<Text style={{ fontSize: 12, paddingBottom: 14 }}>
							{this.props.travelType}
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.icon}>
								<Icon name="calendar" size={18} color="#c4c4c4" />
								<Text style={{ fontSize: 12 }}>
									{this.numberofDays(travelFrom, travelUntil)} days
								</Text>
							</View>
							<View style={styles.icon}>
								<Icon name="user" size={18} color="#c4c4c4" />
								<Text style={{ fontSize: 12 }}>
									{this.numberofStaffs(staffs)} pax
								</Text>
							</View>
							<View style={styles.icon}>
								<Icon name="check" size={18} color="#c4c4c4" />
								<Text style={{ fontSize: 12 }}>{status}</Text>
							</View>
						</View>
					</View>
					<View style={styles.cardRightContainer}>
						<Text style={{ fontSize: 32 }}>
							{moment(travelFrom).format("D")}
						</Text>
						<Text>{moment(travelFrom).format("MMM YY")}</Text>
					</View>
					<View style={{ flex: 0.05 }}>
						{this.handleNotification(notification)}
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

export default CardSingle;

const styles = StyleSheet.create({
	cardLeftContainer: {
		flex: 0.7,
		paddingVertical: 8,
		paddingHorizontal: 24,
		borderRightWidth: 0.5,
		borderColor: "#dcdcdc"
	},
	cardRightContainer: {
		flex: 0.3,
		alignItems: "center",
		justifyContent: "center"
	},
	requestCardStyle: {
		flexDirection: "row",
		paddingVertical: 8,
		borderLeftWidth: 5,
		borderColor: "blue",
		marginVertical: 1,
		marginLeft: 2
	},
	taskCardStyle: {
		flexDirection: "row",
		paddingVertical: 8,
		borderLeftWidth: 5,
		borderColor: "green",
		marginVertical: 1,
		marginLeft: 2
	},
	submitCardStyle: {
		backgroundColor: "#ffffff",
		borderRadius: 8,
		marginTop: 8
	},
	draftCardStyle: {
		backgroundColor: "#dcdcdc",
		borderRadius: 8,
		marginTop: 8
	},
	icon: {
		flex: 0.3,
		flexDirection: "row",
		paddingRight: 8
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
});
