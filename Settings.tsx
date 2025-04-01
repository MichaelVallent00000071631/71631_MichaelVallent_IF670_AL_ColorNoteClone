import React, { useState } from "react";
import { View, StyleSheet, Switch, Text, Button, ScrollView } from "react-native";

const Settings = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ScrollView>
            <View style={[styles.container, isDarkMode && styles.containerDark]}>
                <View style={styles.darkModeContainer}>
                    <Text style={[styles.light, isDarkMode && styles.dark]}>Dark Mode</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={setIsDarkMode}
                    />
                </View>
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
        backgroundColor: "#fff",
        padding: 10,
    },
    containerDark: {
        flex: 1,
        backgroundColor: "#000000",
        borderColor: "#ffffff",
        color: "#ffffff",
    },
    dark: {
        borderColor: "#000000",
        color: "#ffffff"
    },
    light: {
        borderColor: "#ffffff",
        color: "#000000",
    },
    darkModeContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
});

export default Settings;
