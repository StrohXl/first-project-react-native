import { Text, View } from "react-native";

export default function Score({ score }) {
  return (
    <View
      className={`${score < 4 ? "bg-red-500" : score >= 4 && score < 7 ? "bg-yellow-500" : "bg-green-500"}
      w-[50px] px-2 rounded-sm
      
      `}
    >
      <Text className="text-white text-xl text-center font-bold">{score}</Text>
    </View>
  );
}
