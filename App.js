import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Button } from '@rneui/themed';

const Login = () => {
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
        />
        <Button 
          title="Não tem conta? Registre-se!" 
          type="outline" 
          containerStyle={styles.buttonContainer} 
          buttonStyle={styles.secondButton} 
          titleStyle={styles.buttonText} 
        />
      </View>
    </View>
  );
};

const Register = () => {
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
        />
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
          title="Registrar" 
          type="outline" 
          containerStyle={styles.buttonContainer} 
          buttonStyle={styles.firstButton} 
          titleStyle={styles.buttonText} 
        />
        <Button 
          title="Já tem conta? Faça login!" 
          type="outline" 
          containerStyle={styles.buttonContainer} 
          buttonStyle={styles.secondButton} 
          titleStyle={styles.buttonText} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5E17A6",
  },
  textH1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
    paddingBottom: 12,
    color: "white",
  },
  textH2: {
    fontSize: 14,
    paddingBottom: 48,
    color: "white",
  },
  formContainer: {
    width: "30%",
    height: "70%",
    backgroundColor: "#0D0D0D",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 8,
    borderColor: "#610BD9",
  },
  input: {
    borderColor: "#610BD9",
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
    color: "white",
    placeholderTextColor: "white",
  },
  buttonContainer: {
    marginTop: 16,
    width: "75%",
    borderRadius: 16,
  },
  firstButton: {
    backgroundColor: "#6907F2",
    borderWidth: 0
  },
  secondButton: {
    backgroundColor: "#610BD9",
    borderWidth: 0
  },
  buttonText: {
    color: "white",
  },
});

export default Register;