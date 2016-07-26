/**
 * Created by kylejohnson on 25/07/2016.
 */
const FormGroup = (props)=> {
    const id = Utils.GUID();
    return (
        <div className="form-group">
            <label htmlFor={id} className="cols-sm-2 control-label">{props.title}</label>
            <div className="cols-sm-10">
                <div className="input-group">
                    {props.icon && (
                        <span className="input-group-addon"><i className={props.icon} aria-hidden="true"></i></span>
                    )}
                    <input {... this.props.inputProps} disabled={this.props.disabled} value={props.value} onChange={props.onChange} type={props.type || 'text'} className="form-control" name={id} id={id}  placeholder={props.placeholder}/>
                </div>
            </div>
        </div>
    );
};

//Example usage
//todo: Add simple validation api
// <FormGroup value={this.state.password}
//  title="Password"
// inputProps={{onBlur:this.handleBlur}}  <- Any additional input props you wish to add
// onChange={this.handleChangePlease}
// placeHolder="******"
// icon="fa fa-lock"/>

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
