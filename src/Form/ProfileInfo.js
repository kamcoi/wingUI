import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Icon from "react-native-vector-icons/EvilIcons";

const StaffSingle = ({ id, onPress1, staffName, staffDivision }) => {
	return (
		<View style={[s.bg_white, s.flx_row, s.pv4, s.ph2, s.mh4, s.mt3, s.br4]}>
			<View style={[s.jcc, s.ph4]}>
				<Icon name="user" size={32} color="#c4c4c4" />
			</View>
			<View style={[s.flx_i]}>
				<Text>{staffName}</Text>
				<Text>{staffDivision}</Text>
			</View>
			<TouchableOpacity onPress={onPress1} style={[s.jcc, s.ph2]}>
				<Icon name="minus" color="#c4c4c4" size={16} />
			</TouchableOpacity>
		</View>
	);
};

const ProfileInfo = ({ user, staffs, onPress, onPress1, removeStaff }) => {
	return (
		<View>
			<View style={[s.bg_white, s.flx_row, s.ph4, s.pv4, s.mh4, s.mv3, s.br3]}>
				<View style={[s.jcc]}>
					<Icon name="user" size={50} color="#c4c4c4" />
				</View>
				<View style={[s.pl3]}>
					<Text>{user.name}</Text>
					<Text style={{ fontSize: 12 }}>{user.staffID}</Text>
					<Text style={{ fontSize: 12 }}>{user.division}</Text>
				</View>
			</View>
			{staffs.length == 0 ? null : (
				<Text style={[s.ph4, s.pv2, s.f3, s.greydark]}>
					OTHER {staffs.length == 1 ? "STAFF" : "STAFFS"}
				</Text>
			)}
			<FlatList
				data={staffs}
				keyExtractor={(item, index) => item.id}
				renderItem={({ item }) => (
					<StaffSingle
						id={item.id}
						staffName={item.staffName}
						staffDivision={item.staffDivision}
						onPress1={onPress1}
					/>
				)}
			/>
			<TouchableOpacity
				onPress={onPress}
				style={[s.bg_white, s.mh4, s.mv3, s.pv4, s.aic, s.br4]}
			>
				<Text style={[s.orange]}>+ ADD STAFF</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ProfileInfo;
