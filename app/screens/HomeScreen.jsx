import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomeScreen({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Optimistic Ship4U" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.innerContent}>
          <Text style={styles.header}>Welcome to Optimistic Ship4U</Text>
          <Text style={styles.fascinatingContent}>
            At Optimistic Ship4U, we aim to make your shipping experience seamless and efficient.
            Whether you're sending a parcel or tracking your shipment, we've got you covered with our
            reliable and user-friendly services. Join us and experience the future of shipping today!
          </Text>
         
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
  fascinatingContent: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  
  
});

export default HomeScreen;
