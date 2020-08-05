import { PureComponent } from 'react';
import propTypes from 'prop-types';
import React from 'react';
const Panel = class extends PureComponent {
  static displayName = 'Panel'

  render() {
    return (
        <div className={`panel panel-default ${this.props.className || ''}`}>
            <div className="panel-heading">
                <Row space>
                    <Row className="flex-1">
                        {this.props.icon && (
                        <span className="panel-icon"><span className={`icon ${this.props.icon}`}/></span>
                          )}
                        <h6 className="m-b-0">{this.props.title}</h6>
                    </Row>
                    {this.props.action}
                </Row>
            </div>
            <div className="panel-content">
                {this.props.children}
            </div>
        </div>
    );
  }
};

Panel.displayName = 'Panel';

Panel.propTypes = {
  title: propTypes.node,
  icon: propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  action: propTypes.node,
};

export default Panel;
