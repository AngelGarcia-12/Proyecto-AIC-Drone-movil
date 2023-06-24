import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

const RegisterForm = () => {
    //Campos para el formulario
    const [nombre, setNombre] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        //Acciones con los datos (enviar datos, guardar)
        if(!nickname || !password){
            setError("El nombre de usuario o password no ha sido completado, por favor llene los campos correspondientes");
        }
        else{
            setError('');
            console.log('Nombre: ' + nombre);
            console.log('Nickname: ' + nickname);
            console.log('Password: ' + password);
            console.log('Telefono: ' + telefono);
            console.log('Ubicacion: ' + ubicacion);
        }
    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.titulo}>AIC-Drone</Text>
            <Image source={require('./img/logodron.png')}></Image>

            <TextInput style={styles.textInput}
            placeholder='nombre'
            value={nombre}
            onChangeText={setNombre}
            />
            <TextInput style={styles.textInput}
            placeholder='nombre de usuario'
            value={nickname}
            onChangeText={setNickname}
            />
            <TextInput style={styles.textInput}
            placeholder='password'
            secureTextEntry = {true}
            value={password}
            onChangeText={setPassword}
            />
            <TextInput style={styles.textInput}
            placeholder='telefono'
            value={telefono}
            onChangeText={setTelefono}
            />
            {/*Combobox para elegir ubicacion*/}
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
            <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                <Text style={styles.textoBoton}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 60,
        color: 'black',
        fontWeight: 'bold',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 25,
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 50,
        marginTop: 20,
    },
    boton: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'gray',
        backgroundColor: "#C92EFF",
        paddingHorizontal: 30,
        padding: 10,
        margin: 15,
    },
    textoBoton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
})

export default RegisterForm;