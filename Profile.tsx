import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";

const Profile = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
                <Image 
                source={{ uri: "https://randomuser.me/api/portraits/lego/0.jpg" }} 
                style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
                />
                <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
                    Michael Vallent (00000071631)
                </Text>
                <Text style={{ fontSize: 18, color: "gray", marginBottom: 10 }}>
                    michael.vallent@student.umn.ac.id
                </Text>
                <Text style={{ fontSize: 16, lineHeight: 22 }}>
                    Saya seorang pengembang aplikasi yang suka menulis catatan dan mengelola ide-ide saya.
                </Text>
                <Text></Text>
                <Button title="Back" onPress={()=>navigation.navigate("Home")} />
            </View>
        </ScrollView>
    );
};

export default Profile;
