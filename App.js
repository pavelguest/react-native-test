import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, Image } from "react-native";
import AboutScreen from "./src/screens/About";
import CreatePostScreen from "./src/screens/CreatePost";
import DetailsScreen from "./src/screens/Details";
import HomeScreen from "./src/screens/Home";
import ProfileScreen from "./src/screens/Profile";

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        mode="modal"
        screenOptions={{
          title: "Overview",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 36,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{
          //   headerStyle: { backgroundColor: "#f4511e" },
          //   headerTintColor: "#fff",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //     fontSize: 36,
          //   },
          // }}
          // options={{
          //   headerRight: () => (
          //     <>
          //       <Button title="Update count" />
          //     </>
          //   ),
          // }}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
