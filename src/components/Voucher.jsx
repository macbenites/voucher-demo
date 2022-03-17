import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconAndroid from "../assets/Android_Logo.png";
import IconIos from "../assets/Apple_Logo.png";

export const Voucher = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>Constancia de Pago</Text>
        {/* Body */}
        <View style={styles.items}>
          <View style={styles.item}>
            <Text style={styles.category}>Número de tarjeta</Text>
            <Text style={styles.value}>1234 5678 9012 3456</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.category}>Cuenta de origen</Text>
            <Text style={styles.value}>600-43875394-0-25</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.category}>Titular de la cuenta</Text>
            <Text style={styles.value}>Cesar Alonso Calle Jimenez</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.category}>Fecha y hora de pago</Text>
            <Text style={styles.value}>27/09/2021 11:55:33</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.category}>Número de operación</Text>
            <Text style={styles.value}>81153116</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.category}>Monto</Text>
            <Text style={styles.value}>S/ 1498.0</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.category}>Interés</Text>
            <Text style={styles.value}>S/ 0.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.images}>
        <Image source={IconAndroid} style={styles.image} />
        <Image source={IconIos} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "red",
  },

  content: {
    marginVertical: 30,

    width: "100%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 24,
    padding: 10,
    elevation: 5,
  },

  title: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 24,
    color: "#474747",
  },

  category: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#4B4B4B",
  },

  value: {
    fontSize: 16,
    fontWeight: "200",
    color: "#4B4B4B",
  },
  items: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  item: {
    margin: 10,
  },

  images: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    width: "50%",
    height: 80,
    resizeMode: "contain",
  },
});
