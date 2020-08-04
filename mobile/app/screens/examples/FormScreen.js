/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, { Component } from 'react';
import { withFormik } from 'formik';
import { formikPropTypes } from 'common/utils/formik';
import * as yup from 'yup';
import SelectBox from 'components/base/forms/SelectBox';

const schema = yup.object().shape({
  name: yup.string().required('You really need to enter a name'),
  occupation: yup.string(),
  dog: yup.string().required('Select a dog'),
  alias: yup.object().shape({
    value: yup.string().required('Must have alias'),
  }),
});

const FormScreen = class extends Component {
  static displayName = 'FormScreen';

  static propTypes = {
    ...formikPropTypes,
  };

  constructor() {
    super();
    this.state = {};
  }

  onNameChanged = (text) => {
    this.props.handleChange('name')(text);
  };

  onAliasChanged = (text) => this.props.setFieldValue('alias', { value: text });

  onSubmit = () => {
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
      setFieldTouched,
    } = this.props;
    return (
      <Flex style={[Styles.body]}>
        <Column>
          <TextInput
            title="Name"
            onChangeText={this.onNameChanged}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {errors.name && touched.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </Column>
        <Column>
          <TextInput
            title="Occupation"
            onChangeText={handleChange('occupation')}
            onBlur={handleBlur('occupation')}
            value={values.occupation}
          />
          {errors.occupation && touched.occupation && (
            <ErrorMessage>{errors.occupation}</ErrorMessage>
          )}
        </Column>
        <Column>
          <SelectBox
            title="Dog"
            options={['Poodle', 'Pug']}
            onChange={handleChange('dog')}
            onBlur={() => setFieldTouched('dog', true)}
          >
            {values.dog}
          </SelectBox>
          {errors.dog && touched.dog && (
            <ErrorMessage>{errors.dog}</ErrorMessage>
          )}
        </Column>
        <Column>
          <TextInput
            title="Alias"
            onChangeText={this.onAliasChanged}
            onBlur={handleBlur('alias.value')}
            value={_.get(values, 'alias.value') || ''}
          />
          {_.get(errors, 'alias.value') && _.get(touched, 'alias.value') && (
            <ErrorMessage>{errors.alias.value}</ErrorMessage>
          )}
        </Column>

        <Button onPress={this.onSubmit}>Submit</Button>
      </Flex>
    );
  }
};

// const styles = ReactNative.StyleSheet.create({
//
// });

module.exports = withFormik({
  mapPropsToValues: () => ({
    name: '',
    dog: '',
    alias: { value: '' },
    occupation: '',
  }),
  validationSchema: schema,
  handleSubmit: (values) => {
    // Call your action with form values
    console.log('handleSubmit', values);
  },
})(FormScreen);
