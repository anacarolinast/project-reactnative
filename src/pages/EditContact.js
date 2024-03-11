import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from "../styles/styles";

const EditContact = ({ route }) => {
  const { contact } = route.params;
  const navigation = useNavigation();
  const [editedContact, setEditedContact] = useState({ ...contact });

  const handleNavigateToInfoContact = () => {
    navigation.navigate("InfoContact", { contact: editedContact });
  };

  const handleSaveContact = async () => {
    try {
      await axios.put(`http://localhost:3000/contacts/${editedContact.id}`, editedContact);
      navigation.navigate("InfoContact", { contact: editedContact });
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textH1}>Alterar dados</Text>
        <Text style={styles.textH2}>Não se esqueça de salvar!</Text>
        <Input
          placeholder="Nome"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
          value={editedContact.name}
          onChangeText={(text) => setEditedContact({ ...editedContact, name: text })}
        />
        <Input
          placeholder="Telefone"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
          value={editedContact.phone}
          onChangeText={(text) => setEditedContact({ ...editedContact, phone: text })}
        />
        <Input
          placeholder="E-mail"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
          value={editedContact.email}
          onChangeText={(text) => setEditedContact({ ...editedContact, email: text })}
        />
        <Button
          title="Cancelar"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.firstButton}
          titleStyle={styles.buttonText}
          onPress={handleNavigateToInfoContact}
        />
        <Button
          title="Salvar"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.secondButton}
          titleStyle={styles.buttonText}
          onPress={handleSaveContact}
        />
      </View>
    </View>
  );
};

export default EditContact;
