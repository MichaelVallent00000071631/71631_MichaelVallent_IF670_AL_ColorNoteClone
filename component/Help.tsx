import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

const Help = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
                <Text style={{ fontSize: 18 }}>
                    Untuk menambahkan catatan, klik Add
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk mengubah checkbox catatan, klik Checkbox
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk mengubah catatan, klik Edit
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk masuk ke pengaturan, klik Settings
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk masuk ke tambahan pengaturan, klik More Settings
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk melihat profil, klik Profile
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk mendaftarkan diri, klik Register
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk masuk di aplikasi, klik Login
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Untuk melihat tentang aplikasi ini, klik About
                </Text>
                <Text></Text>
                <Button title="Back" onPress={()=>navigation.navigate("Home")} />
            </View>
        </ScrollView>
    );
};

export default Help;
