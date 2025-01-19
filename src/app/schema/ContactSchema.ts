// contactschema.ts
import { z } from 'zod';

const contactschema = z.object({
  firstname: z
    .string()
    .min(3, { message: 'Firstname must be 3 or more characters long' })
    .max(15, { message: 'Firstname must be 15 or less characters long' }),
  lastname: z
    .string()
    .min(3, { message: 'Lastname must be 3 or more characters long' })
    .max(10, { message: 'Lastname must be 10 or less characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  mobile: z
    .string()
    .min(10, { message: 'Invalid mobile number' }),
  subject: z
    .string()
    .min(10, { message: 'Subject must be 10 or more characters long' })
    .max(50, { message: 'Subject must be 50 or less characters long' }),
  message: z
    .string()
    .min(20, { message: 'Message must be 20 or more characters long' })
    .max(500, { message: 'Message must be 500 or less characters long' }),
});

export default contactschema;