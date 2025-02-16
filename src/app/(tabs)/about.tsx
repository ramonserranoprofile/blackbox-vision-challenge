import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>About the Game</ThemedText>
            <ThemedView style={styles.rulesContainer}>
                <ThemedText style={styles.ruleTitle}>📜 Game Rules:</ThemedText>
                <ThemedText >
                    ✅ True/False questions: 5 points
                </ThemedText>
                <ThemedText>
                    ✅ Multiple-choice questions: 10 points
                </ThemedText>
                <ThemedText>
                    🎯 Try to score the maximum points and prove your knowledge!
                </ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
    },
    rulesContainer: {        
        padding: 20,
        borderRadius: 10,
        elevation: 3,
    },
    ruleTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    ruleText: {
        fontSize: 18,
        marginBottom: 5,
    },
});
