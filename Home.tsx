import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

const Home = ({ navigation }) => {
    return (
        <>
        <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
                <Button title="Add" onPress={()=>navigation.navigate("Add")} />
                <Text></Text>
                <Button title="Checkbox" onPress={()=>navigation.navigate("Checkbox")} />
                <Text></Text>
                <Button title="Editor"onPress={()=>navigation.navigate("Editor")} />
                <Text></Text>
                <Button title="Settings" onPress={()=>navigation.navigate("Settings")} />
                <Text></Text>
                <Button title="More Settings" onPress={()=>navigation.navigate("MoreSettings")} />
                <Text></Text>
                <Button title="Profile" onPress={()=>navigation.navigate("Profile")} />
                <Text></Text>
                <Button title="Register" onPress={()=>navigation.navigate("Register")} />
                <Text></Text>
                <Button title="Login" onPress={()=>navigation.navigate("Login")} />
                <Text></Text>
                <Button title="Help" onPress={()=>navigation.navigate("Help")} />
                <Text></Text>
                <Button title="About" onPress={()=>navigation.navigate("About")} />
            </View>
        </ScrollView>
        </>
    );
};

export default Home;