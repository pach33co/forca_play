import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'PoppinsBold' }}>Hello world</Text>

            <TouchableOpacity onPress={() => router.push('/matches/MatchDetail') }>
                <Text style={{ fontFamily: 'PoppinsBold' }}>Go to Detail</Text>
            </TouchableOpacity>

        </View>
    );
}