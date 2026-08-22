import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const router = useRouter();

    return (
        <View className='items-center justify-center flex-1 bg-background' >
            <Text className='text-sm color-text'>Hello world</Text>

            <TouchableOpacity onPress={() => router.push('/matches/MatchDetail')}>
                <Text
                    className="text-xl font-bold text-blue-500"
                >Go to Detail</Text>
            </TouchableOpacity>

        </View>
    );
}