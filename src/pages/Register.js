import React, { useState } from "react";
import { Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import styles from "../styles/styles";
import { useNavigation } from '@react-navigation/native';

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
            navigation.navigate('Contacts');
        } else {
            console.log("Por favor, preencha todos os campos");
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
