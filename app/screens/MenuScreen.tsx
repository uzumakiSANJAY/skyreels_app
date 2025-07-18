import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/MenuStyles'; // Adjust if your styles file is different
import MenuSection from '../components/MenuSection'; // Adjust path if needed
import logo from '../assets/logo.png'; // Replace with your actual path

const MenuScreen = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const menuPages = [
        [
            {
                title: 'Tea & Coffee',
                items: [
                    { name: 'Black Tea', price: 20 },
                    { name: 'Masala Action Tea', price: 25 },
                    { name: 'Raw Melon Tea', price: 25 },
                    { name: 'Milk Tea', price: 20 },
                    { name: 'Signature Milk Tea', price: 30 },
                    { name: 'English Milk Tea', price: 30 },
                    { name: 'Green Tea', price: 25 },
                    { name: 'Assorted Wellness Tea', price: 30 },
                    { name: 'Lemon Honey Tea', price: 25 },
                    { name: 'California Black Coffee', price: 30 },
                    { name: 'English Milk Coffee', price: 50 },
                    { name: 'Chocolate Milk Coffee', price: 30 },
                ],
            },
        ],
        [
            {
                title: 'Mocktails',
                items: [
                    { name: 'Virgin Mojito', price: 99 },
                    { name: 'Watermelon Mojito', price: 110 },
                    { name: 'Strawberry Mojito', price: 120 },
                    { name: 'Sky Lagoon', price: 99 },
                    { name: 'Blackberry', price: 99 },
                    { name: 'Kiwi Martini', price: 99 },
                    { name: 'Pink Sea', price: 99 },
                    { name: 'Spicy Guava', price: 120 },
                    { name: 'On The Beach', price: 120 },
                    { name: 'Green River', price: 110 },
                    { name: 'Good Boy', price: 110 },
                    { name: 'Good Girl', price: 110 },
                ],
            },
        ],
        [
            {
                title: 'Main Course (Mutton)',
                items: [
                    { name: 'Mutton Kosa (3pcs)', price: 310 },
                    { name: 'Mutton Curry (3pcs)', price: 310 },
                    { name: 'Mutton Do Pyaza (3pcs)', price: 340 },
                    { name: 'Mutton Handi (3pcs)', price: 370 },
                ],
            },
        ],
        [
            {
                title: 'Dessert',
                items: [
                    { name: 'Vanilla Rasmalai', price: 150 },
                    { name: 'Gangaram Gulab Jamun (3pcs)', price: 50 },
                ],
            },
        ],
    ];

    const goNext = () => {
        if (currentPage < menuPages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goPrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>Sky Reels Cafe 72</Text>
            </View>

            {menuPages[currentPage].map((section, index) => (
                <MenuSection
                    key={index}
                    title={section.title}
                    items={section.items}
                />
            ))}

            <View style={styles.pagination}>
                <TouchableOpacity
                    onPress={goPrev}
                    disabled={currentPage === 0}
                    style={styles.navButton}
                >
                    <Text style={{ color: currentPage === 0 ? '#ccc' : '#000' }}>
                        ◀ Prev
                    </Text>
                </TouchableOpacity>

                <Text style={styles.pageIndicator}>
                    Page {currentPage + 1} of {menuPages.length}
                </Text>

                <TouchableOpacity
                    onPress={goNext}
                    disabled={currentPage === menuPages.length - 1}
                    style={styles.navButton}
                >
                    <Text
                        style={{
                            color: currentPage === menuPages.length - 1 ? '#ccc' : '#000',
                        }}
                    >
                        Next ▶
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MenuScreen;