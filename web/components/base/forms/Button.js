import React from 'react';
import cn from 'classnames';

export default class extends React.Component {
    static displayName = 'Button';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    onMouseUp = () => {
        this.refs.button.blur();
    };

    render() {
        const { children, ...rest } = this.props;
        return (
            <button
              ref="button"
              type="button"
              {...rest}
              onMouseUp={this.onMouseUp}
              className={cn({
                  'btn': true,
              }, (this.props.className || 'btn-primary'))}
            >
                {children}
            </button>
        );
    }
}

export const ButtonSecondary = props => (
    <Button
      {...props}
      className={cn(props.className, 'btn btn-secondary')}
    >
        {props.children}
    </Button>
);