
import { Courses } from "./courses.model";

export interface Registration {
  registration_id: number;
  registration_date: Date;
  student_id: number;
  course_id: number;
  paid: boolean; 
  Courses?: Courses; 
}
