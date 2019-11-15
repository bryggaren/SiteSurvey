import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

interface ISiteScreenProps {
  navigation: any;
}

export class SiteInfoScreen extends React.Component<ISiteScreenProps> {
  static navigationOptions = {
    title: "New Site"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Input
          inputContainerStyle={styles.input}
          placeholder="Name (required)"
        />
        <Input inputContainerStyle={styles.input} placeholder="Location" />
        <Input inputContainerStyle={styles.input} placeholder="Description" />
        {/* Button disabled when name empty */}
        <Button title="Save" onPress={this.onSave} />
      </View>
    );
  }

  private onSave = () => {
    // Save input
    this.props.navigation.navigate("Sites");
  };
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 8,
    marginVertical: 16
  }
});
