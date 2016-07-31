const FormGroup = (props)=>(
    <div className="form-group">
        {props.children}
    </div>
);

FormGroup.displayName = "FormGroup";
FormGroup.propTypes = {
    children: OptionalElement
};
module.exports = FormGroup;