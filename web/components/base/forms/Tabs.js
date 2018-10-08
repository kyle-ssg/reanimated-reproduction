/**
 * Created by kylejohnson on 30/07/2016.
 */
import React from 'react';
import propTypes from 'prop-types';

const Tabs = window.Tabs = class extends React.Component {
  displayName = 'Tabs';

  render() {
    return (
      <div className={"tabs " + (this.props.className || "")}>
        <div className="tabs-nav">
          {this.props.children.map((child, i) => {
            var isSelected = this.props.value == i;
            return (
              <Button
                id={child.props.id}
                key={'button' + i}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  this.props.onChange(i)
                }}
                className={"btn-tab btn-primary" + (isSelected ? ' tab-active' : '')}
              >
                {child.props.tablabel}
              </Button>
            );
          })}
        </div>
        <div className="tab-line" style={{
          width: 100 / this.props.children.length + "%",
          left: 100 / this.props.children.length * this.props.value + "%"
        }}
        />
        <div className="tabs-content">
          {this.props.children.map((child, i) => {
            var isSelected = this.props.value == i;
            return (
              <div key={'content' + i} className={'tab-item' + (isSelected ? ' tab-active' : '')}>
                {child}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

Tabs.defaultProps = {
  className: '',
  value: 0
};

Tabs.propTypes = {
  onChange: propTypes.func,
  children: propTypes.node,
  value: propTypes.number
};

//Example Usage
//   <Tabs value={this.state.tab} onChange={this.selectTab}>
//     <div tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 1 content</h2>
//     </div>
//     <div tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 2 content</h2>
//     </div>
//   </Tabs>
