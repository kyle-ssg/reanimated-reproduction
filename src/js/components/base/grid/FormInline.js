/**
 * Created by kylejohnson on 30/07/2016.
 */
const TheComponent = (props)=>(
    <div className="form-inline">
        {props.children}
    </div>
);
TheComponent.displayName = "FormInline";
module.exports = TheComponent;