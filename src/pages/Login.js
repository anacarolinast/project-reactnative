import React, { useState } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Button } from '@rneui/themed';
import styles from "../styles/styles";
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    };

    const handleLogin = () => {
        if (email && password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigation.navigate('Contacts');
                })
                .catch((error) => {
                    console.error("Erro ao logar");
                    alert("Credenciais incorretas");
                });
        } else {
            console.log("Por favor, preencha todos os campos");
            alert("Por favor, preencha todos os campos");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.textH1}>Login</Text>
                <Text style={styles.textH2}>
                    Seja bem-vindo! Digite suas informações abaixo...
                </Text>
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
                    title="Entrar"
                    type="outline"
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.firstButton}
                    titleStyle={styles.buttonText}
                    onPress={handleLogin}
                />
                <Button
                    title="Não tem conta? Registre-se!"
                    type="outline"
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.secondButton}
                    titleStyle={styles.buttonText}
                    onPress={handleNavigateToRegister}
                />
            </View>
        </View>
    );
};

export default Login;