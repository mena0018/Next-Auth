import { z } from 'zod';

export const zFields = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export type Fields = z.infer<typeof zFields>;
