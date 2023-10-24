import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';

const LogInForm = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    /*const handlePasswordChange = (text) => {
      setPassword(text);
    };*/

    const handleOpenForm = () => {
        navigation.navigate('Register Form');
    }
    
    const handleOpenControls = () => {
        navigation.navigate('Controls Dron');
    }

    const handleSubmit = () => {
        if(!email || !password){
            setError("El nombre de usuario o password no ha sido introduccido");
        }
        else{
            setError("")
            setEmail('');
            setPassword('');

            console.log("Email: " + email)
            console.log("Password: " + password)

            setEmail('');
            setPassword('');

            //Abrir ventana de controles de dron
            handleOpenControls();
        }
    }

    return (
        <View style={styles.mainConteiner}>
            {/*Contenedor del head o parte superior*/}
            
            <View style={styles.conteiner}>
                <Text style={styles.titulo}>AIC-Drone</Text>
                <Image source={require('./img/logodron.png')}></Image>
                <Text style={styles.subtitulo}>Log in to your account</Text>
                <TextInput placeholder='user@email.com' 
                style={styles.textInput} 
                keyboardType='email-address'
                onChangeText={setEmail}
                />
                <TextInput placeholder='password' 
                style={styles.textInput} 
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}/>
                {/* Boton de Login <TouchableOpacity></TouchableOpacity>*/}
                {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
                <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                    <Text style={styles.textoBoton}>Log in</Text>
                </TouchableOpacity>
                <StatusBar style='auto'/>
                <TouchableOpacity onPress={handleOpenForm}>
                    <Text>Crea tu cuenta aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainConteiner: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    conteiner: {
        alignContent: 'center',
        alignItems: 'center',
    },
    head: {
        flex: 1,
        alignContent: 'flex-start',
        marginBottom: 300,
        borderColor: 'black',
        borderWidth: 2,
    },
    titulo: {
        fontSize: 60,
        color: 'black',
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 20,
        color: 'gray',
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
});

export default LogInForm;