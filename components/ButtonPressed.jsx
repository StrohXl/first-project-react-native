import { Pressable, View } from "react-native";

export default function ButtonPressed({ children }) {
  return (
    <Pressable>
      {({ pressed }) => (
        <View
          className={`w-[45px] h-[45px] items-center justify-center`}
          style={{
            borderRadius: 100,
            backgroundColor: pressed ? "#374151" : "#1f2937",
          }}
        >
          {children}
        </View>
      )}
    </Pressable>
  );
}
