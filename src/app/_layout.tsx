import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

import "./../global.css"
import { styles } from "@/shared/styles/Styles";
import { CustomHeader } from "@/shared/components/CustomHeader";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded, error] = useFonts({
        PoppinsRegular: require("./../../assets/fonts/Poppins/Poppins-Regular.ttf"),
        PoppinsBold: require("./../../assets/fonts/Poppins/Poppins-Bold.ttf"),
        PoppinsItalic: require("./../../assets/fonts/Poppins/Poppins-Italic.ttf"),
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
                header: CustomHeader,
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
                options={{
                    title: 'Detalhes'
                }}
            />

            <Stack.Screen
                name="matches/NewMatch"
                options={{
                    title: 'Nova partida'
                }}
            />

            <Stack.Screen
                name="matches/MatchOngoing"
                options={{
                    title: 'Partida em andamento'
                }}
            />

            <Stack.Screen
                name="matches/NewRound"
                options={{
                    title: 'Nova rodada'
                }}
            />

            <Stack.Screen
                name="matches/MatchEnded"
                options={{
                    title: 'Partida encerrada'
                }}
            />
        </Stack>
    )
}

