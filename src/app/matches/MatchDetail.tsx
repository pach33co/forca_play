import { Card } from "@/shared/components/Card"
import { RoundListItem } from "@/shared/components/RoundListItem"
import { Section } from "@/shared/components/Section"
import { Text, View } from "react-native"


export default function MatchDetail() {
    return (
        <View className='flex-1 p-2 gap-2'>

            <Section title='Modo Clássico'>
                <Text>Detalhe</Text>
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

                    <RoundListItem
                        word="Jogo"
                        tip="Algo para se divertir"
                        status="win"
                        correctLetters={['j', 'o', 'g']}
                        wrongLetters={['a', 'e', 'i']}
                    />

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
    )
}