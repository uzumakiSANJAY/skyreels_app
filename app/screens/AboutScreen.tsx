import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Linking,
    Button
} from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from '../styles/AboutScreenStyles';

const AboutScreen = () => {
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState<string[]>([]);

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            setAllComments([...allComments, comment.trim()]);
            setComment('');
        }
    };
    const mapUrl = "https://maps.app.goo.gl/PC94zMFoEisZFJQYA";

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>What People Say About Us</Text>

            {/* Sample Reviews */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.reviewsRow}>
                <View style={styles.reviewCard}>
                    <Text style={styles.reviewer}>Anirban Chakraborty ⭐ 4.5</Text>
                    <Text>All over is good 👍 and the atmosphere is the best in the city...</Text>
                </View>
                <View style={styles.reviewCard}>
                    <Text style={styles.reviewer}>Ruksa Sultana ⭐ 5</Text>
                    <Text>Service was so good, they are so kind and polite.. must visit!</Text>
                </View>
                <View style={styles.reviewCard}>
                    <Text style={styles.reviewer}>Buddhadeb Mondal ⭐ 5</Text>
                    <Text>Best place for chill and enjoy.</Text>
                </View>
            </ScrollView>

            {/* Google Maps Location */}
            <Text style={styles.heading}>Our Location</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Open in Google Maps"
                    onPress={() => Linking.openURL(mapUrl)}
                />
            </View>

            {/* Contact Info */}
            <View style={styles.contact}>
                <Text style={styles.contactText}>📞 +91-9046241021</Text>
                <Text
                    style={styles.contactText}
                    onPress={() => Linking.openURL('mailto:skyreelscafe72@gmail.com')}
                >
                    📧 skyreelscafe72@gmail.com
                </Text>
            </View>

            {/* Comment Box */}
            <Text style={styles.heading}>Leave a Comment</Text>
            <TextInput
                style={styles.commentBox}
                placeholder="Write your comment..."
                value={comment}
                onChangeText={setComment}
                multiline
            />
            <TouchableOpacity style={styles.commentButton} onPress={handleAddComment}>
                <Text style={styles.commentButtonText}>Submit</Text>
            </TouchableOpacity>

            {/* Show Comments */}
            {allComments.length > 0 && (
                <View style={styles.commentsSection}>
                    <Text style={styles.commentsHeader}>Comments:</Text>
                    {allComments.map((msg, idx) => (
                        <Text key={idx} style={styles.commentItem}>
                            • {msg}
                        </Text>
                    ))}
                </View>
            )}

            {/* Footer icons */}
            <View style={styles.footer}>
                <Text>Follow us:</Text>
                <View style={styles.iconRow}>
                    <Text>🌐</Text>
                    <Text>📘</Text>
                    <Text>📸</Text>
                    <Text>🐦</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default AboutScreen;