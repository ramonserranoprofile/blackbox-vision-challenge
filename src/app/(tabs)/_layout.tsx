import { Tabs, Stack } from 'expo-router';

export default function TabsLayout() {
    return (
        <Stack>
        <Tabs.Screen name="question/index" options={{ title: 'Questions', headerLeft: () => <></>, }} />
        <Tabs.Screen name="results/index" options={{ title: 'Results', headerLeft: () => <></>, }} />
        </Stack>
    );
}