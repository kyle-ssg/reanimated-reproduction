import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const Panel = window.Panel = ({className, icon, title, action, children}) => (
    <div
        className={cn({
            'panel': true,
            'panel-default': true,
        }, className)}>
        <div className="panel-heading">
            <Row space={true}>
                <Row className={"flex-1"}>
                    {icon && (
                        <span className={"panel-icon"}><ion className={cn({'icon': true}, icon)}/></span>
                    )}
                    {title}
                </Row>
                {action}
            </Row>
        </div>
        <div className="panel-content">
            {children}
        </div>
    </div>
)


Panel.displayName = "Panel";

Panel.propTypes = {
    title: propTypes.node,
    icon: propTypes.string,
    children: propTypes.node
};