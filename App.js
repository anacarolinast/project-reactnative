import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Avatar } from "react-native-elements"; 
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textH1}>Cadastre-se</Text>
      <Text style={styles.textH2}>Olá! Digite suas informações abaixo...</Text>
      <View style={styles.inputWrapper}>
        <Input
          placeholder='Nome'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder='E-mail'
          leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='black'
            />
          }
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder='Senha'
          secureTextEntry={true}
          type='password'
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
            />
          }
          containerStyle={styles.inputContainer}
        />
      </View>
      <Button
        title="Cadastrar"
        type="outline"
      />
    </View>
  );
};

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textH1}>Login</Text>
      <Text style={styles.textH2}>Olá! Digite suas informações de login...</Text>
      <Avatar size={120} rounded icon={{ name: 'user' }} containerStyle={styles.avatar} />
      <View style={styles.inputWrapper}>
        <Input
          placeholder='E-mail'
          leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='black'
            />
          }
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder='Senha'
          secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
            />
          }
          containerStyle={styles.inputContainer}
        />
      </View>
      <Button
        title="Entrar"
        type="outline"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textH1: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 12,
  },
  textH2: {
    fontSize: 12,
    paddingBottom: 24
  },
  inputWrapper: {
    width: '40%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12
  },
  avatar: {
    backgroundColor: 'gray',
    marginBottom: 72
  }
});

export default Login;
