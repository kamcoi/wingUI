import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import moment from "moment";

const TravelInfo = ({ request }) => {
	return (
		<View style={[s.bg_white, s.ph4, s.pv4, s.br4]}>
			<Text style={[s.f2, s.pb3]}>{request.destination}</Text>
			<Text style={[s.pb3, s.greydark]}>{request.travelType}</Text>
			<Text style={[s.pb4]}>{request.justificationText}</Text>
			<View
				style={[s.flx_row, s.jcc, s.aic, s.bg_orange, s.mh5, s.br__top, s.br4]}
			>
				<DateBox title={"DEPARTURE"} />
				<DateBox title={"ARRIVAL"} />
			</View>
			<View
				style={[
					s.flx_row,
					s.jcc,
					s.aic,
					s.bg_yellow,
					s.mh5,
					s.mb4,
					s.br__bottom,
					s.br4
				]}
			>
				<DateDetails date={request.travelFrom} />
				<DateDetails date={request.travelUntil} />
			</View>
		</View>
	);
};

const DateBox = ({ title }) => {
	return (
		<View style={[s.flx_i, s.aic, s.pv3]}>
			<Text>{title}</Text>
		</View>
	);
};

const DateDetails = ({ date }) => {
	return (
		<View style={[s.flx_i, s.aic, s.pv4]}>
			<Text style={[s.f_subheadline]}>{moment(date).format("D")}</Text>
			<Text style={[s.f2]}>{moment(date).format("MMM YYYY")}</Text>
		</View>
	);
};

export default TravelInfo;
