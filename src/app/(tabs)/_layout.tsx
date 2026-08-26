import { styles } from "@/shared/styles/Styles";
import { TabList, Tabs, TabSlot, TabTrigger, TabTriggerSlotProps } from "expo-router/ui";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Layout() {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                marginTop: insets.top,
                marginBottom: insets.bottom,
                marginLeft: insets.left,
                marginRight: insets.right,
            }}
        >
            <Tabs>
                <TabList
                    style={{
                        marginHorizontal: 'auto',
                        gap: 16,
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        backgroundColor: styles.colors.paper,
                        borderRadius: styles.corner.large
                    }}
                >

                    <TabTrigger className='px-2 py-1' name="index" href="/" asChild>
                        <CustomTabButton
                        text='Início'
                        />
                    </TabTrigger>

                    <TabTrigger className='px-2 py-1' name="About" href="/About" asChild>
                        <CustomTabButton
                        text='Sobre'
                        />
                    </TabTrigger>

                </TabList>

                <TabSlot />

            </Tabs>
        </View>
    );
}

type TCustomTabButtonProps = TabTriggerSlotProps & {
    text: string
}
const CustomTabButton = ({ isFocused, text, ...props }: TCustomTabButtonProps) => {
    return (
        <Pressable
            {...props}
        >
            <Text className='text-text text-base font-regular'
            style={{
                fontWeight: isFocused ? 'bold' : undefined           
            }}
            >
                {text}
                </Text>
        </Pressable>
    )
}