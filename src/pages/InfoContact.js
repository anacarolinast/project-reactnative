import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "@rneui/base";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";
import styles from "../styles/styles";

const InfoContact = ({ route }) => {
  const { contact } = route.params;
  const navigation = useNavigation();

  const handleNavigateToContacts = () => {
    navigation.navigate("Contacts");
  };

  const handleNavigateToEditContact = () => {
    navigation.navigate("EditContact", { contact });
  };

  const handleDeleteContact = async () => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${contact.id}`);
      navigation.navigate("Contacts");
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <HiArrowLeft
          size={24}
          style={{
            color: "white",
            cursor: "pointer",
            position: "absolute",
            left: 16,
            top: 16,
          }}
          onClick={handleNavigateToContacts}
        />
        <Avatar
          rounded
          source={{
            uri: contact.avatar ? contact.avatar : null,
          }}
          size={108}
          activeOpacity={0.7}
          containerStyle={{
            marginTop: 24,
            marginBottom: 16,
            backgroundColor: contact.avatar ? undefined : generateRandomColor(),
          }}
        />

        <Text style={styles.textContact}>{contact.name}</Text>
        <Text style={styles.infoContact}>{contact.phone}</Text>
        <Text style={styles.infoContact}>{contact.email}</Text>
        <Button
          title="Alterar"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.firstButton}
          titleStyle={styles.buttonText}
          onPress={handleNavigateToEditContact}
        />
        <Button
          title="Excluir"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.secondButton}
          titleStyle={styles.buttonText}
          onPress={handleDeleteContact}
        />
      </View>
    </View>
  );
};

export default InfoContact;
