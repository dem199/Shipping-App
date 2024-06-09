import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2024 Optimistic Ship4U</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    fontSize: 14,
  },
});

export default Footer;
