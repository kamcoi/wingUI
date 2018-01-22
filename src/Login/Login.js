import React from "react";
import {
	Text,
	View,
	Image,
	KeyboardAvoidingView,
	TouchableOpacity,
	ActivityIndicator
} from "react-native";
import { styles as s } from "react-native-style-tachyons";

import LoginForm from "./LoginForm";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { staffID: "", authentication: "", pressed: false };
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ pressed: false });
	}
	handleLogin(e) {
		const staffID = this.state.staffID;
		const authentication = this.state.authentication;
		this.props.onSubmit({
			staffID,
			authentication
		});
		this.setState({ pressed: true });
	}
	canBeSubmit() {
		const { staffID, authentication } = this.state;
		return staffID.length > 0 && authentication.length > 0;
	}
	render() {
		this.props.errorMessage && alert("Wrong Staff ID or Password");
		const buttonCaption = this.state.pressed ? (
			<ActivityIndicator size="small" color="#ee7202" />
		) : (
			<Text style={this.canBeSubmit() && [s.orange]}>LOG IN</Text>
		);
		return (
			<View style={[s.bg_orange, s.flx_i]}>
				<View style={[s.aic]}>
					<Image source={require("../logo.png")} style={[s.h7, s.w6, s.mv5]} />
				</View>
				<KeyboardAvoidingView
					behavior="padding"
					style={[s.flx_i, s.pt3, s.ph6]}
				>
					<LoginForm
						value={this.state.staffID}
						caption="Staff ID"
						onChangeText={textID => this.setState({ staffID: textID })}
						secure={false}
						thumbnail="user"
						length={7}
					/>
					<LoginForm
						value={this.state.authentication}
						caption="Password"
						onChangeText={textPassword =>
							this.setState({ authentication: textPassword })
						}
						secure={true}
						thumbnail="lock"
					/>
					<TouchableOpacity
						onPress={e => this.handleLogin(e)}
						style={[
							[s.pv4, s.aic, s.br5, s.bg_white],
							!this.canBeSubmit() && [s.bg_greylight]
						]}
						disabled={!this.canBeSubmit()}
					>
						{buttonCaption}
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

export default Login;
