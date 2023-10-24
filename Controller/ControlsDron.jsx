import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const ControlsDron = () => {

    const handleBottonPress = (direccion) => {
        console.log(`Boton ${direccion} presionado`);
    }

    return (
        <View style={styles.conteiner}>
            {/*Boton de flecha con icono arriba*/}
            <TouchableOpacity style={[styles.botonFlecha, styles.arrowDonw]}
            onPress={() => handleBottonPress('Arriba')}>
                <Icon name='arrow-up' size={24}></Icon>
            </TouchableOpacity>
            {/*Boton de flecha con icono abajo*/}
            <TouchableOpacity style={[styles.botonFlecha, styles.arrowUp]}
            onPress={() => handleBottonPress('Abajo')}>
                <Icon name='arrow-down' size={24}></Icon>
            </TouchableOpacity>
            {/*Boton de flecha con icono izquierda*/}
            <TouchableOpacity style={[styles.botonFlecha, styles.arrowRight]}
            onPress={() => handleBottonPress('Izquierda')}>
                <Icon name='arrow-left' size={24}></Icon>
            </TouchableOpacity>
            {/*Boton de flecha con icono derecha*/}
            <TouchableOpacity style={[styles.botonFlecha, styles.arrowLeft]}
            onPress={() => handleBottonPress('Derecha')}>
                <Icon name='arrow-right' size={24}></Icon>
            </TouchableOpacity>

            {/*Boton de flecha para subir dron*/}
            <TouchableOpacity style={[styles.botonFlecha, styles.arrowUpDron]}
            onPress={() => handleBottonPress('Subir')}>
                <Icon name='arrow-up' size={24}></Icon>
            </TouchableOpacity>
            {/*Boton de flecha para bajar dron*/}
            <TouchableOpacity style={[styles.botonFlecha, styles.arrowDonwDron]}
            onPress={() => handleBottonPress('Bajar')}>
                <Icon name='arrow-down' size={24}></Icon>
            </TouchableOpacity>

            <StatusBar style='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        position: 'absolute',
        bottom: 110,//20
        right: 70,//20
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    botonFlecha: {
        backgroundColor: '#DDDDDD',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    arrowUp: {//Abajo
        position: 'absolute',
        top: 50,
        right: -5,
    },
    arrowDonw: {//Arriba
        position: 'absolute',
        bottom: -10,
    },
    arrowLeft: {//Derecha
        position: 'absolute',
        left: 0,
    },
    arrowRight: {//Izquierda
        position: 'absolute',
        right: 50,
    },
    arrowUpDron: {
        position: 'absolute',
        bottom: 0,
        right: 250,
    },
    arrowDonwDron: {
        position: 'absolute',
        bottom: -70,
        right: 250,
    }
});

export default ControlsDron;