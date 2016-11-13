import React, {Component, PropTypes} from 'react';

const Card = (props)=>(
    <View style={[Styles.container, styles.card, props.style]}>
        {props.children}
    </View>
);

Card.displayName = "Card";

Card.propTypes = {
    children: RequiredNode
};

module.exports = Card;

var styles = require('../../../style/components/style_card')