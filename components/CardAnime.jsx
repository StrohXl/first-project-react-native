import { useEffect, useRef } from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";
import Score from "./Score";
import { Link } from "expo-router";

export default function CardAnime({ anime }) {
  return (
    <Link href={`/${anime.id}`} asChild>
      <Pressable>
        {({ pressed }) => (
          <View
            className={`${pressed ? "bg-gray-900/80" : "bg-gray-950"} p-4 rounded-xl mb-4 flex-row gap-4`}
          >
            <Image
              source={{ uri: anime.images.large }}
              style={{ width: 100, height: 150 }}
              className="rounded-md"
            />
            <View className="flex-shrink">
              <Text className="text-white text-2xl font-bold mb-3 line-clamp-1">
                {anime.title}
              </Text>
              <Score score={anime.score} />
              <Text className="text-white line-clamp-4 mt-3">
                {anime.synopsis}
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

export function AnimatedAnimeCard({ anime, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View style={{ opacity: opacity }}>
      <CardAnime anime={anime} />
    </Animated.View>
  );
}
