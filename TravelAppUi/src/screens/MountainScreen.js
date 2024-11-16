import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function MountainScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../../assets/images/Mountain.jpg")} // Đảm bảo có ảnh tại đường dẫn này
            style={styles.background}
            resizeMode="cover"
        >
            {/* Nút quay lại */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <View style={styles.overlay}>
                <Text style={styles.title}>Khám phá những ngọn núi</Text>
                <Text style={styles.description}>
                    Khám phá những khung cảnh ngoạn mục, không khí trong lành và những con đường yên tĩnh trên núi.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Khám phá thêm</Text>
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
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ cho nút quay lại
        padding: 10,
        borderRadius: 30,
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Hiệu ứng nền mờ
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
        backgroundColor: "#228B22", // Màu xanh lá đậm, phù hợp với núi
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
