import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image } from 'react-native';

const DATA = [
    {
        id: '1',
        name: 'Arjun',
        dob: '16-11-2000',
        role: 'Software Engineer',
    },
    {
        id: '2',
        name: 'Mukesh',
        dob: '15-09-2000',
        role: 'Web Developer',
    },
    {
        id: '3',
        name: 'Siddiq',
        dob: '03-01-2001',
        role: 'Web App Developer',
    },
    {
        id: '4',
        name: 'Hussain',
        dob: '03-10-2000',
        role: 'Web Developer',
    },
    {
        id: '5',
        name: 'Haneef',
        dob: '05-6-1999',
        role: 'Software Engineer',
    },
    {
        id: '6',
        name: 'Hema',
        dob: '16-12-1997',
        role: 'Devops Engineer',
    },
    {
        id: '7',
        name: 'Ravi',
        dob: '24-6-1996',
        role: 'Cloud Engineer',
    },
    {
        id: '8',
        name: 'Gurunath',
        dob: '21-7-1994',
        role: 'Devops Engineer',
    },
    {
        id: '9',
        name: 'Shekhar',
        dob: '21-3-1992',
        role: 'Full Stack Developer',
    },
    {
        id: '10',
        name: 'Javeed',
        dob: '21-5-1999',
        role: 'Tester',
    },
    {
        id: '11',
        name: 'Supraja',
        dob: '13-12-2001',
        role: 'Tester',
    },
];

const Item = ({ id, name, dob, role, cardNumber }) => {
    const isOdd = cardNumber % 2 !== 0;
    const cardStyle = isOdd ? styles.leftCard : styles.rightCard;

    return (
        <View style={[styles.item, cardStyle]}>
            <View style={styles.cardNumberContainer}>
                <Text style={styles.cardNumberText}>{cardNumber}</Text>
            </View>
            <Text style={styles.id}>EMP ID:   {id}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Text style={[styles.title, { color: '#fff' }]}>Name:  </Text>
                <Text style={{ marginLeft: 5, color: '#fff' }}>{name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Text style={[styles.details, { color: '#fff' }]}>DOB :   </Text>
                <Text style={{ marginLeft: 5, color: '#FFA500' }}>{dob}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <Text style={[styles.details, { color: '#fff' }]}>Role :   </Text>
                <Text style={{ marginLeft: 5, color: '#00FF00' }}> {role}</Text>
            </View>
        </View>
    );
};

const Profile = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(DATA);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = DATA.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(filtered);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./assets/mlogo.png')} style={styles.logoText} />
                <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search with name"
                    placeholderTextColor="white"
                    onChangeText={handleSearch}
                    value={searchQuery}
                />
                <Image source={require('./assets/search.png')} style={styles.searchIcon} />
            </View>
            <FlatList
                data={filteredData}
                renderItem={({ item, index }) => <Item id={item.id} name={item.name} dob={item.dob} role={item.role} cardNumber={index + 1} />}
                keyExtractor={item => item.id}
            />

            <View style={styles.imageTopRight}>
                <Image source={require('./assets/care.png')} style={styles.imageTopRight} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Dark theme background color
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        margin: 100
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        margin: 10,
        borderRadius: 30,
        width: '90%',

    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        color: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#1a1a1a', // Dark theme top bar color
    },
    logo: {
        color: '#fff', // Logo text color
        fontSize: 24,
    },
    searchBar: {
        flex: 1,
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        textAlign: 'center', // Align text in the middle horizontally
        justifyContent: 'center', // Align text in the middle vertically
        alignItems: 'center', // Align text in the middle vertically
    },
    item: {
        backgroundColor: '#222',
        padding: 40,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 20
    },
    id: {
        color: '#fff',
    },
    title: {
        fontSize: 16,

    },
    details: {
        fontSize: 16,
    },
    imageTopRight: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        zIndex: 999, // Ensure it's above other elements
    },
    cardNumberContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#5E5E5E82',
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5, // Add border width
        borderColor: '#000', // Set border color to black
        zIndex: 1, // Ensure it's above other elements
    },
    cardNumberText: {
        color: 'white',
    },
    numberText: {
        color: 'white',
        fontSize: 14,
        position: 'absolute',
        top: -8, // Adjust this value to position the number properly
        right: 30, // Adjust this value to position the number properly
        backgroundColor: 'green',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure it's above other elements
        textAlign: 'center'
    },
    leftCard: {
        alignSelf: 'flex-start',
        marginRight: 'auto',
        //marginLeft: 40,
        width: "85%"
    },
    rightCard: {
        alignSelf: 'flex-end',
        marginLeft: 'auto',
        //marginRight: 50,
        width: "85%"
    },
});

export default Profile;
