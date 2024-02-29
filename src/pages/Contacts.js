import React from "react";
import { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Button, SearchBar } from '@rneui/themed';
import styles from "../styles/styles";
import { useNavigation } from '@react-navigation/native';

const Contacts = () => {
    const navigation = useNavigation();

    const [value, setValue] = useState("");
    const updateValue = (value) => {
        setSearchText(searchText);
    };

    const [contacts, setContacts] = useState([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Bob Johnson" },
    ]);

    const handleValue = (text) => {
        setSearchText(text);
    };

    const handleAddContact = () => {
    };

    const handleDeleteContact = (contactId) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
    };

    const handleEditContact = (contactId) => {
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.textH1}>Meus contatos</Text>
                <Text style={styles.textH2}>
                    Encontre seus contatos aqui!
                </Text>
                <Button
                    title="+ Add Contact"
                    onPress={handleAddContact}
                />

                <FlatList
                    data={contacts}
                    renderItem={({ item }) => (
                        <View style={styles.contactItem}>
                            <Text>{item.name}</Text>
                            <Button
                                title="Delete"
                                onPress={() => handleDeleteContact(item.id)}
                            />
                            <Button
                                title="Edit"
                                onPress={() => handleEditContact(item.id)}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};
export default Contacts;
