import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "@rneui/base";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import { HiArrowLeft } from "react-icons/hi";

const InfoContact = () => {
  const navigation = useNavigation();

  const handleNavigateToContacts = () => {
    navigation.navigate("Contacts");
  };

  const handleEditContact = () => {};

  const handleDeleteContact = () => {};

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
            uri: "https://i.pinimg.com/564x/5b/85/88/5b858820503fcd29328779aef516a1b3.jpg",
          }}
          size={96}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 24 }}
        />
        <Text style={styles.textH1}>Angus Young</Text>
        <Text style={styles.infoContact}>(81) 99902-0943</Text>
        <Text style={styles.infoContact}>angusyoung@gmail.com</Text>
        <Button
          title="Alterar"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.firstButton}
          titleStyle={styles.buttonText}
          onPress={handleNavigateToContacts}
        />
        <Button
          title="Excluir"
          type="outline"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.secondButton}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default InfoContact;
