/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
          Rewards: {
            screens: {
              RewardsScreen: "rewards",
            },
          },
          Events: {
            screens: {
              EventsScreen: "events",
            },
          },
          Pet: {
            screens: {
              Pet: "pet",
              Dex: "dex",
            },
          },
        },
      },
      Modal: "modal",
      Dex: "dex",
      Shop: "shop",
      'Create Event': "create_event",
      'Take Photo': "take_photo",
      NotFound: "*",
    },
  },
};

export default linking;
