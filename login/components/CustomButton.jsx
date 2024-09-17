import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  width = 200, // Default fixed width, you can adjust this
  marginLeft = 0,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        { width }, // Apply fixed width
        { marginLeft },
        isLoading && styles.buttonLoading,
        containerStyles,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.indicator}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#3461FD", // Secondary color
    borderRadius: 10, // Rounded corners
    minHeight: 62,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16, // Ensures padding inside the button
  },
  buttonLoading: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#FFFFFF", // Primary color
    fontFamily: "pbold", // Assuming you have the font configured
    fontSize: 20, // Text size
  },
  iconContainer: {
    marginRight: 8, // Space between icon and text
  },
  icon: {
    width: 24, // Adjust the size of the icon
    height: 24, // Adjust the size of the icon
  },
  indicator: {
    marginLeft: 8, // Space between text and loader
  },
});

export default CustomButton;
