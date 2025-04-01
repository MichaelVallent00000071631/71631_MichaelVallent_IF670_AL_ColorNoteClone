import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default';
}

const Input = ({ label, placeholder, value, onChangeText, keyboardType = 'default' }: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const Add = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title || !content) {
        Alert.alert("Error", "Enter title or content first");
    } else {
        Alert.alert("Success", "Add note completed");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input label="Title" placeholder="Enter title" value={title} onChangeText={setTitle} />
        <Input label="Content" placeholder="Enter content" value={content} onChangeText={setContent} />
        <Text></Text>
        <Button title="Save" onPress={handleSave} />
        <Text></Text>
        <Button title="Back" onPress={()=>navigation.navigate("Home")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default Add;
