import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, StyleSheet, Text, View } from "react-native";
import AboutScreen from "./About";
import ProfileScreen from "./Profile";

const Tab = createBottomTabNavigator();

const DetailsScreen = ({ navigation, route }) => {
  const { itemId, otherParams } = route.params;
  return (
    <>
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParams: {JSON.stringify(otherParams)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default DetailsScreen;
