import { Button, Text, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile screen</Text>
      <Button
        title="Go back"
        color={"red"}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ProfileScreen;
