import { Dish } from "@/types/dish";
import { Image, Text, View } from "react-native";


type DishCardProps = {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    return (
        <View className="mt-7 flex-row items-center gap-4">
            <Image
                source={dish.image}
                style={{ width: 112, height: 100, borderRadius: 16 }}
                resizeMode="cover"
            />

            <View className="flex-1">
                <Text className="text-lg font-bold text-[#292522]">
                    {dish.name}
                </Text>

                <Text className="mt-1 text-sm leading-5 text-[#81766E]">
                    {dish.description}
                </Text>

                <Text className="mt-3 font-bold text-[#A65D3F]">
                    {dish.price}
                </Text>
            </View>
        </View>
    );
}