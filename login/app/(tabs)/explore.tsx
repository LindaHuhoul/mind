import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ExploreScreen = () => {
  const router = useRouter();  // useRouter to handle navigation

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore</Text>

      {/* Navigate to DASS 21 Assessment */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('dass21Screen')} // Navigate to dass21Screen
      >
        <Text style={styles.cardTitle}>DASS 21 Assessment</Text>
        <Text>Understand your mental well-being with our quick, insightful assessment.</Text>
      </TouchableOpacity>

      {/* Navigate to Activity */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('activityScreen')} // Navigate to activityScreen
      >
        <Text style={styles.cardTitle}>Activities</Text>
        <Text>Explore activities like Box Breathing and Meditation.</Text>
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
