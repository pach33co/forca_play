import { Pressable, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "@/shared/styles/Styles";


type TMatchListItemProps = {
    mode: 'classic'; /* Modo do Jogo */
    status: 'ongoing' | 'lose' | 'win' | 'draw'; /* Status da Partida */
    currentRound?: number; /* Round Atual da Partida */
    numberOfRounds: number; /* Número de Rounds da Partida */
    onPress: () => void;
}

export function MatchListItem({ mode, status, currentRound, numberOfRounds, onPress }: TMatchListItemProps) {
    return (
        <Pressable
            onPress={onPress}
            className='flex-row px-2 py-1 items-center justify-between'
        >

            <View className='gap-1'>
                {mode === 'classic' && (
                    <Text className='text-text font-regular text-base'>
                        Modo Clássico
                    </Text>)}

                <View className='gap-1 flex-row'>
                    {status === 'ongoing' && (
                        <Text className='text-correct font-bold'>
                            Em andamento
                        </Text>)}

                    {status === 'draw' && (
                        <Text className='text-alert font-bold'>
                            Empate
                        </Text>)}

                    {status === 'lose' && (
                        <Text className='text-wrong font-bold'>
                            Derrota
                        </Text>)}

                    {status === 'win' && (
                        <Text className='text-correct font-bold'>
                            Vitória
                        </Text>)}

                    <Text className='text-text font-regular'>
                        - {status === 'ongoing' && `${currentRound}/`}{numberOfRounds} rodadas</Text>
                </View>

            </View>

            <MaterialIcons
                name={status === 'ongoing' ? 'play-arrow' : 'keyboard-arrow-right'}
                size={24}
                color={status === 'ongoing'
                    ? styles.colors.correct
                    : styles.colors.text
                }
            />

        </Pressable>
    )
}