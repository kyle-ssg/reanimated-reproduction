/**
 * Created by kylejohnson on 30/07/2016.
 */
const FormInline = (props)=>(
	<div className="form-inline">
		{props.children}
	</div>
);

FormInline.displayName = "FormInline";

FormInline.propTypes = {
	children: OptionalNode
};

module.exports = FormInline;
