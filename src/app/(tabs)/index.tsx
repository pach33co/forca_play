import { ContainedButton } from "@/shared/components/button/Contained";
import { Card } from "@/shared/components/Card";
import { MatchListItem } from "@/shared/components/home/MatchListItem";
import { Section } from "@/shared/components/Section";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const router = useRouter();

    return (
        <View className='flex-1 px-2 gap-6' >
            <View className='items-center'>
                <ContainedButton
                    text='Nova Partida'
                    color='primary'
                    onPress={() => router.push('/matches/NewMatch')}
                />
            </View>

            <Section title='Partidas em andamento'>
                <Card>
                    <MatchListItem
                        mode="classic"
                        numberOfRounds={3}
                        status="ongoing"
                        currentRound={2}
                        onPress={() => router.push('/matches/MatchOngoing')}
                    />
                </Card>
            </Section>

            <Section title='Histórico de Partidas'>
                <Card>
                    <MatchListItem
                        mode="classic"
                        numberOfRounds={3}
                        status="lose"
                        currentRound={2}
                        onPress={() => router.push('/matches/MatchDetail')}
                    />
                </Card>

                <Card>
                    <MatchListItem
                        mode="classic"
                        numberOfRounds={3}
                        status="win"
                        currentRound={2}
                        onPress={() => router.push('/matches/MatchDetail')}
                    />
                </Card>

                <Card>
                    <MatchListItem
                        mode="classic"
                        numberOfRounds={3}
                        status="lose"
                        currentRound={2}
                        onPress={() => router.push('/matches/MatchDetail')}
                    />
                </Card>

                <Card>
                    <MatchListItem
                        mode="classic"
                        numberOfRounds={3}
                        status="draw"
                        currentRound={2}
                        onPress={() => router.push('/matches/MatchDetail')}
                    />
                </Card>

            </Section>

        </View>
    );
}