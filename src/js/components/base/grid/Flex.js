/**
 * Created by kylejohnson on 24/07/2016.
 */
var Flex = (props) => (
    <div {... props} style={_.merge({ display: 'flex', flex: 1 }, props.style)}>
        {props.children}
    </div>
);

Flex.propTypes = {
    children: OptionalElement,
    style: OptionalObject
};

module.exports = Flex;