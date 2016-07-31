/**
 * Created by kylejohnson on 30/07/2016.
 */
const TheComponent = (props)=>(
    <div className="form-group">
        {props.children}
    </div>
);
TheComponent.displayName = "FormGroup";
module.exports = TheComponent;