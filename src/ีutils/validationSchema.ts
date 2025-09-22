import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(10),
  email: z.string().min(1),
  school: z.string().min(1),
  gpa: z.number().min(0).max(4),
  talent: z.string().min(1),
  reason: z.string().min(1),
  major: z.string().min(1),
  university: z.string().min(1),
});
