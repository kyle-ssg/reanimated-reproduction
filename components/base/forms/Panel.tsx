import React from "react";
import cn from "classnames";
import Row from "../grid/Row";

interface Panel {
  className?: any;
  action?: React.ReactNode;
  title?: React.ReactNode;
  icon?: string;
  children?: React.ReactNode;
}


const Panel: React.FC<Panel> = ({ className, icon, title, action, children }) => (
    <div
      className={cn({ panel: true, "panel-default": true }, className)}
    >
        <div className="panel-heading">
            <Row space>
                <Row className="flex-1">
                    {icon && (
                    <span className="panel-icon">
                      {/*// @ts-ignore*/}
                      <ion className={cn({ icon: true }, icon)} />
                    </span>
          )}
                    {title}
                </Row>
                {action}
            </Row>
        </div>
        <div className="panel-content">{children}</div>
    </div>
);

Panel.displayName = "Panel";
export default Panel;
