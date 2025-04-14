import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

const About = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent:"center", padding: 10 }}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>
                    ColorNoteClone
                </Text>
                <Text></Text>
                <Text>
                    Aplikasi Catatan ini membantu Anda menyimpan dan mengelola catatan dengan mudah. 
                    Dikembangkan dengan React Native dan TypeScript.
                </Text>
                <Text></Text>
                <Text>
                    Versi 1.00
                </Text>
                <Text></Text>
                <Text>
                    Dibuat oleh Michael Vallent (00000071631)
                </Text>
                <Text></Text>
                <Button title="Back" onPress={()=>navigation.navigate("Home")} />
            </View>
        </ScrollView>
    );
};

export default About;