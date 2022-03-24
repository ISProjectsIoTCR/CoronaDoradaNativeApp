import { View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "utils";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
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
