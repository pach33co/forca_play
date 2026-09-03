import { Card } from "@/shared/components/Card"
import { RoundListItem } from "@/shared/components/RoundListItem"
import { Section } from "@/shared/components/Section"
import { ScrollView, Text, View } from "react-native"


export default function MatchDetail() {
    return (
        <ScrollView className='flex-1 p-2 gap-2'>
            <View className='gap-2'>

                <Section
                    title={
                        <Text className='text-text font-base font-regular'>
                            Modo Clássico (
                            <Text className='font-bold text-correct'>Vitória</Text>
                            {/* <Text className='font-bold text-wrong'>Derrota</Text>
                        <Text className='font-bold text-alert'>Empate</Text> */}
                            )
                        </Text>}
                >
                    <View className='gap-2'>

                        <View className='gap-2 flex-row'>
                            <Card className='flex-1 aspect-square justify-center items-center'>
                                <Text className='text-text text-center font-regular'>Rodadas</Text>
                                <Text className='text-text font-regular font-bold text-lg'>3</Text>
                            </Card>

                            <Card className='flex-1 aspect-square justify-center items-center'>
                                <Text className='text-text text-center font-regular'>Vitórias</Text>
                                <Text className='text-text font-regular font-bold text-lg'>2</Text>
                            </Card>

                            <Card className='flex-1 aspect-square justify-center items-center'>
                                <Text className='text-text text-center font-regular'>Derrotas</Text>
                                <Text className='text-text font-regular font-bold text-lg'>1</Text>
                            </Card>
                        </View>

                        <View className='gap-2 flex-row'>
                            <Card className='flex-1 aspect-square justify-center items-center'>
                                <Text className='text-text text-center font-regular'>Dificuldade</Text>
                                <Text className='text-text font-regular font-bold text-lg'>Média</Text>
                            </Card>

                            <Card className='flex-1 aspect-square justify-center items-center'>
                                <Text className='text-text text-center font-regular'>Duração por rodada</Text>
                                <Text className='text-text font-regular font-bold text-lg'>3 min</Text>
                            </Card>

                            <View className='flex-1 p-4 aspect-square justify-center items-center' />
                        </View>

                    </View>
                </Section>

                <Section title='Rodadas'>
                    <Card>
                        <RoundListItem
                            word="Abacate"
                            tip="Fruta com casca verde"
                            status="win"
                            correctLetters={['a', 'b', 'c', 't', 'e']}
                            wrongLetters={['e', 'i', 'o', 'u', 'g']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Jogo"
                            tip="Algo para se divertir"
                            status="win"
                            correctLetters={['j', 'o', 'g']}
                            wrongLetters={['a', 'e', 'i']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Janela"
                            tip="Pode estar aberto ou fechado"
                            status="lose"
                            correctLetters={['j', 'e', 'a']}
                            wrongLetters={['b', 'g', 'k', 'p', 't', 'r', 'q']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Abacate"
                            tip="Fruta com casca verde"
                            status="win"
                            correctLetters={['a', 'b', 'c', 't', 'e']}
                            wrongLetters={['e', 'i', 'o', 'u', 'g']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Jogo"
                            tip="Algo para se divertir"
                            status="win"
                            correctLetters={['j', 'o', 'g']}
                            wrongLetters={['a', 'e', 'i']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Janela"
                            tip="Pode estar aberto ou fechado"
                            status="lose"
                            correctLetters={['j', 'e', 'a']}
                            wrongLetters={['b', 'g', 'k', 'p', 't', 'r', 'q']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Abacate"
                            tip="Fruta com casca verde"
                            status="win"
                            correctLetters={['a', 'b', 'c', 't', 'e']}
                            wrongLetters={['e', 'i', 'o', 'u', 'g']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Jogo"
                            tip="Algo para se divertir"
                            status="win"
                            correctLetters={['j', 'o', 'g']}
                            wrongLetters={['a', 'e', 'i']}
                        />
                    </Card>

                    <Card>
                        <RoundListItem
                            word="Janela"
                            tip="Pode estar aberto ou fechado"
                            status="lose"
                            correctLetters={['j', 'e', 'a']}
                            wrongLetters={['b', 'g', 'k', 'p', 't', 'r', 'q']}
                        />
                    </Card>
                </Section>

            </View>
        </ScrollView>
    )
}