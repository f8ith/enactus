import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Circle, Geojson } from "react-native-maps";
import { Card, View } from "react-native-ui-lib"
import { Text } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { DOMParser } from "xmldom";
// @ts-ignore
import { kml } from "@tmcw/togeojson";
import kmlStr from "../constants/kmlStr"


export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const parser = new DOMParser();
  const routeKml = parser.parseFromString(kmlStr);
  const routeJson = kml(routeKml);
  const signpostImage = require('../assets/images/signpost.png')
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={{ latitude: 22.2484695, longitude: 113.9430879, latitudeDelta: 0, longitudeDelta: 0 }} mapType="terrain" showsUserLocation={true}>
        <Geojson
          geojson={routeJson}
          strokeColor="rgba(0,0,255,0.5)"
          strokeWidth={5}
        />
        <Circle strokeColor="rgba(0,0,0,0)" radius={50} center={{ latitude: 22.2484695, longitude: 113.9430879 }} fillColor="rgba(255,0,0,0.5)"></Circle>
        <Circle strokeColor="rgba(0,0,0,0)" radius={50} center={{ longitude: 113.94451, latitude: 22.24913 }} fillColor="rgba(128,0,0,0.6)"></Circle>
        <Circle strokeColor="rgba(0,0,0,0)" radius={50} center={{ longitude: 113.94503, latitude: 22.24926 }} fillColor="rgba(255,255,0,0.6)"></Circle>
        <Marker image={signpostImage} title="AR Sign here" description="Scan it!" coordinate={{ longitude: 113.94451, latitude: 22.24913 }}></Marker>
        <Circle strokeColor="rgba(0,0,0,0)" radius={50} center={{ longitude: 113.94582, latitude: 22.25033 }} fillColor="rgba(0,0,0,0.7)"></Circle>

      </MapView>
      <View style={{ backgroundColor: 'rgba(0,0,0,0)', position: 'absolute', bottom: 50, left: 25 }}>
        <Card>
          <Card.Section content={[
            { text: 'Tai Tung Shan', style: styles.title }
          ]} style={{ padding: 20, flex: 1 }} />
        </Card>

      </View>

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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
