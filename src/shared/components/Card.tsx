import { View } from "react-native";


export function Card({ children } : React.PropsWithChildren) {
    return (
        <View className='bg-paper p-4 rounded-lg gap-0.5'>
            {children}
        </View>
    )
}