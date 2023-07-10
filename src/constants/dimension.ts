import { Dimensions } from "react-native";
export const { height, width } = Dimensions.get("screen");
export const screenHeight = (num:number) => {
  return (num / 100) * height;
};
export const screenWidth = (num:number) => {
  return (num / 100) * width;
};