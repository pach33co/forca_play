import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

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
        <Slot />
    )
}