import React from "react";
import cn from "classnames";

interface Button {
  className?: string,
  children?: React.ReactChildren | React.ReactChild,
  onClick?: () => void,
  onMouseUp?: () => void,
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

//Default Button without any styles
export const Button: React.FC<Button> = ({ className, children, onMouseUp, ...rest }) => (
    <button
      type="button" {...rest}
      onMouseUp={onMouseUp}
      className={cn({ btn: true }, className)}
    >
        {children}
    </button>
);

global.Button = Button;
Button.displayName = "Button"
export default Button;


/** Default button added btn-primary * */
export const ButtonPrimary: React.FC<Button> = ({ className, ...props }) => <Button {...props} className={cn(className, "btn btn-primary")} />

global.ButtonPrimary = ButtonPrimary;
ButtonPrimary.displayName = "ButtonPrimary";


/** Default button added btn-secondary * */
export const ButtonSecondary: React.FC<Button> = ({ className ,...props }) => <Button {...props} className={cn(className, "btn btn-secondary")} />

global.ButtonSecondary = ButtonSecondary;
ButtonSecondary.displayName = "ButtonSecondary";


/** Default button added btn-outline-primary * */
export const ButtonTertiary: React.FC<Button> = ({ className, ...props }) => <Button {...props} className={cn(className, "btn btn-outline-primary")}/>

global.ButtonTertiary = ButtonTertiary;
ButtonTertiary.displayName = "ButtonButtonTertiary";

