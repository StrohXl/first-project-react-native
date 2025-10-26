import { Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import "../global.css";
import { Link, Stack } from "expo-router";
import { CircleInfo, Search } from "../components/Icons";
import Logo from "../components/Logo";
import { useState } from "react";
import ButtonPressed from "../components/ButtonPressed";

export default function App() {
  const insets = useSafeAreaInsets();
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerLeft: () => <Logo />,
          headerRight: () => (
            <View className="flex-row gap-1">
              <ButtonPressed>
                <Search />
              </ButtonPressed>

              <Link href={"/about"} asChild>
                <Pressable>
                  {({ pressed }) => (
                    <View
                      className={`w-[45px] h-[45px] items-center justify-center`}
                      style={{
                        borderRadius: 100,
                        backgroundColor: pressed ? "#374151" : "#1f2937",
                      }}
                    >
                      <CircleInfo />
                    </View>
                  )}
                </Pressable>
              </Link>
            </View>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "#000",
            paddingBottom: insets.bottom,
          },
        }}
      />
    </View>
  );
}
