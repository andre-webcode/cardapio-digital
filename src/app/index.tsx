
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-2xl font-bold text-white">
        NativeWind funcionando!
      </Text>

      <Text className="mt-2 text-base text-green-400">
        Configuração concluída.
      </Text>
    </View>
  );
}
