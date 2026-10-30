
import DishCard from "@/components/DishCard";
import RestaurantHeader from "@/components/RestaurantHeader";
import dishes from "@/data/dishes";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <FlatList
            className="flex-1 bg-[#FAF8F5]"
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
            data={dishes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DishCard dish={item} />}
            ListHeaderComponent={<RestaurantHeader />}
        />
    );
}
