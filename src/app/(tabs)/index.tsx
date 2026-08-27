import { ContainedButton } from "@/shared/components/button/Contained";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const router = useRouter();

    return (
        <View className='flex-1 mt-6' >
            <View className='items-center'>
                <ContainedButton
                    text='Nova Partida'
                    color='primary'
                />
            </View>
        </View>
    );
}