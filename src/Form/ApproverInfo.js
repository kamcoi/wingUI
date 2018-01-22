import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { Dropdown } from "react-native-material-dropdown";

import { designation } from "../Data";

const ApproverInfo = ({
	navigate,
	request,
	requestorPosition,
	nominator,
	nominator2,
	endorser,
	approver,
	onChangeText
}) => {
	return (
		<View style={[s.bg_white, s.ph4, s.pv4, s.mh4, s.mv3, s.br3]}>
			<Text style={[s.pb1, s.f3, s.pt3, s.pr3]}>Position</Text>
			<Dropdown
				value={requestorPosition}
				placeholder="Select your position.."
				labelHeight={10}
				label=""
				data={designation}
				onChangeText={onChangeText}
			/>
			<ApproverList
				list={requestorPosition}
				request={request}
				nominator={nominator}
				nominator2={nominator2}
				endorser={endorser}
				approver={approver}
				navigate={navigate}
			/>
		</View>
	);
};

const ApproverList = ({
	list,
	request,
	nominator,
	nominator2,
	endorser,
	approver,
	navigate
}) => {
	let screen;
	let nominator1Name;
	let nominator2Name;
	let endorserName;
	let approverName;
	switch (list) {
		case "AGM and below":
			screen = "AddFriends";
			nominator1Name = "Direct Report to a GLT Member";
			nominator2Name = "Immediate Superior";
			endorserName = "Head of Finance/ Business Controllers";
			approverName = "GLT Member";
			break;
		case "GLT Members":
			screen = "AddFriends";
			nominator1Name = "GLT Member";
			nominator2Name = "None";
			endorserName = "GCFO";
			approverName = "GCEO";
			break;
		case "Direct report to GLT Members":
			screen = "AddFriends";
			nominator1Name = "GLT Member";
			nominator2Name = "None";
			endorserName = "Head of Finance/ Business Controllers";
			approverName = "VP: GCEO, GM and Below: GCFO";
			break;
		case "Head of Finance/ Business Controllers":
			screen = "AddFriends";
			nominator1Name = "GLT Member";
			nominator2Name = "Immediate Superior";
			endorserName = "VP FCD";
			approverName = "GCFO";
			break;
		case "CEO/President(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "Immediate Superior (a GLT Member)";
			nominator2Name = "None";
			endorserName = "GCFO";
			approverName = "GCEO";
			break;
		case "GM/ VP(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "CEO/ President";
			nominator2Name = "None";
			endorserName = "Subsidiary's CFO";
			approverName = "GLT Member";
			break;
		case "AGM/ AVP/ Senior Manager & Below(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "CEO/ President";
			nominator2Name = "Immediate Superior";
			endorserName = "Subsidiary's CFO";
			approverName = "GLT Member";
			break;
		case "CFO(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "CEO/ President";
			nominator2Name = "None";
			endorserName = "VP FCD";
			approverName = "GCFO";
			break;
		default:
			break;
	}
	return (
		<View>
			<ApproverSingle
				test={"+ Add Nominator 1"}
				details={nominator1Name}
				data={navigate ? request.nominatorName : nominator}
			/>
			<ApproverSingle
				test={"+ Add Nominator 2"}
				details={nominator2Name}
				data={navigate ? request.nominator2Name : nominator2}
			/>
			<ApproverSingle
				test={"+ Add Endorser"}
				details={endorserName}
				data={navigate ? request.endorserName : endorser}
			/>
			<ApproverSingle
				test={"+ Add Approver"}
				details={endorserName}
				data={navigate ? request.approverName : approver}
			/>
		</View>
	);
};

const ApproverSingle = ({ test, details, data }) => {
	return (
		<View style={[s.pb4]}>
			<TouchableOpacity onPress={() => null}>
				<Text style={[s.f3, s.pv4, s.orange]}>
					{test} ({details})
				</Text>
			</TouchableOpacity>

			<View style={[s.bb, s.b__greylight]}>
				<Text style={[s.black, s.pb3]}>{data}</Text>
			</View>
		</View>
	);
};

export default ApproverInfo;