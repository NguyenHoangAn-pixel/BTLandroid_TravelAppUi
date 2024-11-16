import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Hoặc sử dụng thư viện icon bạn đang dùng

export default function BeachScreen() {
    const navigation = useNavigation(); // Sử dụng hook để điều hướng

    return (
        <ImageBackground
            source={require("../../assets/images/Ocean.jpg")} // Đảm bảo bạn có hình ảnh tại đường dẫn này
            style={styles.background}
            resizeMode="cover"
        >
            {/* Nút mũi tên quay lại */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <View style={styles.overlay}>
                <Text style={styles.title}>Chào mừng đến thiên đường</Text>
                <Text style={styles.description}>
                    Hãy tận hưởng vẻ đẹp yên bình của bãi biển. Cảm nhận sóng biển, làn gió và ánh nắng ấm áp trên làn da bạn.
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
        top: 50, // Khoảng cách từ phía trên (tùy chỉnh theo thiết bị)
        left: 20, // Khoảng cách từ phía trái
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ để nút nổi bật hơn
        padding: 10,
        borderRadius: 30, // Nút tròn
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Hiệu ứng mờ cho overlay
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
        backgroundColor: "#FFA500",
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
