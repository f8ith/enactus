import { FlatList, StyleSheet } from "react-native";
import { Text, Card, Button, View } from "react-native-ui-lib"


export default function RewardsScreen() {
  const items = [
    {
      id: '1',
      image: require('../assets/images/soap.jpg')
    }
  ]

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Card flex style={{ margin: 20 }} height='50%' activeOpacity={1}>
        <Card.Section content={[
          { text: 'Soap!', style: styles.title }
        ]} style={{ flex: 0.5, padding: 20 }} />
        <Card.Section style={{ flex: 6 }} imageSource={item.image} />
        <View flex style={{ alignItems: 'center', flex: 0.5, borderRadius: 10 }} padding-20 bg-white>
          <Button
            style={{ marginRight: 10, height: 50 }}
            text60
            label="Redeem reward"
            size={Button.sizes.medium}
            backgroundColor="#30B650"
          />
        </View>
      </Card>
    );
  };

  return (
    <>
      <FlatList style={{ height: '100%' }} data={items} renderItem={renderItem} keyExtractor={(item) => item.id} ListHeaderComponent={
        <View row style={{ backgroundColor: 'white', width: '100%', height: 50, paddingTop: 10, paddingLeft: 20 }}>
          <Text text60>Unredeemed rewards</Text>
          <Text style={{ marginLeft: 'auto', marginRight: 20 }} text60>1</Text>
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
