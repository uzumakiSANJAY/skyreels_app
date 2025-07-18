import React from 'react';
import {
    View,
    Text,
    TextInput,
    // Button,
    TouchableOpacity,
    Image,
    // StyleSheet,
    ScrollView,
} from 'react-native';
import styles from '../styles/BookingStyles';

const BookingScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>BOOK HERE</Text>

            <View style={styles.row}>
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#ccc" />
                <TextInput style={styles.input} placeholder="No of People" placeholderTextColor="#ccc" keyboardType="numeric" />
                <TextInput style={styles.input} placeholder="Date" placeholderTextColor="#ccc" />
            </View>

            <View style={styles.row}>
                <TextInput style={styles.input} placeholder="Time" placeholderTextColor="#ccc" />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
                <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#ccc" keyboardType="phone-pad" />
            </View>

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/img4.png')} // use your heart+beans image
                style={styles.image}
            />
        </ScrollView>
    );
};

export default BookingScreen;