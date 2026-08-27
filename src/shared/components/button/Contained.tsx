import { styles } from "@/shared/styles/Styles";
import { Pressable, Text } from "react-native";

type TContainedProps = {
    text: string;
    onPress?: () => void;
    color: 'primary' | 'error';
}

export function ContainedButton({ text, color, onPress }: TContainedProps) {
    return (
        <Pressable
            onPress={onPress}
            className='px-4 py-3 rounded-sm'
            style={{
                backgroundColor: color === 'primary' ? styles.colors.primary
                    : color === 'error' ? styles.colors.wrong
                        : styles.colors.primary
            }}
        >
            <Text className='font-bold text-lg'
                style={{
                    color: color === 'primary' ? styles.colors.primaryText
                        : color === 'error' ? styles.colors.text
                            : styles.colors.primaryText
                }}>
                {text}
            </Text>
        </Pressable>
    )
}