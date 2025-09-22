'use client'
import { useStudentStore } from '../store/studentStore'
import Link from 'next/link'
import { useState } from 'react'

export default function StudentTable() {
    const students = useStudentStore((s) => s.students)
    const [sortAsc, setSortAsc] = useState(true)

    const sorted = [...students].sort((a, b) =>
        sortAsc ? a.gpa - b.gpa : b.gpa - a.gpa
    )

    return (
        <div>
            <button onClick={() => setSortAsc(!sortAsc)}>
                เรียง GPA {sortAsc ? '⬆️' : '⬇️'}
            </button>
            <table>
                <thead>
                    <tr>
                        <th>ชื่อ</th>
                        <th>GPA</th>
                        <th>ดูรายละเอียด</th>
                    </tr>
                </thead>
                <tbody>
                    {sorted.map((s) => (
                        <tr key={s.id}>
                            <td>{s.name} {s.surname}</td>
                            <td>{s.gpa}</td>
                            <td><Link href={`/student/${s.id}`}>ดูรายละเอียด</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
