import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ForestScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../../assets/images/forest.jpg")} // Đảm bảo có ảnh tại đường dẫn này
            style={styles.background}
            resizeMode="cover"
        >
            {/* Nút quay lại */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <View style={styles.overlay}>
                <Text style={styles.title}>Khám phá khu rừng</Text>
                <Text style={styles.description}>
                    Hòa mình vào thiên nhiên xanh tươi và sự yên bình của khu rừng.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Bắt đầu khám phá</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ cho nút
        padding: 10,
        borderRadius: 30,
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ cho nội dung
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        marginHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        fontSize: 18,
        color: "#f0f0f0",
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#006400", // Màu xanh rừng
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});
