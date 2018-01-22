import React from "react";
import { Text, View, FlatList } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/EvilIcons";

const ProfileInfo = ({ user, request }) => {
	return (
		<View>
			<ProfileSingle
				thumbnail={"user"}
				staffName={user.name}
				staffDivision={user.division}
			/>
			<FlatList
				data={request.staffs}
				keyExtractor={(item, index) => item.id}
				renderItem={({ item }) => (
					<ProfileSingle
						id={item.id}
						staffName={item.staffName}
						staffDivision={item.staffDivision}
						thumbnail={"plus"}
					/>
				)}
			/>
		</View>
	);
};

const ProfileSingle = ({ thumbnail, staffName, staffDivision }) => {
	return (
		<View style={[s.bg_white, s.flx_row, s.pv4, s.ph3]}>
			<View style={[s.jcc, s.ph4]}>
				<Icon name={thumbnail} size={32} color="#c4c4c4" />
			</View>
			<View style={[s.flx_i]}>
				<Text style={[s.pb2]}>{staffName}</Text>
				<Text>{staffDivision}</Text>
			</View>
		</View>
	);
};

export default ProfileInfo;
