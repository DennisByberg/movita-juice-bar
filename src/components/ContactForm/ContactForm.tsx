import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosWarning as WarningIcon } from 'react-icons/io';
import { Box, Button, TextField } from '@mui/material';
import './ContactForm.scss';
import contactSchema from './contactSchema';
import useBeforeUnloadHook from './hooks/useBeforeUnloadHook';
import { zodResolver } from '@hookform/resolvers/zod';

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  message: string;
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  useBeforeUnloadHook(hasUnsavedChanges);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(contactSchema),
  });

  const submitData = async (data: IFormData) => {
    try {
      setIsSubmitting(true);
      console.log('Submitting data to a database.', data);
      toast.success('Successfully sent mail, Thanks!');
      reset();
      setIsSubmitting(false);
    } catch {
      setIsSubmitting(false);
      toast.error('Error submitting the mail, Try again!');
    }
  };

  return (
    <form
      onChange={() => {
        !hasUnsavedChanges && setHasUnsavedChanges(true);
      }}
      onSubmit={handleSubmit(submitData)}
    >
      <TextField
        placeholder='Enter your firstname here'
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={
          <Box>
            {errors.firstName && <WarningIcon />} {errors.firstName?.message}
          </Box>
        }
      />

      <TextField
        placeholder='Enter your lastname here'
        {...register('lastName')}
        error={!!errors.lastName}
        helperText={
          <Box>
            {errors.lastName && <WarningIcon />} {errors.lastName?.message}
          </Box>
        }
      />

      <TextField
        placeholder='Enter your email here'
        type='email'
        {...register('email')}
        error={!!errors.email}
        helperText={
          <Box>
            {errors.email && <WarningIcon />} {errors.email?.message}
          </Box>
        }
      />

      <TextField
        placeholder='Enter your age here'
        type='number'
        {...register('age', { valueAsNumber: true })}
        error={!!errors.age}
        helperText={
          <Box>
            {errors.age && <WarningIcon />} {errors.age?.message}
          </Box>
        }
      />

      <TextField
        placeholder='Enter your message here'
        {...register('message')}
        multiline
        rows={5}
      />

      <Button disabled={isSubmitting} type='submit' variant='contained'>
        {isSubmitting ? 'SUBMITTING' : 'SUBMIT'}
      </Button>
      <Toaster position='top-center' />
    </form>
  );
}

export default ContactForm;
