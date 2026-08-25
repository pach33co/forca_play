import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

import "./../global.css"
import { styles } from "@/shared/styles/Styles";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded, error] = useFonts({
        PoppinsRegular: require("./../../assets/fonts/Poppins/Poppins-Regular.ttf"),
        PoppinsBold: require("./../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Stack
        screenOptions={{
            headerTintColor: styles.colors.text,
            contentStyle: {
                backgroundColor: styles.colors.background
            },
            headerStyle: {
                backgroundColor: styles.colors.paper
            },
            headerTitleStyle: {
                color: styles.colors.text,
                fontFamily: styles.fonts.family.bold
            },
        }}
        >
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="matches/MatchDetail"
            />
        </Stack>
    )
}