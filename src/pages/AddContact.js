import React, { useState } from "react";
import { View, Text } from "react-native";
import { Avatar, Button } from "@rneui/base";
import { Input } from "react-native-elements";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const AddContact = () => {
  const navigation = useNavigation();

  const handleNavigateToContacts = () => {
    navigation.navigate('Contacts');
};

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textH1}>Adicionar contato</Text>
        <Text style={styles.textH2}>
          Digite as informações do contato abaixo...
        </Text>
        <Avatar
          size={96}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#610BD9", marginBottom: 24 }}
        />
        <Input
          placeholder="Nome"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
        />
        <Input
          placeholder="Telefone"
          secureTextEntry={true}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
        />
        <Input
          placeholder="E-mail"
          secureTextEntry={true}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
        />
        <Button
          title="Cancelar"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.firstButton}
          titleStyle={styles.buttonText}
          onPress={handleNavigateToContacts}
        />
        <Button
          title="Salvar"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.secondButton}
          titleStyle={styles.buttonText}
          onPress={handleNavigateToContacts}
        />
      </View>
    </View>
  );
};

export default AddContact;
