import { FlatList, StyleSheet } from "react-native";
import { Text, Card, Button, View, Colors } from "react-native-ui-lib"


export default function DexScreen() {
  const items = [
    {
      id: '1',
      image: require('../assets/images/small_crab.png'),
      level: 10,
      unlocked: true,
    },
    {
      id: '2',
      image: require('../assets/images/tadpole.png'),
      level: 30,
      unlocked: true,
    },
    {
      id: '2',
      image: require('../assets/images/pinkdolphin.png'),
      level: 30,
      unlocked: true,
    },
    {
      id: '4',
      image: require('../assets/images/whitebird.png'),
      level: 30,
      unlocked: true,
    },
    {
      id: '5',
      image: require('../assets/images/procupine.png'),
      level: 40,
      unlocked: false,
    },
    {
      id: '6',
      image: require('../assets/images/deer.png'),
      level: 45,
      unlocked: false,
    },
  ]

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Card flex style={{ margin: 10, height: 280, width: 180 }} activeOpacity={1}>
        <Card.Section style={{ flex: 6, maxHeight: 180, width: '100%' }} imageSource={item.image} />
        <View flex style={{ alignItems: 'center', flex: 0.5, borderRadius: 10 }} padding-20 backgroundColor={Colors.grey80}>
          <Text
            text65
          >{item.unlocked ? 'Unlocked' : `Unlocked at level ${item.level}`}</Text>
        </View>
      </Card>
    );
  };

  return (
    <>
      <FlatList style={{ height: '100%' }} data={items} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} ListHeaderComponent={
        <View row style={{ backgroundColor: 'white', width: '100%', height: 50, paddingTop: 10, paddingLeft: 20 }}>
          <Text text60>Current level</Text>
          <Text style={{ marginLeft: 'auto', marginRight: 20 }} text60>30</Text>
        </View>
      } />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
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
