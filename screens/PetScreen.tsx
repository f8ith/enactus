import { StyleSheet } from "react-native";
import { Image, Carousel, Card, Button, View, Colors } from "react-native-ui-lib"


export default function PetScreen() {
  const environments = [
    {
      id: 1,
      background: require('../assets/images/sea.png'),
      animals: [
        {
          name: 'dolphin', source: require('../assets/images/big_dolphin.png'), style: { position: 'absolute', bottom: 100, maxWidth: 300, maxHeight: 300 }
        }
      ],
    },
    {
      id: 2,
      background: require('../assets/images/mangrove.png'),
      animals: [{
        name: 'crab', source: require('../assets/images/crab.png'), style: { position: 'absolute', bottom: 350, left: 100, maxWidth: 200, maxHeight: 200 }
      }],
    },
    {
      id: 3,
      background: require('../assets/images/forest.jpg'),
      animals: [],
    },
  ]

  return (
    <View style={styles.container}>
      <Carousel>
        {
          environments.map((item) =>
          (
            <View key={item.id}>
              <Image source={item.background} />
              {
                item.animals.map((animal) => (
                  <Image key={animal.name} source={animal.source} style={animal.style as any} />
                ))
              }
            </View>
          ))
        }
      </Carousel>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
