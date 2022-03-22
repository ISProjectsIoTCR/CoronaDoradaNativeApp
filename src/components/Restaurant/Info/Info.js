import { View, Linking } from "react-native";
import { Text, ListItem, Icon, Button } from "react-native-elements";
import { map } from "lodash";
import { Map } from "components";
import { styles } from "./Info.styles";

export function Info(props) {
  const { restaurant } = props;

  const listInfo = [
    {
      text: restaurant.address,
      iconType: "material-community",
      iconName: "map-marker",
    },
    {
      text: restaurant.tel,
      iconType: "material-community",
      iconName: "phone",
      link: "tel:+506"+restaurant.tel
    },
    {
      text: restaurant.email,
      iconType: "material-community",
      iconName: "at",
      link: "mailto:"+restaurant.email
    },
  ];


  return (
    <View style={styles.content}>
      <Text style={styles.title}>Información sobre la asociación</Text>
      <Map location={restaurant.location} name={restaurant.name} />
      {map(listInfo, (item, index) => (
        <ListItem key={index} bottomDivider>
          {item.link ?
            <Icon
              onPress={() => Linking.openURL(item.link)}
              type={item.iconType}
              name={item.iconName}
              color="#00a680" />
            :
            <Icon
              type={item.iconType}
              name={item.iconName}
              color="#00a680" />
          }
          <ListItem.Content>
            <ListItem.Title>{item.text}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}
