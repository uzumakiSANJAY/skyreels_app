// src/components/MenuSection.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MenuItem = {
    name: string;
    price: number;
};

interface MenuSectionProps {
    title: string;
    items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.itemRow}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.priceText}>₹{item.price}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#FFD700',
        paddingBottom: 6,
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
    },
    itemText: {
        fontSize: 16,
        color: '#FDFE00',
        flex: 1,
        flexWrap: 'wrap',
    },
    priceText: {
        fontSize: 16,
        color: '#FDFE00',
        marginLeft: 10,
    },
});

export default MenuSection;