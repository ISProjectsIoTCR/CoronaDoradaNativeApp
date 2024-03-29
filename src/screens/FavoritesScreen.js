
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { size, map } from "lodash";
import { Loading, RestaurantFavorite } from "components";
import { UserNotLogged, NotFoundRestaurants } from "components/Favorites";
import { db } from "utils";

export function FavoritesScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "favorites"),
      where("idUser", "==", auth.currentUser.uid)
    );

    onSnapshot(q, async (snapshot) => {
      let restaurantsArray = [];
      for await (const item of snapshot.docs) {
        const data = item.data();
        const docRef = doc(db, "asociaciones", data.idRestaurant);
        const docSnap = await getDoc(docRef);
        const newData = docSnap.data();
        newData.idFavorite = data.id;

        restaurantsArray.push(newData);
      }
      setRestaurants(restaurantsArray);
    });
  }, []);

  if (!hasLogged) return <UserNotLogged />;

  if (!restaurants) return <Loading show text="Cargando" />;

  if (size(restaurants) === 0) return <NotFoundRestaurants />;

  return (
    <ScrollView>
      {map(restaurants, (restaurant) => (
        <RestaurantFavorite key={restaurant.id} restaurant={restaurant} />
      ))}
   
    </ScrollView>
  );
}
