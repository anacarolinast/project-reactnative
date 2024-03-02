import React from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Button } from '@rneui/themed';
import styles from "../styles/styles";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    };

    const handleNavigateToContacts = () => {
        navigation.navigate('Contacts');
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
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                    containerStyle={styles.inputContainer}
                    inputContainerStyle={styles.input}
                    placeholderTextColor="white"
                    inputStyle={{ color: "white" }}
                />
                <Button
                    title="Entrar"
                    type="outline"
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.firstButton}
                    titleStyle={styles.buttonText}
                    onPress={handleNavigateToContacts}
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