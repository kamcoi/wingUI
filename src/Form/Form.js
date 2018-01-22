import React from "react";
import {
	Text,
	View,
	ScrollView,
	KeyboardAvoidingView,
	TouchableOpacity
} from "react-native";
import { styles as s } from "react-native-style-tachyons";
import NavigationBar from "react-native-navbar";
import Icon from "react-native-vector-icons/EvilIcons";
import moment from "moment";

import {
	validateDate,
	validateCost,
	validatePosition,
	enableButton
} from "./Validate";
import ProfileInfo from "./ProfileInfo";
import TravelInfo from "./TravelInfo";
import CostInfo from "./CostInfo";
import ApproverInfo from "./ApproverInfo";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requestorName: this.props.user.name,
			requestorDivision: this.props.user.division,
			destination: "",
			travelType: "",
			travelFrom: "",
			travelUntil: "",
			justification: "",
			cost: "",
			budget: "",
			costCategory: "",
			costCentre: "",
			requestorPosition: "",
			nominatorName: "1",
			nominator2Name: "2",
			endorserName: "3",
			approverName: "4",
			staffs: [],
			eeiuApproved: true,
			nominated2: true,
			height: 0,
			pressed: false
		};
	}
	handleCostCategory({ value }) {
		this.setState({ costCategory: value });
		this.setState({
			eeiuApproved: value === "Sponsorship (EEIU)" ? false : true
		});
	}
	handleApproval({ value }) {
		const check = validatePosition(value);
		this.setState({ requestorPosition: value });
		this.setState({ nominated2: check ? false : true });
	}
	handleNext(e) {
		const {
			requestorName,
			requestorDivision,
			staffs,
			destination,
			travelType,
			justification,
			cost,
			budget,
			costCategory,
			costCentre,
			eeiuApproved,
			nominated2,
			requestorPosition,
			nominatorName,
			nominator2Name,
			endorserName,
			approverName
		} = this.state;
		const travelFrom = moment(this.state.travelFrom).format("x");
		const travelUntil = moment(this.state.travelUntil).format("x");
		this.props.fillRequest({
			requestorName,
			requestorDivision,
			staffs,
			destination,
			travelType,
			travelFrom,
			travelUntil,
			justification,
			cost,
			budget,
			costCategory,
			costCentre,
			eeiuApproved,
			nominated2,
			requestorPosition,
			nominatorName,
			nominator2Name,
			endorserName,
			approverName
		});
	}
	render() {
		const { user, request } = this.props;
		const {
			destination,
			staffs,
			travelType,
			travelFrom,
			travelUntil,
			justification,
			cost,
			budget,
			costCategory,
			costCentre,
			nominator2Name,
			nominatorName,
			endorserName,
			approverName,
			requestorPosition,
			eeiuApproved,
			nominated2,
			height,
			pressed
		} = this.state;
		const fromSummary = false;
		const errorDate = validateDate(travelFrom, travelUntil) && pressed;
		const errorCost = validateCost(cost, budget);
		const isEnabled = enableButton(
			destination,
			travelType,
			travelFrom,
			travelUntil,
			justification,
			cost,
			budget,
			costCategory,
			costCentre,
			nominatorName,
			endorserName,
			approverName
		);
		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={[s.flx_i, s.bg_greyishWhite]}
			>
				<NavigationBar
					statusBar={{ tintColor: "#ee7202" }}
					style={[s.bg_orange]}
					title={{ title: "New Request", tintColor: "#f8f8ff" }}
					leftButton={{ title: "Exit", tintColor: "#f8f8ff" }}
				/>
				<ScrollView style={[s.flx_i]}>
					<Segment title={"PROFILE"} thumbnail={"user"} />
					<ProfileInfo
						user={user}
						request={request}
						staffs={staffs}
						navigate={fromSummary}
						onPress={staff =>
							this.setState({
								staffs: [
									{
										id: 1,
										deleted: false,
										staffName: "Mohammad Ali bin Kassim",
										staffDivision: "Group Strategy"
									}
								]
							})
						}
					/>
					<Segment title={"TRAVEL"} thumbnail={"location"} />
					<TravelInfo
						request={request}
						destination={destination}
						travelType={travelType}
						travelFrom={travelFrom}
						travelUntil={travelUntil}
						justification={justification}
						navigate={fromSummary}
						height={height}
						error={errorDate}
						onChangeText1={destinationText =>
							this.setState({ destination: destinationText })
						}
						onChangeText2={travelTypeText =>
							this.setState({ travelType: travelTypeText })
						}
						onDateChange1={startDate =>
							this.setState({ travelFrom: startDate })
						}
						onDateChange2={endDate =>
							this.setState({ travelUntil: endDate, pressed: true })
						}
						onChangeText3={justificationText =>
							this.setState({ justification: justificationText })
						}
						onContentSizeChange={event => {
							this.setState({
								height: event.nativeEvent.contentSize.height
							});
						}}
					/>
					<Segment title={"COST"} thumbnail={"credit-card"} />
					<CostInfo
						cost={cost}
						budget={budget}
						costCategory={costCategory}
						costCentre={costCentre}
						error={errorCost}
						navigate={fromSummary}
						request={request}
						onChangeText1={costText => this.setState({ cost: costText })}
						onChangeText2={budgetText => this.setState({ budget: budgetText })}
						onChangeText3={value => this.handleCostCategory({ value })}
						onChangeText4={costCentreText =>
							this.setState({ costCentre: costCentreText })
						}
					/>
					<Segment title={"APPROVAL"} thumbnail={"check"} />
					<ApproverInfo
						requestorPosition={requestorPosition}
						navigate={fromSummary}
						request={request}
						nominator={nominatorName}
						nominator2={nominator2Name}
						endorser={endorserName}
						approver={approverName}
						onChangeText={value => this.handleApproval({ value })}
					/>
				</ScrollView>
				<TouchableOpacity
					disabled={fromSummary ? pressed : !isEnabled}
					onPress={e => this.handleNext(e)}
					style={[
						s.bg_orange,
						s.jcc,
						s.aic,
						s.pv4,
						s.mh4,
						s.mv4,
						s.br4,
						!isEnabled && s.bg_greydark
					]}
				>
					<Text>NEXT</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const Segment = ({ title, thumbnail }) => {
	return (
		<View style={[s.flx_row, s.ph4, s.pt3]}>
			<Icon name={thumbnail} size={24} color="#ee7202" />
			<View style={[s.jcc, s.pl2]}>
				<Text style={[s.orange]}>{title}</Text>
			</View>
		</View>
	);
};

export default Form;
