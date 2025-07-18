import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    reviewsRow: {
        flexDirection: 'row',
    },
    reviewCard: {
        backgroundColor: '#f4f4f4',
        padding: 12,
        marginRight: 10,
        borderRadius: 10,
        width: 250,
    },
    reviewer: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contact: {
        marginVertical: 20,
        alignItems: 'center',
    },
    contactText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#0000EE',
    },
    commentBox: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: 10,
    },
    commentButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20,
    },
    commentButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    commentsSection: {
        marginBottom: 20,
    },
    commentsHeader: {
        fontWeight: 'bold',
        marginBottom: 6,
    },
    commentItem: {
        fontSize: 14,
        marginBottom: 4,
    },
    footer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    iconRow: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
});