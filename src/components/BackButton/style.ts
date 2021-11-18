import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    blueContainer: {
        width: "100%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingBottom: "4%"
    },
    buttonArea: {
        flexDirection: "row",
        width: "10%",
        height: "30%",
        marginLeft: "5%",
        alignItems: "center",
        justifyContent: "center",
    },
    blueButtonArea: {
        flexDirection: "row",
        width: "10%",
        height: "45%",
        marginLeft: "3.5%",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        width: "85%",
        height: "100%",
        fontSize: 18,
        color: "#5B5B5F",
        fontWeight: "700",
        textAlignVertical: "center"
    },
    button: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})