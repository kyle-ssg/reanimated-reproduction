const FormGroup = (props)=>(
  <div className="form-group">
    {props.children}
  </div>
);

FormGroup.displayName = "FormGroup";
FormGroup.propTypes = {
  children: OptionalNode
};
module.exports = FormGroup;
