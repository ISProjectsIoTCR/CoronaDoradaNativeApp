import { View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "utils";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../../assets/img/bgcd.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>¿Como describirías a tu mejor aliado? </Text>
      <Text style={styles.description}>
        Corona Dorada trabaja para gente como vos, y juntos creamos
        la red de apicultores número uno del país. De forma muy sencilla, las pricipales asociaciones,
        expertos, capacitación, tienda y asesoria 24/7, al alcance de tu mano.
      </Text>
      <Text style={styles.subtitle}>¡Bienvenid@¡</Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate(screen.account.login)}
        />
      </View>
    </ScrollView>
  );
}
