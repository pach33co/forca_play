import { View } from "react-native";

type TCardProps = {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className } : TCardProps) {
    return (
        <View className={`bg-paper p-4 rounded-lg gap-0.5 ${className}`}>
            {children}
        </View>
    )
}