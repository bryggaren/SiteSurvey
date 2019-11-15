import * as React from "react";
import { Button, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { ListItem } from "react-native-elements";

const list = [
  {
    name: "ICA Tuna",
    icon: "home",
    subtitle: "Tunavägen, LUND"
  },
  {
    name: "Biltema",
    icon: "home",
    subtitle: "Gastelyckan, LUND"
  }
];

interface ISitesScreenProps {
  navigation: any;
}
export class SitesScreen extends React.Component<ISitesScreenProps> {
  static navigationOptions = {
    title: "Sites"
  };
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
            onPress={() => this.props.navigation.navigate("SiteInfo")}
          />
        </View>

        <View>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftIcon={{ name: l.icon }}
              /* leftAvatar={{ source: { uri: l.avatar_url } }} */
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </View>
      </>
    );
  }
}
