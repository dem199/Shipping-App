import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title, navigation }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.navToggle} onPress={toggleNav}>
        <Text style={styles.navToggleText}>{isNavOpen ? 'Close' : 'Menu'}</Text>
      </TouchableOpacity>
      {isNavOpen && (
        <View style={styles.navMenu}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.navButtonText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('PaymentInquiry')}>
            <Text style={styles.navButtonText}>Payment Inquiry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('TrackItem')}>
            <Text style={styles.navButtonText}>Track Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CheckItem')}>
            <Text style={styles.navButtonText}>Check Item</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  navToggle: {
    padding: 10,
    backgroundColor: '#0056b3',
    borderRadius: 5,
  },
  navToggleText: {
    color: '#fff',
    fontSize: 14,
  },
  navMenu: {
    position: 'absolute',
    top: 55,
    right: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    zIndex: 1001,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Header;
