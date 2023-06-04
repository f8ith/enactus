import { FlatList, StyleSheet } from "react-native";
import { Text, Card, Button, View } from "react-native-ui-lib"


export default function ShopScreen() {
  const items = [
    {
      id: '1',
      image: require('../assets/images/potted_plant.png'),
      points: 20,
    },
    {
      id: '2',
      image: require('../assets/images/plant.png'),
      points: 30,
    }

  ]

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Card flex style={{ margin: 10, height: 280, width: 180 }} activeOpacity={1}>
        <Card.Section style={{ flex: 6, maxHeight: 180, width: '100%' }} imageSource={item.image} />
        <View flex style={{ alignItems: 'center', flex: 0.5, borderRadius: 10 }} padding-20 bg-white>
          <Button
            style={{ height: 50 }}
            text60
            label={`${item.points} points`}
            size={Button.sizes.medium}
            backgroundColor="#30B650"
          />
        </View>
      </Card>
    );
  };

  return (
    <>
      <FlatList style={{ height: '100%' }} data={items} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} ListHeaderComponent={
        <View row style={{ backgroundColor: 'white', width: '100%', height: 50, paddingTop: 10, paddingLeft: 20 }}>
          <Text text60>Green Points</Text>
          <Text style={{ marginLeft: 'auto', marginRight: 20 }} text60>100</Text>
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
