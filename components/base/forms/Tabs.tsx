import React from 'react';
import Button from './Button';

interface Tabs {
  value?: any;
  onChange?: (i: number) => void;
  children?: {id?: string }[];
  className?: string;
  uncontrolled?: boolean;
  tabLabels: string[];
}

const Tabs: React.FC<Tabs> = ({ className = "", value = 0, children, tabLabels, onChange }) => (
    <div className={`tabs ${className}`}>
        <div className="tabs-nav">
            {children.map((child, i) => {
                const isSelected = value === i;
                const tabLabel = tabLabels[i];
                return (
                    <Button
                      data-test={child["data-test"]}
                      id={child.id}
                      key={`button${i}`}
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onChange && onChange(i);
                      }}
                      className={`btn-tab btn-primary${isSelected ? " tab-active" : ""}`}
                    >
                        { tabLabel || i }
                    </Button>
                    );
                    })}
        </div>
        <div
          className="tab-line"
          style={{ width: `${100 / children.length}%`,left: `${(100 / children.length) * value}%` }}
        />
        <div className="tabs-content">
            {children.map((child, i) => {
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

Tabs.displayName = "Tabs";
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
