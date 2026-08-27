import { styles } from "@/shared/styles/Styles";
import { Pressable, Text } from "react-native";

type TOutlinedProps = {
    text: string;
    onPress?: () => void;
    color: 'primary' | 'error';
}

export function OutlinedButton({ text, color, onPress }: TOutlinedProps) {
    return (
        <Pressable
            onPress={onPress}
            className='border-4 px-4 py-3 rounded-sm bg-paper'
            style={{
                borderColor: color === 'primary' ? styles.colors.primary
                    : color === 'error' ? styles.colors.wrong
                        : styles.colors.primary
            }}

        >
            <Text className='text-primary font-bold text-lg'
                style={{
                    color: color === 'primary' ? styles.colors.primary
                        : color === 'error' ? styles.colors.wrong
                            : styles.colors.primary
                }}>
                {text}
            </Text>
        </Pressable>
    )
}