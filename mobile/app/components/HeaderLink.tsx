import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RouteUrls } from "../route-urls";

interface PropsHeaderLink {
  title: string;
  link: RouteUrls;
  push: (url:RouteUrls)=>void;
}
interface PropsBackLink {
  title: string;
  pop: ()=>void
}

export const HeaderLink: React.FC<PropsHeaderLink> = ({ title, push, link }) => {
  return (
    <TouchableOpacity onPress={() => push(link)}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

export const HeaderBackLink: React.FC<PropsBackLink> = ({ title, pop }) => {
  return (
    <TouchableOpacity onPress={pop}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: palette.link,
  },
});
