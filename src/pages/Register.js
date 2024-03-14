import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import styles from "../styles/styles";
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import app from '../../firebase';

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    };

    const handleRegister = () => {
        if (name && cpf && email && password) {
            const auth = getAuth(app);
            fetchSignInMethodsForEmail(auth, email)
                .then((signInMethods) => {
                    if (signInMethods && signInMethods.length > 0) {
                        console.error("O email já está em uso");
                        alert("O email já está em uso");
                    } else {
                        createUserWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                navigation.navigate('Login');
                            })
                            .catch((error) => {
                                console.error("Erro ao registrar:", error.message);
                                alert("E-mail em uso");
                            });
                    }
                })
                .catch((error) => {
                    console.error("Erro ao verificar o email:", error.message);
                    alert("Erro ao verificar o email: " + error.message);
                });
        } else {
            console.log("Por favor, preencha todos os campos");
            alert("Por favor, preencha todos os campos");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.textH1}>Registre-se</Text>
                <Text style={styles.textH2}>
                    Olá! Digite seus dados abaixo...
                </Text>
                <Input
                    placeholder="Nome"
                    containerStyle={styles.inputContainer}
                    inputContainerStyle={styles.input}
                    placeholderTextColor="white"
                    inputStyle={{ color: "white" }}
                    value={name}
                    onChangeText={setName}
                />
                <Input
                    placeholder="CPF"
                    containerStyle={styles.inputContainer}
                    inputContainerStyle={styles.input}
                    placeholderTextColor="white"
                    inputStyle={{ color: "white" }}
                    value={cpf}
                    onChangeText={setCpf}
                />
                <Input
                    placeholder="E-mail"
                    containerStyle={styles.inputContainer}
                    inputContainerStyle={styles.input}
                    placeholderTextColor="white"
                    inputStyle={{ color: "white" }}
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                    containerStyle={styles.inputContainer}
                    inputContainerStyle={styles.input}
                    placeholderTextColor="white"
                    inputStyle={{ color: "white" }}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    title="Registrar"
                    type="outline"
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.firstButton}
                    titleStyle={styles.buttonText}
                    onPress={handleRegister}
                />
                <Button
                    title="Já tem conta? Faça login!"
                    type="outline"
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.secondButton}
                    titleStyle={styles.buttonText}
                    onPress={handleNavigateToLogin}
                />
            </View>
        </View>
    );
};

export default Register;
