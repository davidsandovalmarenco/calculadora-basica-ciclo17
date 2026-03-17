import { StyleSheet } from "react-native";

export const calculateStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
    },
    buttonGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
        gap: 10,
    },
    opButton: {
        flex: 1,
        minWidth: "40%",
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#007BFF",
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    opButtonActive: {
        backgroundColor: "#007BFF",
    },
    opButtonText: {
        fontSize: 16,
        color: "#007BFF",
        fontWeight: "600",
    },
    opButtonTextActive: {
        color: "#fff",
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 15,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        elevation: 2, // shadow for android
        shadowColor: "#000", // shadow for ios
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    resultLabel: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: "bold",
        color: "#28a745",
    },
});