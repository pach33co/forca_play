import { NativeStackHeaderProps } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "../styles/Styles";

export function CustomHeader({ back, options, navigation }: NativeStackHeaderProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            marginTop: insets.top
        }}>

            <View className='bg-paper m-2 rounded-lg flex-row items-center justify-center p-2 h-10'>
                {back && (
                    <TouchableOpacity
                    className='absolute left-2'
                    onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons
                            name='arrow-back'
                            size={24}
                            color={styles.colors.text} />
                    </TouchableOpacity>
                )}

                <Text className='text-text font-bold'>
                    {options.title}
                </Text>
            </View>
        
        </View>
    )
}