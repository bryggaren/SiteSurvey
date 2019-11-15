import * as React from "react";
import { View, Text } from "react-native";
import { Icon, ListItem, Button } from "react-native-elements";

export class SiteScreen extends React.Component {
  static navigationOptions = {
    title: "Site"
  };

  private locations;

  constructor(props: any) {
    super(props);
    // Fetch from localstorage?
    this.locations = [1];
  }

  render() {
    return (
      <>
        <View
          style={{
            alignItems: "flex-end"
          }}
        >
          <Icon
            raised
            reverse
            color="rgb(0, 169, 236)"
            name="plus"
            type="font-awesome"
            onPress={this.addLocation}
          />
        </View>

        <View>
          {this.locations.map((l, i) => (
            // Refactor to location item
            <View
              key={i}
              style={{
                alignItems: "flex-start",
                justifyContent: "space-between"
              }}
            >
              <Icon raised name="heartbeat" type="font-awesome" color="#f50" />
              <Icon raised name="heartbeat" type="font-awesome" color="#f50" />
            </View>
          ))}
        </View>
      </>
    );
  }

  private addLocation = () => {
    this.locations.push();
  };
}
