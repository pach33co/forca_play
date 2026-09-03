import { Text, View } from "react-native";

type TSectionProps = {
    title: string | React.ReactNode;
    children: React.ReactNode;
}

export function Section({ children, title }: TSectionProps) {
    return (
        <View className='gap-2'>
            {['string', 'number', 'bigint', 'boolean'].includes(typeof title) ? (
                <Text className='text-text font-regular text-base'>
                    {title}
                </Text>
            )
                : title
            }

            <View className='gap-2'>
                {children}
            </View>

        </View>
    )
}