import { Image, ScrollView, Text, View } from "react-native";

export default function RestaurantHeader() {
    return (
        <View className="px-5 pt-14">
            <View className="flex-row items-center justify-between">
                <View>
                    <Text className="text-2xl font-bold tracking-tight text-[#292522]">
                        Casa Oliva
                    </Text>

                    <Text className="mt-1 text-sm text-[#81766E]">
                        Timon, Maranhão
                    </Text>
                </View>

                <View className="h-11 w-11 items-center justify-center rounded-full bg-[#EFE7DF]">
                    <Text className="text-lg font-bold text-[#A65D3F]">
                        CO
                    </Text>
                </View>
            </View>

            <View className="mt-9">
                <Text className="text-sm font-semibold uppercase tracking-[3px] text-[#A65D3F]">
                    Uma experiência especial
                </Text>

                <Text className="mt-3 text-3xl font-bold leading-10 text-[#292522]">
                    Seu próximo sabor favorito está aqui.
                </Text>

                <Text className="mt-3 text-base leading-6 text-[#81766E]">
                    Pratos preparados com carinho, ingredientes selecionados e muito sabor.
                </Text>
            </View>

            <View className="mt-7 overflow-hidden rounded-3xl">
                <Image
                    source={require("../../assets/cooki.jpg")}
                    style={{ width: "100%", height: 250 }}
                    resizeMode="cover"
                />
            </View>

            <View className="mt-10">
                <Text className="text-2xl font-bold tracking-tight text-[#292522]">
                    Nosso cardápio
                </Text>

                <Text className="mt-2 text-sm leading-6 text-[#81766E]">
                    Sabores especiais preparados para você.
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mt-6"
                >
                    <View className="flex-row gap-3">
                        <View className="rounded-full bg-[#A65D3F] px-5 py-3">
                            <Text className="font-semibold text-white">
                                Todos
                            </Text>
                        </View>

                        <View className="rounded-full bg-[#EFE7DF] px-5 py-3">
                            <Text className="font-medium text-[#62564E]">
                                Entradas
                            </Text>
                        </View>

                        <View className="rounded-full bg-[#EFE7DF] px-5 py-3">
                            <Text className="font-medium text-[#62564E]">
                                Pratos principais
                            </Text>
                        </View>

                        <View className="rounded-full bg-[#EFE7DF] px-5 py-3">
                            <Text className="font-medium text-[#62564E]">
                                Sobremesas
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}