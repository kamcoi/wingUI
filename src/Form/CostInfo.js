import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { Dropdown } from "react-native-material-dropdown";

const CostInfo = ({
	cost,
	budget,
	costCategory,
	costCentre,
	onChangeText1,
	onChangeText2,
	onChangeText3,
	onChangeText4,
	error
}) => {
	return (
		<View style={[s.bg_white, s.ph4, s.pv5, s.mh4, s.mv3, s.br3]}>
			<Text style={[s.blackishGrey, s.pb4, s.f3, error && s.red]}>
				{error ? "Invalid Cost" : "Cost"}
			</Text>
			<View style={[s.flx_row, s.bb, s.b__greyishWhite, s.mb4]}>
				<Text style={[s.blackishGrey, s.pb4, s.f3, s.pt3, s.pr3]}>RM</Text>
				<TextInputComponent
					value={cost}
					type={"numeric"}
					caption="State your cost"
					onChangeText={onChangeText1}
				/>
			</View>
			<Text style={[s.blackishGrey, s.pb4, s.f3, error && s.red]}>
				{error ? "Invalid Budget" : "Budget"}
			</Text>
			<View style={[s.flx_row, s.bb, s.b__greyishWhite, s.mb4]}>
				<Text style={[s.blackishGrey, s.pb4, s.f3, s.pt3, s.pr3]}>RM</Text>
				<TextInputComponent
					value={budget}
					type={"numeric"}
					caption="State your cost"
					onChangeText={onChangeText2}
				/>
			</View>
			<Text style={[s.blackishGrey, s.pb3, s.f3]}>Cost Category</Text>
			<Dropdown
				value={costCategory}
				placeholder="e.g. TM Sponsorship"
				labelHeight={10}
				label=""
				data={costCategoryData}
				onChangeText={onChangeText3}
			/>
			<Text style={[s.blackishGrey, s.pv4, s.f3]}>
				{costCategory == "External Sponsorship"
					? "Sponsorsed by"
					: "Cost Centre"}
			</Text>
			<View style={[s.pt1, s.bb, s.b__greyishWhite, s.pb3]}>
				<TextInputComponent
					value={costCentre}
					type={"default"}
					caption={
						costCategory == "External Sponsorship"
							? "e.g. Khazanah Nasional"
							: "e.g. BMCE02"
					}
					onChangeText={onChangeText4}
				/>
			</View>
		</View>
	);
};

const TextInputComponent = ({ value, caption, onChangeText, type }) => {
	return (
		<TextInput
			style={[s.flx_i, s.pl2, s.pb2, s.aife]}
			value={value}
			placeholder={caption}
			onChangeText={value => onChangeText(value)}
			clearButtonMode="always"
			underlineColorAndroid="rgba(0,0,0,0)"
			keyboardType={type}
		/>
	);
};

const costCategoryData = [
	{
		value: "Cost Centre"
	},
	{
		value: "External Sponsorship"
	}
];

export default CostInfo;
