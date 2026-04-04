import { useState, useCallback } from 'react';
import { submitForm } from '../lib/submitForm';

export function useFormSubmit({ formType, initialData, servicePageTitle }) {
  const [formData, setFormData] = useState(initialData);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name?.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    const digits = (formData.phone || '').replace(/\D/g, '');
    if (digits.length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitForm({
        ...formData,
        formType,
        ...(servicePageTitle ? { servicePageTitle } : {}),
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please call us directly.');
    }
  }, [formData, formType, servicePageTitle]);

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setStatus('idle');
    setErrorMessage('');
  }, [initialData]);

  return { formData, status, errorMessage, handleChange, handleSubmit, resetForm };
}
