import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Activity: Box Breathing</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Box Breathing</Text>
        <Text style={styles.cardDescription}>Calm your mind with this quick, effective breathing exercise.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Meditation</Text>
        <Text style={styles.cardDescription}>Find peace and clarity with guided meditation sessions.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Mindfulness Breathing</Text>
        <Text style={styles.cardDescription}>Enhance your awareness and reduce stress with mindful breathing.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});

export default ActivityScreen;
