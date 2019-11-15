import * as React from "react";
import { Button, View, Text } from "react-native";

interface IHomeScreenProps {
  navigation: any;
}

export class HomeScreen extends React.Component<IHomeScreenProps> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
