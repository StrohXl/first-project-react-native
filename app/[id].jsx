import { Link, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { getAnimeDetails } from "../libs/metacritic";
import LoadingActivity from "../components/LoadingActivity";
import { ChevronLeft } from "../components/Icons";
import { StatusBar } from "expo-status-bar";
import Screen from "../components/Screen";

export default function IdAnime() {
  const { id } = useLocalSearchParams();
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAnimeDetails(id)
      .then((data) => {
        setAnime(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: `${anime ? anime.title.slice(0, 30) : ""}${anime && anime.title.length > 30 ? "..." : ""}`,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
          },
        }}
      />
      {loading ? (
        <LoadingActivity />
      ) : anime ? (
        <ScrollView style={{ paddingInline: 15 }}>
          <Screen>
            <Image
              source={{ uri: anime.images.large }}
              width={200}
              height={200}
              className="w-[200px] h-[285px] mx-auto mb-4 rounded-xl"
            />
            <Text className="text-white text-center mb-4 text-xl font-bold">
              {anime.title}
            </Text>
            <Text className="text-white text-lg text-center">
              {anime.synopsis}
            </Text>
          </Screen>
        </ScrollView>
      ) : (
        <View>
          <Text className={"text-white"}>
            Error no se encontro ningun anime
          </Text>
          <Link href={"/"} asChild>
            <Text className="text-white text-center">regresar</Text>
          </Link>
        </View>
      )}
    </>
  );
}
