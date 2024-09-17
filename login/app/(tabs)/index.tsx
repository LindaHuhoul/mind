import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from '../../components/CustomButton.jsx';
import IconButton from '../../components/iconButton.jsx';
// import { CustomButton, IconButton } from "../components";
import { icons } from "../../constants";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/icons/icon.png")}
            style={styles.image} 
            resizeMode="contain"   
          />

          <Text style={styles.text}>
            Your Journey To Wellness Starts Here
          </Text>
        <View className="relative mt-5">
          <CustomButton
              title="Login with Email"
              handlePress={() => router.push("/sign-in")}
              width={350}
              containerStyles={{ marginTop: 16 }}
          />
          </View>

          <View className="relative mt-5">
            <IconButton
              title="Login with Google"
              handlePress={() => router.push("/sign-in")}
              icon={icons.google}
              width={350}
              containerStyles={{ marginTop: 16 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: '#a685d1',  
  },
  scrollView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',  
  },
  container: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  text: {
    color: '#FFFFFF',  
    fontSize: 18,
  },
  image: {
    width: 500,  
    height: 100, 
    marginBottom: 20,  
  },
};
