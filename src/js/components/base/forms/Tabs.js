/**
 * Created by kylejohnson on 30/07/2016.
 */
const TheComponent = class extends React.Component {
    displayName:'TheComponent'

    render () {
        return (
            <div className="tabs">
                <div className="tabs-nav">
                    {_.map(this.props.children, (child, i)=> {
                        var isSelected = this.props.value == i;
                        return (
                            <Button onClick={()=>this.props.onChange(i)}
                                    className={"btn-tab btn-primary" + (isSelected ? ' tab-active' : '')}>
                                {child.props.tabLabel}
                            </Button>
                        )
                    })}
                </div>
                <div className="tab-line" style={{
                    width: 100 / this.props.children.length + "%",
                    left: 100 / this.props.children.length * this.props.value + "%"
                }}/>
                <div className="tabs-content">
                    {_.map(this.props.children, (child, i)=> {
                        var isSelected = this.props.value == i;
                        return (
                            <div className={'tab-item' + (isSelected ? ' tab-active' : '')}>
                                {child}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
};

TheComponent.defaultProps = {
    className: ''
};

TheComponent.propTypes = {
    onChange: OptionalFunc,
    children: OptionalObject
};

module.exports = TheComponent;