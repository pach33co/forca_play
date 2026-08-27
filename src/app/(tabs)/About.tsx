import { Section } from "@/shared/components/Section";
import { Text, View } from "react-native";


export default function About() {
    return (
        <View className='gap-6 px-2'>
            <Section title='Sobre o ForcaPlay'>
                <Text className='text-text text-base font-regular'>
                    Este aplicativo é uma versão offline do ForcaPlay, o clássico jogo da forca.
                </Text>
            </Section>

            <Section title='Outras formas de contato'>
                <Text className='text-text text-base font-regular'>
                    Outras formas de entrar em contato com a gente.
                </Text>
            </Section>
        </View>
    );
}