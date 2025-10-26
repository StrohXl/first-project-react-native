import { Stack } from "expo-router";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1f2937",
          },
        }}
      />
      <Main />
    </>
  );
}
