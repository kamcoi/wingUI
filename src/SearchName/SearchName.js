import React from "react";
import { Text, TextInput, View, FlatList } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Search from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

import ContactSingle from "./ContactSingle";

class SearchName extends React.Component {
	constructor(props) {
		super(props);
		this.state = { displayedFriends: {} };
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		this.setState({ displayedFriends: this.props.gems });
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ displayedFriends: nextProps.gems });
	}
	handleChange(text) {
		const lowerText = text.toLowerCase();
		const searchFriends = this.props.gems.filter(staff => {
			return (
				staff.staffName.toLowerCase().includes(lowerText) ||
				(typeof staff.staffDivision == "string" &&
					staff.staffDivision.toLowerCase().includes(lowerText))
			);
		});
		this.setState({ displayedFriends: searchFriends });
	}
	render() {
		const { gems } = this.props;
		const { displayedFriends } = this.state;
		const leftButtonConfig = {
			title: "Back",
			tintColor: "#ffffff",
			handler: () => {
				//navigate to profileform or approverform screen
				console.log();
			}
		};
		return (
			<View style={[s.flx_i, s.bg_white]}>
				<NavigationBar
					statusBar={{ tintColor: "#ee7202" }}
					style={{ backgroundColor: "#ee7202" }}
					title={{ title: "Search Name", tintColor: "#ffffff" }}
					leftButton={leftButtonConfig}
				/>
				<View
					style={[s.flx_row, s.ba, s.b__greydark, s.pv3, s.mh4, s.mv3, s.br5]}
				>
					<View style={[s.jcc, s.aife, s.ph3]}>
						<Search name="search" size={24} color="#c4c4c4" />
					</View>
					<TextInput
						style={[s.ph1, s.black, s.flx_i]}
						placeholder="Type name here.."
						clearButtonMode="always"
						underlineColorAndroid="rgba(0,0,0,0)"
						onChangeText={text => this.handleChange(text)}
					/>
				</View>
				<FlatList
					data={displayedFriends}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item }) => (
						<ContactSingle
							id={item.id}
							staffName={item.staffName}
							staffDivision={item.staffDivision}
							addStaff={this.props.addStaff}
						/>
					)}
				/>
			</View>
		);
	}
}

export default SearchName;
