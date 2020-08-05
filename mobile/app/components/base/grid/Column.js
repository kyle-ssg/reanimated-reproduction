/**
 * Created by Kyle on 17/06/2016.
 */
import React from "react";
import propTypes from "prop-types";
import Flex from "./Flex";

const Column = (props) => (
  <View style={[Styles.column, props.style]}>{props.children}</View>
);

const FCol = (props) => (
  <Flex style={props.flexStyle}>
    <Column style={[Styles.column, props.style]}>{props.children}</Column>
  </Flex>
);

Column.propTypes = FCol.propTypes = {
  flexStyle: propTypes.any,
  style: propTypes.any,
  children: propTypes.any,
};

module.exports = { Column, FCol };
