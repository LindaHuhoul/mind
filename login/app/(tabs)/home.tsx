import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greetingText}>Good Morning James,</Text>
      <View style={styles.searchContainer}>
        
      <Text style={styles.searchText}>Search mental health disorder</Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.sectionTitle}>Your Weekly Progress</Text>
        

      </View>

      <View style={styles.recommendedActivitiesContainer}>
        <Text style={styles.sectionTitle}>Recommended Activities</Text>
        <ScrollView horizontal>
          <Image style={styles.activityImage} source={require('../../assets/images/meditation.png')} />
          <Image style={styles.activityImage} source={require('../../assets/images/breathe.png')} />
        </ScrollView>
      </View>

      <View style={styles.feelingContainer}>
        <Text style={styles.sectionTitle}>How Are You Feeling Today?</Text>
        <ScrollView horizontal>
          <Ionicons name="happy" size={48} color="green" />
          <Ionicons name="sad" size={48} color="red" />
          <Ionicons name="happy-outline" size={48} color="yellow" />
        </ScrollView>
      </View>

      <View style={styles.assessmentsContainer}>
        <Text style={styles.sectionTitle}>Assessments For You</Text>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
  },
  searchText: {
    marginLeft: 8,
    color: 'gray',
  },
  progressContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recommendedActivitiesContainer: {
    marginVertical: 16,
  },
  activityImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  feelingContainer: {
    marginVertical: 16,
  },
  assessmentsContainer: {
    marginVertical: 16,
  },
});
