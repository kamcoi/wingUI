import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const CostInfo = ({ request }) => {
	return (
		<View style={[s.bg_white, s.ph4, s.pv4, s.br4]}>
			<Text style={[s.pb4, s.greydark]}>Cost</Text>
			<CostDetails data={request.cost} />
			<Text style={[s.pb4, s.greydark]}>Budget</Text>
			<CostDetails data={request.budget} />
			<Text style={[s.pb4, s.greydark]}>Cost Category</Text>
			<View style={[s.bb, s.b__greyishWhite, s.pb3, s.mb5]}>
				<Text>{request.costCategory}</Text>
			</View>
			<Text style={[s.pb4, s.greydark]}>Cost Centre</Text>
			<View style={[s.bb, s.b__greyishWhite, s.pb3]}>
				<Text>{request.costCentre}</Text>
			</View>
		</View>
	);
};

const CostDetails = ({ data }) => {
	return (
		<View style={[s.flx_row, s.bb, s.b__greyishWhite, s.pb3, s.mb5]}>
			<Text style={[s.pr4]}>RM</Text>
			<Text>30000</Text>
		</View>
	);
};

export default CostInfo;
