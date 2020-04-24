import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SitesScreen } from "./SitesScreen";
import { SiteScreen } from "./SiteScreen";
import { AddSiteScreen } from "./AddSiteScreen";

const AppNavigator = createStackNavigator(
  {
    Sites: SitesScreen,
    AddSite: AddSiteScreen,
    Site: SiteScreen,
  },
  {
    initialRouteName: "Sites",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(255, 204, 51)",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(AppNavigator);
