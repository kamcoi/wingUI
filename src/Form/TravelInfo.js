import React from "react";
import { Text, View, TextInput } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import DatePicker from "react-native-datepicker";
import { Dropdown } from "react-native-material-dropdown";
import moment from "moment";

import { travelCategory } from "../Data";

const TravelInfo = ({
	request,
	destination,
	travelType,
	travelFrom,
	travelUntil,
	justification,
	onChangeText1,
	onChangeText2,
	onDateChange1,
	onDateChange2,
	onChangeText3,
	onContentSizeChange,
	navigate,
	height,
	error
}) => {
	return (
		<View style={[s.bg_white, s.ph4, s.pv5, s.mh4, s.mv3, s.br3]}>
			<Text style={[s.blackishGrey, s.pb4, s.f3]}>Destination</Text>
			<TextInputComponent
				value={navigate ? request.destination : destination}
				caption="e.g. Jakarta, Indonesia"
				onChangeText={onChangeText1}
			/>
			<Text style={[s.blackishGrey, s.pb3, s.f3]}>Travel Type</Text>
			<View style={[s.mb5]}>
				<Dropdown
					value={navigate ? request.travelType : travelType}
					style={[s.b__greyishWhite]}
					placeholder="e.g. Meeting"
					labelHeight={10}
					label=""
					data={travelCategory}
					onChangeText={onChangeText2}
				/>
			</View>
			<View style={[s.flx_row, s.jcsb, s.pb5]}>
				<View style={[s.pb1, s.bb, s.b__greyishWhite]}>
					<Text style={[s.blackishGrey, s.pb4, s.f3, error && s.red]}>
						{error ? "Invalid Start Date" : "Start Date"}
					</Text>
					<DateComponent
						value={
							navigate
								? moment(request.travelFrom).format("YYYY-MM-DD")
								: travelFrom
						}
						onDateChange={onDateChange1}
					/>
				</View>
				<View style={[s.pb1, s.bb, s.b__greyishWhite]}>
					<Text style={[s.blackishGrey, s.pb4, s.f3, error && s.red]}>
						{error ? "Invalid End Date" : "End Date"}
					</Text>
					<DateComponent
						value={
							navigate
								? moment(request.travelUntil).format("YYYY-MM-DD")
								: travelUntil
						}
						onDateChange={onDateChange2}
					/>
				</View>
			</View>
			<Text style={[s.blackishGrey, s.pb4, s.f3]}>Justification</Text>
			<TextInput
				value={navigate ? request.justificationText : justification}
				placeholder="Provide justification for your travel..."
				multiline={true}
				underlineColorAndroid={"transparent"}
				onChangeText={onChangeText3}
				onContentSizeChange={onContentSizeChange}
				style={[
					{
						borderBottomWidth: 1,
						borderColor: "#f3f3f3",
						lineHeight: 20
					},
					{
						height: Math.max(100, height)
					}
				]}
			/>
		</View>
	);
};

const TextInputComponent = ({ value, caption, onChangeText }) => {
	return (
		<TextInput
			style={[s.pb3, s.aife, s.bb, s.b__greyishWhite, s.mb5]}
			value={value}
			placeholder={caption}
			underlineColorAndroid={"transparent"}
			onChangeText={value => onChangeText(value)}
		/>
	);
};

const DateComponent = ({ value, onDateChange }) => {
	return (
		<DatePicker
			style={{ width: 150, borderColor: "transparent" }}
			underlineColorAndroid="transparent"
			date={value}
			placeholder="Enter date"
			showIcon={false}
			mode="date"
			format="YYYY-MM-DD"
			minDate="01-01-1990"
			confirmBtnText="Confirm"
			cancelBtnText="Cancel"
			customStyles={{
				dateIcon: {
					position: "absolute",
					left: 0,
					top: 4,
					marginLeft: 0
				},
				dateInput: {
					borderColor: "transparent",
					position: "absolute",
					left: 0
				}
			}}
			onDateChange={value => onDateChange(value)}
		/>
	);
};

export default TravelInfo;

// <TextInputComponent
// 	value={navigate ? request.travelType : travelType}
// 	caption="e.g. UI/ UX Conference"
// 	onChangeText={onChangeText2}
// />
