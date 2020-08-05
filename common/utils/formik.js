import propTypes from "prop-types";

export const formikPropTypes = {
  dirty: propTypes.bool.isRequired,
  errors: propTypes.object.isRequired,
  handleBlur: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  handleReset: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  isSubmitting: propTypes.bool.isRequired,
  isValid: propTypes.bool.isRequired,
  isValidating: propTypes.bool.isRequired,
  resetForm: propTypes.func.isRequired,
  setErrors: propTypes.func.isRequired,
  setFieldError: propTypes.func.isRequired,
  setFieldTouched: propTypes.func.isRequired,
  submitForm: propTypes.func.isRequired,
  submitCount: propTypes.number.isRequired,
  setFieldValue: propTypes.func.isRequired,
  setStatus: propTypes.func.isRequired,
  setSubmitting: propTypes.func.isRequired,
  setTouched: propTypes.func.isRequired,
  setValues: propTypes.func.isRequired,
  status: propTypes.any,
  touched: propTypes.object.isRequired,
  values: propTypes.object.isRequired,
  validateForm: propTypes.func.isRequired,
  validateField: propTypes.func.isRequired
};
