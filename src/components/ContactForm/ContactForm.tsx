import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosWarning as WarningIcon } from 'react-icons/io';
import { Box, Button, TextField } from '@mui/material';
import './ContactForm.scss';
import contactSchema from './contactSchema';
import useBeforeUnloadHook from './hooks/useBeforeUnloadHook';
import { zodResolver } from '@hookform/resolvers/zod';
import EmailIcon from '@mui/icons-material/Email';

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
        sx={{ maxWidth: 570 }}
        variant='standard'
        label='Firstname *'
        {...register('firstName')}
        placeholder='Enter your firstname here'
        error={!!errors.firstName}
        helperText={
          <Box>
            {errors.firstName && <WarningIcon />} {errors.firstName?.message}
          </Box>
        }
      />

      <TextField
        sx={{ maxWidth: 570 }}
        variant='standard'
        label='Lastname *'
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
        sx={{ maxWidth: 570 }}
        variant='standard'
        label='Email *'
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
        sx={{ maxWidth: 570 }}
        variant='standard'
        placeholder='Enter your age here'
        label='Age *'
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
        sx={{ maxWidth: 570 }}
        variant='standard'
        placeholder='Enter your message here'
        label='Message'
        {...register('message')}
        multiline
        rows={5}
      />

      <Button
        sx={{
          display: 'flex',
          gap: '0.3rem',
          width: '10rem',
          color: 'movitaPurple.light',
          borderColor: 'movitaPurple.dark',
          '@media (max-width: 500px)': {
            margin: 'auto',
          },
        }}
        disabled={isSubmitting}
        type='submit'
        variant='outlined'
      >
        {isSubmitting ? 'SUBMITTING MAIL' : 'SUBMIT MAIL'}
        <EmailIcon sx={{ fontSize: '1rem' }} />
      </Button>
      <Toaster position='top-center' />
    </form>
  );
}

export default ContactForm;
