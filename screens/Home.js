import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
const catImageUrl = "data:image/jpeg;base64,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";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
           
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                        borderRadius: 50,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: '#B6D0E2',
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 70,
            width: 70,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });