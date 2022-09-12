import store from "@mobile/store";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar style="light" />
			{/* <AppContent /> */}
			<View />
		</Provider>
	);
}
