/**
 * Created by kylejohnson on 30/07/2016.
 */
import React, { Component } from "react";
import propTypes from "prop-types";
import Button from "./Button";

export class Tabs extends Component {
  static displayName = "Tabs";

  static propTypes = {
    value: propTypes.any,
    onChange: propTypes.func,
    children: propTypes.node,
    className: propTypes.string,
    uncontrolled: propTypes.bool,
    tabLabels: propTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    const value = this.props.uncontrolled ? this.state.value : this.props.value;
    return (
        <div className={`tabs ${this.props.className || ""}`}>
            <div className="tabs-nav">
                {this.props.children.map((child, i) => {
            const isSelected = value === i;
            const tabLabel = this.props.tabLabels[i];
            return (
                <Button
                  data-test={child.props["data-test"]}
                  id={child.props.id}
                  key={`button${i}`}
                  onClick={(e) => {
                  if (this.props.uncontrolled) {
                    this.setState({ value: i });
                  }
                  e.stopPropagation();
                  e.preventDefault();
                  if (this.props.onChange) this.props.onChange(i);
                }}
                  className={`btn-tab btn-primary${
                  isSelected ? " tab-active" : ""
                }`}
              >
                    {tabLabel || i}
                </Button>
            );
          })}
            </div>
            <div
              className="tab-line"
              style={{
            width: `${100 / this.props.children.length}%`,
            left: `${(100 / this.props.children.length) * value}%`,
          }}
        />
            <div className="tabs-content">
                {this.props.children.map((child, i) => {
            const isSelected = value === i;
            return (
                <div
                  key={`content${i}`}
                  className={`tab-item${isSelected ? " tab-active" : ""}`}
              >
                    {child}
                </div>
            );
          })}
            </div>
        </div>
    );
  }
}

Tabs.defaultProps = {
  className: "",
  value: 0,
};

global.Tabs = Tabs;
export default Tabs;

// Example Usage
//   <Tabs value={this.state.tab} onChange={this.selectTab}>
//     <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 1 content</h2>
//     </TabItem>
//     <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 2 content</h2>
//     </TabItem>
//   </Tabs>
