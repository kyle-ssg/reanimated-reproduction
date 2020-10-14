import React, { useState } from "react";
import { FlatList } from "react-native";
import FormGroup from "../grid/FormGroup";
import TextInput from "./TextInput";
import Bold from "../type/Bold";

interface Props {
  onChange?: (argument: any) => void;
  renderNoResults?: () => void;
  items?: any;
  multiple?: boolean;
  style?: ReactNative.ViewStyle;
  value?: any;
  filterItem?: (item: any) => void;
  renderRow?: (item: any, isSelected: boolean, toggleItem: () => void) => void;
  placeholder?: string;
  searchTestID?: string;
}

const Select: React.FC<Props> = ({
  onChange,
  renderNoResults,
  style,
  multiple,
  value = [],
  filterItem,
  placeholder,
  searchTestID,
  renderRow,
  items,
}) => {
  const [search, setSearch] = useState({});

  const isSelectedHandler = (i) =>
    multiple ? value.indexOf(i) !== -1 : value === i;

  const setItem = (i, selected) => {
    if (multiple) {
      if (selected) {
        onChange((value || []).concat(i));
      } else {
        const index = value.findIndex((value) => value === i);
        value.splice(index, 1);
        onChange(value);
      }
    } else if (selected) {
      onChange(i);
    } else {
      onChange(null);
    }
  };

  const data = filterItem
    ? items.filter((item) => item !== search || filterItem(item))
    : items;

  return (
    <Flex style={[Styles.body, { style }]}>
      {filterItem && (
        <FormGroup style={{ backgroundColor: "#FCF8F5" }}>
          <Container>
            <TextInput
              style={{
                shadowOpacity: 0,
                borderBottomWidth: 0,
              }}
              placeholder={placeholder}
              onChangeText={(searchNew) => setSearch(searchNew.toLowerCase())}
              testID={searchTestID}
            />
          </Container>
        </FormGroup>
      )}
      {data && data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            const isSelected = isSelectedHandler(item);
            const toggleItem = () => {
              setItem(item, !isSelected);
            };
            return renderRow(item, isSelected, toggleItem);
          }}
        />
      ) : renderNoResults ? (
        renderNoResults()
      ) : (
        <Text style={Styles.textCenter}>
          No Results Found for:
          <Bold>{search}</Bold>
        </Text>
      )}
    </Flex>
  );
};

export default Select;
