import * as React from "react";
import { View, Text } from "react-native";

export class SiteScreen extends React.Component {
  static navigationOptions = {
    title: "Site"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Site Screen</Text>
      </View>
    );
  }
}
