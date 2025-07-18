import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#061126',
        flex: 1,
        padding: 16,
    },
    logoWrapper: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },

    title: {
        color: '#FFD700',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 8,
    },

    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#FFD700',
        paddingBottom: 4,
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
    },
    itemName: {
        color: '#FDFE00',
        fontSize: 16,
    },
    itemPrice: {
        color: '#FDFE00',
        fontSize: 16,
    },


    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    navButton: {
        padding: 10,
    },
    pageIndicator: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});