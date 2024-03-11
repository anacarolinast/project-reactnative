import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem, Avatar, SearchBar } from "@rneui/base";
import { HiOutlineDotsVertical, HiOutlinePlus } from "react-icons/hi";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "react-native-svg";
import styles from "../styles/styles";

const Contacts = () => {
  const navigation = useNavigation();

  const handleNavigateToAddContact = () => {
    navigation.navigate("AddContact");
  };

  const handleNavigateToInfoContact = (contact) => {
    navigation.navigate("InfoContact", { contact });
  };

  const [value, setValue] = useState("");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Angus Young",
      avatar:
        "https://i.pinimg.com/564x/5b/85/88/5b858820503fcd29328779aef516a1b3.jpg",
    },
    {
      id: 2,
      name: "David Bowie",
      avatar:
        "https://ffw.uol.com.br/app/uploads/noticias/2016/01/tumblr-n1u1brlnds1qlcugro1-1280.jpg",
    },
    {
      id: 3,
      name: "Jimmy Page",
    },
    {
      id: 4,
      name: "Sheryl Crow",
    },
    {
      id: 5,
      name: "Stevie Nicks",
      avatar:
        "https://i2-prod.mirror.co.uk/incoming/article12600089.ece/ALTERNATES/s1200b/Stevie-Nicks.jpg",
    },
  ]);

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleValue = (text) => {
    setValue(text);
  };

  const handleAddContact = () => {};

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleEditContact = (contactId) => {};

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textH1}>Meus contatos</Text>
        <Text style={styles.textH2}>Encontre seus contatos aqui!</Text>
        <View style={styles.options}>
          <HiOutlinePlus
            style={{ color: "white", cursor: "pointer" }}
            size={24}
            onClick={handleNavigateToAddContact}
          />
          <HiOutlineDotsVertical style={{ color: "white" }} size={24} />
        </View>
        <SearchBar
          platform="android"
          containerStyle={{ backgroundColor: "transparent", width: "90%" }}
          inputContainerStyle={{ color: "white" }}
          inputStyle={{
            color: "white",
            borderBottomWidth: 1,
            borderBottomColor: "white",
          }}
          leftIconContainerStyle={{ color: "white" }}
          cancelIcon={{ color: "white" }}
          clearIcon={{ color: "white" }}
          searchIcon={{ color: "white" }}
          loadingProps={{}}
          onChangeText={(newVal) => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Procurar..."
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          value={value}
        />

        <FlatList
          style={styles.flatList}
          data={contacts}
          renderItem={({ item }) => (
            <ListItem
              friction={90}
              tension={100}
              activeScale={0.95}
              linearGradientProps={{
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              ViewComponent={LinearGradient}
              containerStyle={{ backgroundColor: "transparent" }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 16,
                  cursor: "pointer",
                }}
                onClick={handleNavigateToInfoContact}
              >
                {item.avatar ? (
                  <Avatar
                    rounded
                    source={{ uri: item.avatar }}
                    size={48}
                    activeOpacity={0.7}
                  />
                ) : (
                  <Avatar
                    rounded
                    title={item.name.charAt(0)}
                    size={48}
                    activeOpacity={0.7}
                    containerStyle={{
                      backgroundColor: generateRandomColor(),
                    }}
                  />
                )}
                <ListItem.Content>
                  <ListItem.Title
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    {item.name}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="white" size={24} />
              </View>
            </ListItem>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};
export default Contacts;
