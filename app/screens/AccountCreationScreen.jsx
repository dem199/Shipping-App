import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { v4 as uuidv4 } from 'uuid';

const baseURL = 'http://192.168.207.80:5000'; // Updated base URL

function AccountCreationScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleCreateAccount = async () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please enter both name and email.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${baseURL}/api/account`, { id: uuidv4(), name, email });
      Alert.alert('Success', `Account created with ID: ${response.data.id}`);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create account.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Create Account" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.innerContent}>
          <Text style={styles.header}>Create Account</Text>
          <TextInput
            style={[styles.input, isNameFocused && styles.inputFocused]}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
          <TextInput
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <Button title="Create Account" onPress={handleCreateAccount} />
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 60, // Height of the header
    paddingBottom: 40, // Height of the footer
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  innerContent: {
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  inputFocused: {
    borderColor: '#007BFF',
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default AccountCreationScreen;
