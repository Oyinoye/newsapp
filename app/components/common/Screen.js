import React from 'react';
import { StyleSheet, StatusBar, Text, ScrollView } from 'react-native';

const Screen = ({ children, isSearchFocused }) => {
    const keyboardShouldPersistTaps = isSearchFocused? 'always' : 'never';
    return (
        <ScrollView keyboardShouldPersistTaps={keyboardShouldPersistTaps} scrollEnabled={!isSearchFocused} style={styles.container}>
            {children}
            {/* <Text>Check it out</Text> */}
        </ScrollView>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1,
    }
})
