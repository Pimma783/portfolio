'use client'

import { useParams } from 'next/navigation'
import StudentDetail from '../../../../components/StudentDetail'

export default function StudentDetailPage() {
  const { id } = useParams()
  return <StudentDetail id={id as string} />
}
