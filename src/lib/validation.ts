import { z } from 'zod'

export const compensationSchema = z.object({
  company: z.string().min(2),

  role: z.string().min(2),

  level: z.string(),

  location: z.string(),

  baseSalary: z.number().positive(),

  bonus: z.number().default(0),

  stock: z.number().default(0),

  experience: z.number().min(0),
})