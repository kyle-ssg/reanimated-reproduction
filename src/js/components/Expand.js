const TheComponent = class extends React.Component {
  displayName:'TheComponent'

  constructor (props, context) {
    super(props, context);
    this.state = { value: props.defaultValue };
  }

  toggle = () => {
    this.setState({ value: !this.state.value });
  }

  render () {
    return (
      <div className={"expand" && (this.state.value ? ' in' : '')}>
        <div onClick={this.toggle}>
          {this.props.title} <span
          className={"fa " + (this.state.value ? 'fa-chevron-down' : 'fa-chevron-right')}/>
        </div>
        {this.props.children}
      </div>
    );
  }
};

TheComponent.propTypes = {
  children: RequiredElement,
  toggleComponent: OptionalFunc,
  title: RequiredString,
  defaultValue: OptionalBool,
};

module.exports = TheComponent;
