import React, { useState } from "react";
import { View, Text } from "react-native";
import { Avatar, Button } from "@rneui/base";
import { Input } from "react-native-elements";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const AddContact = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");  

  const handleAddContact = async () => {
    try {
      console.log("Adding contact...");
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Email:", email);
  
      if (!name || !phone || !email) {
        console.error("Preencha todos os campos");
        return;
      }
      
      await axios.post("http://localhost:3000/contacts", {
        name: name.toString(), 
        phone: phone.toString(),
        email: email.toString(),
      });
  
      navigation.navigate("Contacts");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
  
  
  const handleNavigateToContacts = () => {
    navigation.navigate("Contacts");
  };

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
          onChangeText={(value) => setName(value)}
        />
        <Input
          placeholder="Telefone"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
          onChange={(value) => setPhone(value)}
        />
        <Input
          placeholder="E-mail"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
          onChangeText={(value) => setEmail(value)}
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
          onPress={handleAddContact}
        />
      </View>
    </View>
  );
};

export default AddContact;
