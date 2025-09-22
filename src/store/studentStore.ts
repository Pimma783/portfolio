import { create } from "zustand";

export type Student = {
  id: string;
  name: string;
  surname: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  talent: string;
  reason: string;
  major: string;
  university: string;
  image?: string;
  portfolio?: string[];
};

type Store = {
  students: Student[];
  addStudent: (student: Student) => void;
};

export const useStudentStore = create<Store>((set) => ({
  students: [],
  addStudent: (student) =>
    set((state) => ({ students: [...state.students, student] })),
}));
