import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert, Text, ScrollView } from "react-native";

const Register = ({ navigation }) => {
    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (!nama || !umur || !email || !phone  || !password || !confirmPassword) {
            Alert.alert("Error", "Silahkan masukkan semua kolom");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Password dan konfirmasi password tidak cocok");
            return;
        }
        Alert.alert("Success", "Registrasi berhasil");
        // navigation.navigate("Home");
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput placeholder="Nama" keyboardType="default" style={styles.inputan} value={nama} onChangeText={setNama} />
                <TextInput placeholder="Umur" keyboardType="numeric" style={styles.inputan} value={umur} onChangeText={setUmur} />
                <TextInput placeholder="Email" keyboardType="email-address" style={styles.inputan} value={email} onChangeText={setEmail} />
                <TextInput placeholder="Phone" keyboardType="phone-pad" style={styles.inputan} value={phone} onChangeText={setPhone} />
                <TextInput placeholder="Password" secureTextEntry style={styles.inputan} value={password} onChangeText={setPassword} />
                <TextInput placeholder="Confirm Password" secureTextEntry style={styles.inputan} value={confirmPassword} onChangeText={setConfirmPassword} />
                <Text></Text>
                <Button title="Register" onPress={handleRegister} />
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

export default Register;
