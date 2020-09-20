import React, { Component } from "react";
import { withRouter } from "next/router";
import { withFormik } from "formik";
import { formikPropTypes } from "common/utils/formik";
import * as yup from "yup";

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

  // Do server rendered actions such as fetching data here
  // static async getInitialProps({ Component, ctx }) {
  // }

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

  onSubmit = (e) => {
    Utils.preventDefault(e);

    // Do anything here that needs doing before form validation and submission

    this.props.submitForm();
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
    const hasErrors = !!Object.keys(errors).length;
    return (
        <form onSubmit={hasErrors ? Utils.preventDefault : this.onSubmit}>
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
            <Button disabled={hasErrors} type="submit">
                Submit
            </Button>
        </form>
    );
  }
}

export default withRouter(
  withFormik({
    mapPropsToValues: () => ({
      name: "",
      dog: "",
      alias: { value: "" },
      occupation: "",
    }),
    validationSchema: schema,
    validateOnMount: true,
    handleSubmit: (values) => {
      // Call your action with form values
      console.log("handleSubmit", values);
    },
  })(FormPage)
);
