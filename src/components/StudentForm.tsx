'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { studentSchema } from '../utils/validationSchema'
import { z } from 'zod'
import { useStudentStore } from '../store/studentStore'
import { useState } from 'react'

type StudentFormData = z.infer<typeof studentSchema>

export default function StudentForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<StudentFormData>({
        resolver: zodResolver(studentSchema),
    })

    const addStudent = useStudentStore((s) => s.addStudent)
    const [preview, setPreview] = useState<string | null>(null)

    const onSubmit = (data: StudentFormData) => {
        const id = `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`
        addStudent({ id, ...data, image: preview ?? '' })
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setPreview(url)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input {...register("name")} placeholder="ชื่อ" />
            {errors.name && <span>กรุณากรอกชื่อ</span>}

            <input {...register("surname")} placeholder="นามสกุล" />
            <input {...register("address")} placeholder="ที่อยู่" />
            <input {...register("phone")} placeholder="เบอร์โทรศัพท์" />
            <input {...register("email")} placeholder="อีเมล" />
            <input {...register("school")} placeholder="โรงเรียน" />
            <input
                type="number"
                step="0.01"
                {...register("gpa", { valueAsNumber: true })}
                placeholder="GPA"
            />


            <input {...register("talent")} placeholder="ความสามารถพิเศษ" />
            <textarea {...register("reason")} placeholder="เหตุผลในการสมัคร" />
            <input {...register("major")} placeholder="สาขาที่เลือก" />
            <input {...register("university")} placeholder="มหาวิทยาลัย" />

            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && <img src={preview} width={100} alt="preview" />}

            <button type="submit">เพิ่ม Portfolio</button>
        </form>
    )
}

