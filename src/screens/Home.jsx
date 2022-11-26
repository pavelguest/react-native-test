import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  // if(route.params?.post) {
  // sent the post to the server
  // }
  //   }, [route.params?.post]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
          <Button
            title="Info"
            color="fff"
            onPress={() => alert("This is a button!")}
          />
        </>
      ),
    });
  }, [navigation]);
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
      <Text style={{ margin: 15 }}>Count: {count}</Text>
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
