import { Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import "../global.css";
import { Link, Stack } from "expo-router";
import { CircleInfo } from "../components/Icons";
import Logo from "../components/Logo";

export default function App() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack
        screenOptions={{
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href={"/about"} asChild>
              <Pressable>
                {({ pressed }) => (
                  <CircleInfo style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#1f2937",
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "#1f2937",
            paddingInline: 17,
            paddingBottom: insets.bottom,
          },
        }}
      />
    </View>
  );
}
