import React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

const CreatePostScreen = ({ navigation, route }) => {
  const [postText, setPostText] = useState("");
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.textInput}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title={"Done"}
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: { height: 200, padding: 10, backgroundColor: "white" },
});

export default CreatePostScreen;
