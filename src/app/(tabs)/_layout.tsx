import { Tabs, Stack } from 'expo-router';

export default function TabsLayout() {
    return (
        <Stack>
        <Tabs.Screen name="question/index" options={{ title: 'Go Back' }} />
        <Tabs.Screen name="results/index" options={{ title: 'Go Back' }} />
        </Stack>
    );
}