/**
 * Created by kylejohnson on 25/07/2016.
 */
const FormGroup = (props)=> {
    const id = Utils.GUID();
    return (
        <div className={"form-group"}>
            <label htmlFor={id} className="cols-sm-2 control-label">{props.title}</label>
            <div>
                <div>
                    {props.icon && (
                        <span className="input-group-addon"><i className={props.icon} aria-hidden="true"></i></span>
                    )}
                    <Input {... props.inputProps} disabled={props.disabled} value={props.value} onChange={props.onChange} type={props.type || 'text'} name={id} id={id}  placeholder={props.placeholder}/>
                </div>
            </div>
        </div>
    );
};

FormGroup.propTypes = {
    disabled: OptionalBool,
    title: RequiredString,
    inputProps: OptionalObject,
    icon: OptionalString,
    value: OptionalString,
    onChange: OptionalFunc,
    type: OptionalString,
    placeholder: OptionalString
};

module.exports = FormGroup;
