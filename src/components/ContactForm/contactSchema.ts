import { ZodType, z } from 'zod';

const contactSchema: ZodType<IFormData> = z.object({
  firstName: z
    .string()
    .min(1, 'Firstname is required')
    .max(30, "your first name can't be more than 30 letters"),
  lastName: z
    .string()
    .min(1, 'Lastname is required')
    .max(30, "your last name can't be more than 30 letters"),
  email: z.string().email('Enter a valid email'),
  age: z
    .number({
      invalid_type_error: 'Age must be a number',
    })
    .min(18, 'You have to be 18 or older')
    .max(120, 'You must be younger than 120'),
  message: z.string().max(50),
});

export default contactSchema;
