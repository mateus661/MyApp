import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function FormScreen() {
  const dispatch = useDispatch();

  return (
    <View>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch({ type: 'ADD_ITEM', payload: values });
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {errors.name && <Text>{errors.name}</Text>}
            <TextInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {errors.email && <Text>{errors.email}</Text>}
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default FormScreen;
