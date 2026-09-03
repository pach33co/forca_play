import { Card } from "@/shared/components/Card";
import { Section } from "@/shared/components/Section";
import { Linking, ScrollView, Text, View } from "react-native";


export default function About() {

    function handleOpenEmail() {

        const body = encodeURIComponent('Olá,Estou entrando em contato para enviar dúvidas ou sugestões sobre o jogo')

        const subject = encodeURIComponent('Dúvidas ou sugestões sobre o Jogo')

        Linking.openURL(`mailto:forcaplayonline@gmail.com?subject=${subject}&body=${body}`);
    }

    function handleOpenGameinBrowser() {
        Linking.openURL('https://game.forcaplay.com')
    }

    function handleOpenInstagram() {
        Linking.openURL('https://www.instagram.com/forcaplayonline')
    }

    function handleOpenFacebook() {
        Linking.openURL('https://www.facebook.com/people/Forca-Play/61573642481257/')
    }

    return (
        <ScrollView>
            <View className='gap-6 px-2'>
                <Section title='Sobre o ForcaPlay'>
                    <Card>
                        <View className='gap-5'>
                            <Text className='text-text text-base font-regular'>
                                Este aplicativo é uma versão offline do ForcaPlay, o clássico jogo da forca com um toque moderno.
                                Aqui, você pode se divertir no modo solo, enfrentando desafios em diferentes níveis de dificuldade, sem precisar de internet.
                                Ideal para passar o tempo e testar seu vocabulário onde estiver.
                            </Text>

                            <Text className='text-text text-base font-regular'>
                                Este app foi criado com foco em simplicidade, jogabilidade rápida e acessível.
                                Tudo funciona diretamente no seu dispositivo, sem necessidade de cadastro ou conexão com servidores.
                            </Text>

                            <Text className='text-text text-base font-regular'>
                                Se você tiver dúvidas, encontrar algum problema ou quiser sugerir melhorias,
                                entre em contato pelo e-mail:&nbsp;
                                <Text className='text-primary underline'
                                    onPress={handleOpenEmail}
                                >
                                    forcaplayonline@gmail.com
                                </Text>
                                Sua opinião é muito bem-vinda para tornar o jogo cada vez melhor!
                            </Text>
                        </View>
                    </Card>
                </Section>

                <Section title='Outras formas de contato'>
                    <Card>
                        <View className='gap-1 py-2'>
                            <Text className='text-text text-base font-regular'>
                                Jogue no navegador
                            </Text>
                            <Text className='text-primary underline text-base font-regular' onPress={handleOpenGameinBrowser}>
                                https://game.forcaplay.com
                            </Text>
                        </View>

                        <View className='border-background border-b' />

                        <View className='gap-1 py-2'>
                            <Text className='text-text text-base font-regular'>
                                Instagram
                            </Text>
                            <Text className='text-primary underline text-base font-regular' onPress={handleOpenInstagram}>
                                https://www.instagram.com/forcaplayonline
                            </Text>
                        </View>

                        <View className='border-background border-b' />

                        <View className='gap-1 py-2'>
                            <Text className='text-text text-base font-regular'>
                                Facebook
                            </Text>
                            <Text className='text-primary underline text-base font-regular' numberOfLines={1} onPress={handleOpenFacebook}>
                                https://www.facebook.com/people/Forca-Play/61573642481257/
                            </Text>
                        </View>
                    </Card>
                </Section>
            </View>
        </ScrollView>
    );
}