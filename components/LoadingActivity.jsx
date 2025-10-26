import { ActivityIndicator, View } from "react-native";

export default function LoadingActivity() {
  return (
    <View className="h-full items-center justify-center">
      <ActivityIndicator color={"#fff"} />
    </View>
  );
}
