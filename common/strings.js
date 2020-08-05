import each from "lodash/each";
import Constants from "./utils/constants";

const Strings = {
  en: {
    defaultErrorMessage: "An unexpected error has occurred",
    gatewayTimeoutError: "API is unreachable right now"
  }
};

if (Constants.simulate.FORCE_LANGUAGE === "blobby") {
  const blobby = {};
  each(Strings.en, (val, key) => {
    const words = val.split(" ");
    let newWordsBlobby = words.map(word => {
      const arr = ["eeeee", "blob", "blobby", "wuueeeeh"];
      const random = Math.floor(Math.random() * (1 + (arr.length - 1)));
      if (word.indexOf("{") !== -1) {
        // reserve params
        return word;
      }
      return arr[random];
    });
    newWordsBlobby = `${newWordsBlobby.join(" ").trim(" ")}(${val})`;
    blobby[key] = newWordsBlobby;
  });
  Strings.blobby = blobby;
}

export default Strings;
