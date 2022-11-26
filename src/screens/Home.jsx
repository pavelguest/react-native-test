import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  //   useEffect(() => {
  // if(route.params?.post) {
  // sent the post to the server
  // }
  //   }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Update the title"
        color={"green"}
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            // itemId: 86,
            otherParams: "anything you want here",
          })
        }
      />
      <Button
        title={"Create post"}
        onPress={() => {
          navigation.navigate("CreatePost");
        }}
      />
      <Button
        title="Go to profile"
        color={"red"}
        onPress={() =>
          navigation.navigate("Profile", { name: "Custom profile header" })
        }
      />
      <Text style={{ margin: 15 }}>Post: {route.params?.post}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 36 },
});

export default HomeScreen;
