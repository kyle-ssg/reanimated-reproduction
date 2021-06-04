import { PropsType } from "ionicons/dist/types/stencil.core";
import React, { useRef, useState } from "react";
import cx from 'classnames'
import useOnClickOutside from "../useClickOutside";
export type SelectCustomDropdown = React.SelectHTMLAttributes<any> & {
  title?: string,
  isValid?: boolean,
  children?: React.ReactNode,
  errorMessage?: string,
  onClick: (index:number)=>void
  label?:string
}

const SelectCustomDropdown: React.FC<SelectCustomDropdown> = ({ title, onClick, label,isValid, children, errorMessage, ...props }) => {
  const [shouldValidate, setShouldValidate] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const show = ()=> setIsActive(true)
  const hide = ()=> setIsActive(false)
  const ref = useRef()
  useOnClickOutside(ref, hide)
  return (
    <>
      {title && (
        <label className="select__text">{title}</label>
      )}
      <div ref={ref} className="dropdown">
        <div onClick={()=>setIsActive(true)} className="select">
            <select {...props}
              onBlur={(e)=>{
                      setShouldValidate(true);
                      props.onBlur && props.onBlur(e)
                    }}
              className={cx(`pointer-none ${props.className||""}`,{ invalid: shouldValidate && !isValid })}
            >
              <option value={null}>
                {label||Strings.pleaseSelect}
              </option>
            </select>
            <i className="select__icon fas fa-caret-down"></i>

        </div>
        <div className={cx("dropdown-menu dropdown-menu-right", { show:isActive })} aria-labelledby="dropdownMenuButton">
          {children.map((child,i)=>(
            <a key={i} onClick={()=>{
              hide()
              onClick(i)
            }} className="dropdown-item"
              href="#"
            >
              {child}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

SelectCustomDropdown.displayName = "SelectCustomDropdown"
export default SelectCustomDropdown;

