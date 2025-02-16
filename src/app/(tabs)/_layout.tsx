import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "green",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitle: "QuizBoxVision",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="question/index"
                options={{
                    title: "Questions",
                    headerTitle: "Questions",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "help-circle" : "help-circle"}
                            color={color}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    headerTitle: "About",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "information-circle" : "information-circle"}
                            color={color}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
