import { Tabs, Stack } from 'expo-router';

export default function TabsLayout() {
    return (
        <Stack>
        <Tabs.Screen name="question" options={{ title: ' Question' }} />
        <Tabs.Screen name="results" options={{ title: 'Results' }} />
        </Stack>
    );
}