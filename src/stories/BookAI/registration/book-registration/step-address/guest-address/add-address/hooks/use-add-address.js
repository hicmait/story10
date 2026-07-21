import { useState } from 'react';
import { isEmpty } from '@/utils'; // Using utils as per AddAddress.jsx imports

export const useAddAddress = ({
  validationSchema,
  initialValues,
  onSubmit,
}) => {
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { value, name } }) => {
    const fieldName = name;

    if (!isEmpty(errors[fieldName])) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    }

    setData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const validateField = async (name, options = {}) => {
    try {
      await validationSchema.validateAt(name, data, options);
      if (!isEmpty(errors[name])) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      }
      return true;
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      return false;
    }
  };

  const onFieldBlur = ({ target: { name } }, options = { context: { autoComplete: true } }) => {
    validateField(name, options);
  };

  const handleSubmit = async (e, validationOptions = { abortEarly: false }) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      await validationSchema.validate(data, validationOptions);
      setSaving(true);
      try {
        await onSubmit({ ...data }, () => setSaving(false));
      } catch (err) {
        setSaving(false);
      }
    } catch (err) {
      if (err.inner) {
        const newErrors = {};
        err.inner.forEach(({ path, message }) => {
          newErrors[path] = message;
        });
        setErrors(newErrors);
      } else {
        // Fallback for non-Yup errors or single errors
        setErrors({ [err.path || 'form']: err.message });
      }
    }
  };

  return {
    data,
    saving,
    errors,
    handleChange,
    onFieldBlur,
    handleSubmit,
    setData,
    setErrors,
    setSaving,
    validateField,
  };
};
