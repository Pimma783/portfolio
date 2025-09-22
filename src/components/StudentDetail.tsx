import { useStudentStore } from '../store/studentStore'

export default function StudentDetail({ id }: { id: string }) {
    const student = useStudentStore((s) => s.students.find((st) => st.id === id))
    if (!student) return <div>ไม่พบข้อมูล</div>

    return (
        <div>
            <h2>{student.name} {student.surname}</h2>
            <p>GPA: {student.gpa}</p>
            <p>มหาวิทยาลัย: {student.university}</p>
            <p>เหตุผล: {student.reason}</p>
            {student.image && <img src={student.image} alt="student" width={200} />}
        </div>
    )
}
