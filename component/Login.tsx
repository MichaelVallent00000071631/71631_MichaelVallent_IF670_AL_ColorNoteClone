import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert, Text, ScrollView } from "react-native";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (username == "admin" && password == "admin") {
            Alert.alert("Success", "Login berhasil!");
        } else {
            Alert.alert("Error", "Login tidak valid");
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    placeholder="Nama"
                    keyboardType="default"
                    style={styles.inputan}
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder="Password"
                    keyboardType="visible-password"
                    style={styles.inputan}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} />
                <Text></Text>
                <Button title="Back" onPress={()=>navigation.navigate("Home")} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    inputan: {
        borderColor: "black",
        borderWidth: 1,
        width: 200,
        marginBottom: 10,
        padding: 8,
    },
});

export default Login;
