import { StyleSheet } from "react-native";
import { Text, Card, Button, View, Colors } from "react-native-ui-lib"


export default function RewardsScreen() {
  const soapImage = require('../assets/images/soap.jpg')

  return (
    <>
      <View style={styles.container}>
        <Card flex height='50%' activeOpacity={1}>
          <Card.Section content={[
            { text: 'Placeholder', style: styles.title }
          ]} style={{ flex: 0.5, padding: 20 }} />
          <Card.Section style={{ flex: 6 }} imageSource={soapImage} imageStyle={{ height: '100%' }} />
          <View flex style={{ alignItems: 'center', flex: 0.5, borderRadius: 10 }} padding-20 bg-white>
            <Button
              style={{ marginRight: 10, height: 50, width: 300 }}
              text60
              label="Redeem reward"
              size={Button.sizes.medium}
              backgroundColor="#30B650"
            />
          </View>
        </Card>
      </View>
      <View row style={{ backgroundColor: 'white', width: '100%', height: 50, position: 'absolute', bottom: 0, paddingTop: 10, paddingLeft: 20 }}>
        <Text text60>Unredeemed rewards</Text>
        <Text style={{ marginLeft: 'auto', marginRight: 20 }} text60>1</Text>
      </View>

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
