import React from "react";
import cn from "classnames";

interface Button {
  className?: string,
  children?: React.ReactChildren | React.ReactChild,
  onClick?: () => void,
  onMouseUp?: () => void,
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: string;
}

//Default Button without any styles
export const Button: React.FC<Button> = ({ icon, className, children, onMouseUp, ...rest }) => (
    <button
      type="button" {...rest}
      onMouseUp={onMouseUp}
      className={cn({ btn: true }, className)}
    >
        {children}

      {icon ? (
        <div className="btn__icon">
          <i className={cn({ icon: true }, icon)} />
        </div>
      ) : (
        null
      )}

    </button>
);

global.Button = Button;
Button.displayName = "Button"
export default Button;

export const ButtonText: React.FC<Button> = ({ className, ...props }) => <Button {...props} className={cn(className, "btn btn-text")} />
global.ButtonText = ButtonText;

/** Default button added btn-primary * */
export const ButtonPrimary: React.FC<Button> = ({ className, ...props }) => <Button {...props} className={cn(className, "btn btn-primary")} />

global.ButtonPrimary = ButtonPrimary;
ButtonPrimary.displayName = "ButtonPrimary";


/** Default button added btn-secondary * */
export const ButtonSecondary: React.FC<Button> = ({ className ,...props }) => <Button {...props} className={cn(className, "btn btn-secondary")} />

global.ButtonSecondary = ButtonSecondary;
ButtonSecondary.displayName = "ButtonSecondary";

export const ButtonDanger: React.FC<Button> = ({ className, ...props }) => <Button {...props} className={cn(className, "btn btn-danger")}/>
global.ButtonDanger = ButtonDanger;
ButtonDanger.displayName = "ButtonDanger";

/** Default button added btn-outline-primary * */
export const ButtonTertiary: React.FC<Button> = ({ className, ...props }) => <Button {...props} className={cn(className, "btn btn-outline-primary")}/>

global.ButtonTertiary = ButtonTertiary;
ButtonTertiary.displayName = "ButtonButtonTertiary";

