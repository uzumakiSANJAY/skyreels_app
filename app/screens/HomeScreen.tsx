import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from '../styles/HomeStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

// 👇 Type your navigation prop
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoInline}
        />
        <View style={styles.navLinks}>
          <Text style={styles.navItem}>HOME</Text>
          <Text onPress={() => navigation.navigate('Menus')} style={styles.navItem}>MENU</Text>
          <Text onPress={() => navigation.navigate('About')} style={styles.navItem}>ABOUT</Text>
          <Text onPress={() => navigation.navigate('BookNow')} style={styles.navItem}>BOOK NOW</Text>
        </View>
      </View>

      {/* Hero Section */}
      <ImageBackground
        source={require('../assets/img1.png')}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.heroHeading}>Spend your</Text>
          <Text style={styles.heroSubheading}>Special Moments</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookNow')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>INDIAN TRADITIONAL FLAVORS</Text>

      {/* Content Block */}
      <View style={styles.contentBlock}>
        <Image
          source={require('../assets/img2.png')}
          style={styles.contentImage}
        />
        <Text style={styles.description}>
          Explore Authentic Indian Traditional Flavors: A Journey Through Rich Spices,
          Aromas, and Heritage Dishes.
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;