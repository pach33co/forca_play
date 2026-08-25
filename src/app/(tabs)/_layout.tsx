import { styles } from "@/shared/styles/Styles";
import { Tabs } from "expo-router";


export default function Layout() {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: styles.colors.paper
                },
                sceneStyle: {
                    backgroundColor: styles.colors.background,
                },
            }}
        />
    )
}