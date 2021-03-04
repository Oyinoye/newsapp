import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from './Title';
import Subtitle from './Subtitle';

const FlatCard = ({ item }) => {
    const {thumbnail, title, desc} = item;

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {/* <Image source={require('../../assets/emmanuel-idusuyi-surrealism-final-2.jpg')} style={[styles.image, imageStyle]} /> */}
                <Image source={{uri: thumbnail}} style={[styles.image]} />
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}

export default FlatCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        height: 80
    },
    image: {
        flex: 0.35,
        height: '100%',
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5
    }
})
