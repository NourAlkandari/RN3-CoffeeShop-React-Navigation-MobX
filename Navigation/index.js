import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";

const myStack = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail,
    Login: Login,
    Cart: CoffeeCart
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      cardStyle: { backgroundColor: "rgb(20,90,100" },
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);
const AppContainer = createAppContainer(myStack);
export default AppContainer;
