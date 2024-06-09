import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const baseURL = 'http://192.168.207.80:5000'; // Updated base URL

function TrackItemScreen({ navigation }) {
  const [id, setId] = useState('');
  const [trackInfo, setTrackInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleTrackItem = async () => {
    if (!id) {
      Alert.alert('Error', 'Please enter an item ID.');
      return;
    }

    setIsLoading(true);
    setTrackInfo(null);

    try {
      const response = await axios.get(`${baseURL}/api/track/${id}`);
      setTrackInfo(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to track the item.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Track Item" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.innerContent}>
          <Text style={styles.header}>Track Item</Text>
          <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder="Item ID"
            value={id}
            onChangeText={setId}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button title="Track Item" onPress={handleTrackItem} />
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
          {trackInfo && (
            <View style={styles.result}>
              <Text>ID: {trackInfo.id}</Text>
              <Text>Location: {trackInfo.location}</Text>
              <Text>Status: {trackInfo.status}</Text>
            </View>
          )}
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
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default TrackItemScreen;
