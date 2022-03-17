import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Voucher } from "./src/components/Voucher";

export default function App() {
  return <Voucher />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
