import React, { Component } from "react";
import { withRouter } from "next/router";
import { withFormik } from "formik";
import { formikPropTypes } from "common/utils/formik";
import * as yup from "yup";
import withGrecaptcher from "../components/extras/withGracecaptcher";

//How does this work ?
// set formly and grecaptcher in project.js
// Create a formly project: https://formlyapp.com/
// Create a grecaptcher project: https://www.google.com/recaptcha/admin/

const schema = yup.object().shape({
  name: yup.string().required("You really need to enter a name"),
  dog: yup.string().required("Select a dog"),
  alias: yup.object().shape({
    value: yup.string().required("Must have alias"),
  }),
});

class FormPage extends Component {
  static displayName = "FormPage";

  static propTypes = {
    ...formikPropTypes,
  };

  componentDidMount() {
    API.trackPage("FormPage");
  }

  handleChange = (e) => {
    this.props.handleChange(e);
  };

  onDogChanged = (e) => {
    const dog = Utils.safeParseEventValue(e);
    this.props.setFieldValue("dog", dog);
    this.props.setFieldValue("alias", `mega${dog}`);
  };

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      setFieldValue,
    } = this.props;
    const hasErrors = !!Object.keys(errors).length || !this.props.grecaptcher;
    const url =
      "https://post.formlyapp.com/" +
      Project.formly +
      "?redirect=/?submitted=1";
    return (
        <form
          method="POST"
          onSubmit={hasErrors ? Utils.preventDefault : undefined}
          action={url}
          className="col-md-8 mt-4"
        >
            <Column>
                <label htmlFor="name" className="mr-2">
                    Name
                </label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                />
                {errors.name && touched.name && (
                <div id="feedback">{errors.name}</div>
          )}
            </Column>
            <Column>
                <label htmlFor="name" className="mr-2">
                    Occupation
                </label>
                <Input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.occupation}
                  name="occupation"
                />
                {errors.occupation && touched.occupation && (
                <div id="feedback">{errors.occupation}</div>
          )}
            </Column>
            <Column>
                <Select
                  name="dog"
                  title="Dogs"
                  onChange={this.onDogChanged}
                  onBlur={handleBlur}
                  value={values.dog}
                >
                    <option value="" />
                    <option value="poodle">Poodle</option>
                    <option value="pug">Pug</option>
                </Select>
                {errors.dog && touched.dog && <div id="feedback">{errors.dog}</div>}
            </Column>
            <Column>
                <label htmlFor="name" className="mr-2">
                    Alias
                </label>
                <Input
                  type="text"
                  onChange={(e) =>
              setFieldValue("alias", {
                value: Utils.safeParseEventValue(e),
              })
            }
                  onBlur={handleBlur}
                  value={_.get(values, "alias.value") || ""}
                  name="alias"
                />
                {_.get(errors, "alias.value") && _.get(touched, "alias.value") && (
                <div id="feedback">{errors.alias.value}</div>
          )}
            </Column>

            {Project.grecaptcher && (
            <div className="mt-4 mb-3">
                <div id="recaptcha" />
            </div>
        )}

            <Button disabled={hasErrors} type="submit">
                Submit
            </Button>
        </form>
    );
  }
}

export default withGrecaptcher(
  withRouter(
    withFormik({
      mapPropsToValues: () => ({
        name: "",
        dog: "",
        alias: { value: "" },
        occupation: "",
      }),
      validateOnMount: true,
      validationSchema: schema,
      handleSubmit: (values) => {
        // Call your action with form values
        console.log("handleSubmit", values);
      },
    })(FormPage)
  )
);
