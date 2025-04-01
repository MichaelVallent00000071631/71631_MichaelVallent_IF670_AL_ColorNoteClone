import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'numeric';
}

const Input = ({ label, placeholder, value, onChangeText, keyboardType = 'default' }: InputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const Editor = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>{title}</Text>
        <Text style={{fontSize: 24}}>{content}</Text>
        <Input label="Title" placeholder="Input your title" value={title} onChangeText={setTitle} />
        <Text></Text>
        <Input label="Content" placeholder="Input your content" value={content} onChangeText={setContent} />
        <Text></Text>
        <Button title="Back" onPress={()=>navigation.navigate("Home")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
});

export default Editor;
