import { z } from "zod"

export const studentSchema = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(10),
  email: z.string().min(1),
  school: z.string().min(1),
  gpa: z
    .number({ invalid_type_error: "กรุณากรอก GPA เป็นตัวเลข" })
    .min(0, "GPA ต้องไม่น้อยกว่า 0")
    .max(4, "GPA ต้องไม่เกิน 4"),
  talent: z.string().min(1),
  reason: z.string().min(1),
  major: z.string().min(1),
  university: z.string().min(1),
})