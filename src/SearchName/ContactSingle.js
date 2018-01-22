import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const ContactSingle = ({ id, staffName, staffDivision, addStaff }) => {
	return (
		<TouchableOpacity
			onPress={() => addStaff({ id, staffName, staffDivision })}
			style={[s.ph4, s.pv4, s.b__greylight, s.bb, s.mh3]}
		>
			<Text style={[s.pb2, s.b, s.black]}>{staffName}</Text>
			<Text>{staffDivision}</Text>
		</TouchableOpacity>
	);
};

export default ContactSingle;
