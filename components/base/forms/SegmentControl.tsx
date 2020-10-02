import React from 'react';

interface SegmentControl {
  onChange?: (key: string) => void;
  options: {
    key: string;
    name?: string;
    selected?: boolean
  }[];
}

const SegmentControl: React.FC<SegmentControl> = ({ options, onChange }) => {

  const handleClick = (key: string) => onChange && onChange(key)

  return (
      <div className="segment-control">
          {options.map((option) => (
              <button 
                className={`btn ${option.selected ? "segment-control__selected" : ""}`}
                type="button"
                key={option.key}
                onClick={() => handleClick(option.key)}
              >
                  {option.name}
              </button>
    ))}
      </div>);
};

SegmentControl.displayName = " SegmentControl";
export default SegmentControl;