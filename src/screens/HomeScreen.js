import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";



export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../assets/img/bgcd.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>¿Como describirías a tu mejor aliado? </Text>
      <Text style={styles.description}>
        Corona Dorada trabaja para gente como vos, y juntos creamos
        la red de apicultores número uno del país. De forma muy sencilla, las principales asociaciones,
        expertos, capacitación, tienda y asesoria 24/7, al alcance de tu mano.
      </Text>
      <Text style={styles.subtitle}>¡Bienvenid@¡</Text>
      <View style={styles.viewBtn}>
  
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
    marginTop:40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
});

