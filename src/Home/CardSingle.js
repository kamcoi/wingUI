import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import moment from "moment";

import Icon from "react-native-vector-icons/EvilIcons";
import Circle from "react-native-vector-icons/FontAwesome";

const CardSingle = ({
	travelFrom,
	travelUntil,
	notification,
	staffs,
	status,
	submit,
	request,
	destination,
	travelType
}) => {
	return (
		<TouchableOpacity
			onPress={() => null}
			style={[
				s.flx_row,
				s.bg_white,
				s.mt3,
				s.br4,
				status == "draft" && s.bg_greylight
			]}
		>
			<View style={[s.bg_green, s.ph2, s.br4, request && s.bg_blue]} />
			<View style={[s.flx_i, s.pv3, s.ph4, s.mv3, s.br, s.b__greyishWhite]}>
				<View style={[s.flx_row]}>
					{status == "draft" && <Text style={[s.f3]}>[Draft] </Text>}
					<Text style={[s.b, s.pb1]}>{destination}</Text>
				</View>
				<Text style={[s.f3, s.pb4]}>{travelType}</Text>
				<View style={[s.flx_row, s.jcsb]}>
					<Thumbnail
						thumbnail={"calendar"}
						caption={
							moment(travelUntil).diff(moment(travelFrom), "days") +
							" " +
							"days"
						}
					/>
					<Thumbnail
						thumbnail={"user"}
						caption={staffs.length + 1 + " " + "pax"}
					/>
					<Thumbnail thumbnail={"check"} caption={status} />
				</View>
			</View>
			<View style={[s.jcc, s.aic, s.ph4]}>
				<Text style={[s.f_subheadline]}>{moment(travelFrom).format("D")}</Text>
				<Text>{moment(travelFrom).format("MMM YY")}</Text>
			</View>
			{notification == true && (
				<View style={{ paddingRight: 4 }}>
					<Circle name="circle" size={10} color="red" />
				</View>
			)}
		</TouchableOpacity>
	);
};

export default CardSingle;

const Thumbnail = ({ thumbnail, caption }) => {
	return (
		<View style={[s.flx_row, s.flx_i]}>
			<Icon name={thumbnail} size={18} color="#c4c4c4" />
			<Text style={[s.f3]}>{caption}</Text>
		</View>
	);
};
