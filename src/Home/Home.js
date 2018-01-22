import React from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import NavigationBar from "react-native-navbar";
import ActionButton from "react-native-action-button";

import HomeHeader from "./HomeHeader";
import CardSingle from "./CardSingle";
import { validateForm } from "./CheckStatus";

class Home extends React.Component {
	render() {
		const { user, request, task } = this.props;
		return (
			<View style={[s.flx_i, s.bg_greyishWhite]}>
				<NavigationBar
					statusBar={{ tintColor: "#ee7202" }}
					style={[s.bg_orange]}
					title={{ title: "Wings", tintColor: "#f8f8ff" }}
				/>
				<HomeHeader user={user} />
				{request == "" && task == "" ? (
					<View style={[s.flx_i, s.jcc, s.aic]}>
						<Text style={{ fontWeight: "bold" }}>Let us start!</Text>
						<Text>Click on the Action Button to Start!</Text>
					</View>
				) : (
					<ScrollView style={[s.ph3]}>
						{request == "" ? null : (
							<Text style={[s.ph4, s.pt4, s.black, s.f3]}>PENDING REQUEST</Text>
						)}
						<FlatList
							data={request}
							keyExtractor={(item, index) => item.id}
							renderItem={({ item }) => (
								<CardSingle
									request={request}
									destination={item.destination}
									travelFrom={item.travelFrom}
									travelUntil={item.travelUntil}
									travelType={item.travelType}
									submit={item.submit}
									eeiuApproved={item.eeiuApproved}
									nominated={item.nominated}
									nominated2={item.nominated2}
									endorsed={item.endorsed}
									approved={item.approved}
									notification={item.notification}
									staffs={item.staffs}
								/>
							)}
						/>
						{task == "" ? null : (
							<Text style={[s.ph4, s.pt4, s.black, s.f3]}>
								PENDING APPROVAL
							</Text>
						)}
						<FlatList
							data={task}
							keyExtractor={(item, index) => item.id}
							renderItem={({ item }) => (
								<CardSingle
									destination={item.destination}
									travelFrom={item.travelFrom}
									travelUntil={item.travelUntil}
									travelType={item.travelType}
									submit={item.submit}
									eeiuApproved={item.eeiuApproved}
									nominated={item.nominated}
									nominated2={item.nominated2}
									endorsed={item.endorsed}
									approved={item.approved}
									notification={item.notification}
									staffs={item.staffs}
									task={task}
								/>
							)}
						/>
					</ScrollView>
				)}
				<ActionButton
					buttonColor="#ee7202"
					onPress={() => {
						this.props.newRequest({ id: 1001 });
					}}
				/>
			</View>
		);
	}
}

export default Home;
