import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const ApproverInfo = ({ request }) => {
	return (
		<View style={[s.bg_white, s.ph4, s.pv4, s.br4]}>
			<ApproverSingle title={"Nominator 1"} staffName={request.nominatorName} />
			<ApproverSingle
				title={"Nominator 2"}
				staffName={request.nominator2Name}
			/>
			<ApproverSingle title={"Endorser"} staffName={request.endorserName} />
			<View>
				<Text style={[s.pb4, s.greydark]}>Approver</Text>
				<View style={[s.bb, s.b__greyishWhite, s.pb3]}>
					<Text>{request.approverName}</Text>
				</View>
			</View>
		</View>
	);
};

const ApproverSingle = ({ title, staffName }) => {
	return (
		<View>
			<Text style={[s.pb4, s.greydark]}>{title}</Text>
			<View style={[s.bb, s.b__greyishWhite, s.pb3, s.mb5]}>
				<Text>{staffName}</Text>
			</View>
		</View>
	);
};
export default ApproverInfo;
