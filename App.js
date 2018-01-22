import React from "react";
import { StyleSheet, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import NativeTachyons from "react-native-style-tachyons";

import LoginIndex from "./src/Login/index";
import SearchNameIndex from "./src/SearchName/index";
import HomeIndex from "./src/Home/index";
import FormIndex from "./src/Form/index";
import SummaryIndex from "./src/Summary/index";

export default class App extends React.Component {
	render() {
		return (
			<View style={[s.flx_i]}>
				<SummaryIndex />
			</View>
		);
	}
}

NativeTachyons.build(
	{
		rem: 8,
		colors: {
			palette: {
				orange: "#ee7202",
				white: "#ffffff",
				red: "#ff0000",
				greyishWhite: "#f3f3f3",
				greylight: "#dcdcdc",
				greydark: "#c4c4c4",
				black: "#050505",
				yellow: "#ffd700"
			}
		}
	},
	StyleSheet
);
