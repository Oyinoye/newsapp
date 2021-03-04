import React from 'react';
import { StyleSheet, View } from 'react-native'
import BlockCard from './BlockCard';

const FeaturedNews = ({item}) => {
    return (
        <BlockCard item={item} style={{ marginVertical: 15 }} />
    )
}

export default FeaturedNews;

const styles = StyleSheet.create({
    container: {}
})
