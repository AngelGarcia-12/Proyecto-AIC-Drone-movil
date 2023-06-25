import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const ControlsDron = () => {
    return (
        <View style={styles.conteiner}>
            <StatusBar style='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default ControlsDron;