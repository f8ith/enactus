import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Card, Button, View } from "react-native-ui-lib"


export default function EventsScreen() {
  const cleanupImage = require('../assets/images/cleanup.jpg')

  return (
    <View style={styles.container}>
      <Card flex height={120} activeOpacity={1}>
        <Ionicons name="ellipsis-horizontal" size={30} style={{ position: 'absolute', top: 15, right: 20 }} />
        <Card.Section content={[
          { text: 'Cleanup Event @ Tai Mo Shan', style: styles.title }
        ]} style={{ flex: 0.5, padding: 20 }} />
        <Card.Section style={{ flex: 6 }} imageSource={cleanupImage} imageStyle={{ width: 400, height: '100%' }} />
        <View row style={{ flex: 0.5, borderRadius: 10, paddingBottom: 30 }} padding-20 bg-white>
          <Button
            style={{ marginRight: 10, height: 50, width: 100 }}
            text60
            label="Apply"
            size={Button.sizes.medium}
            backgroundColor="#ff5050"
          />
          <Button
            style={{ marginRight: 10, height: 50, width: 110 }}
            text60
            label="Details"
            size={Button.sizes.medium}
            backgroundColor="#30B650"
          />
        </View>
      </Card>

    </View>
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
