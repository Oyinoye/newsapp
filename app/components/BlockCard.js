import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from './Title';
import Subtitle from './Subtitle';

const BlockCard = ({ style, imageStyle, item }) => {
    const {thumbnail, title, desc} = item;

    return (
        <View style={[styles.container, style]}>
            <View style={styles.contentContainer}>
                {/* <Image source={require('../../assets/emmanuel-idusuyi-surrealism-final-2.jpg')} style={[styles.image, imageStyle]} /> */}
                <Image source={{uri: thumbnail}} style={[styles.image, imageStyle]} />
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}

export default BlockCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        padding: 5,
    },
})
