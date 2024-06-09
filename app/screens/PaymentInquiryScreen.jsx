import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const baseURL = 'http://192.168.207.80:5000'; // Updated base URL

function PaymentInquiryScreen({ navigation }) {
  const [id, setId] = useState('');
  const [inquiry, setInquiry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handlePaymentInquiry = async () => {
    if (!id) {
      Alert.alert('Error', 'Please enter an account ID.');
      return;
    }

    setIsLoading(true);
    setInquiry(null);

    try {
      const response = await axios.get(`${baseURL}/api/payment/${id}`);
      setInquiry(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to get payment inquiry.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Payment Inquiry" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.innerContent}>
          <Text style={styles.header}>Payment Inquiry</Text>
          <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder="Account ID"
            value={id}
            onChangeText={setId}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button title="Get Payment Inquiry" onPress={handlePaymentInquiry} />
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
          {inquiry && (
            <View style={styles.result}>
              <Text>ID: {inquiry.id}</Text>
              <Text>Status: {inquiry.status}</Text>
              <Text>Amount: {inquiry.amount}</Text>
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

export default PaymentInquiryScreen;
