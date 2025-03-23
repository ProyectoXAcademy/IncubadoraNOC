export interface Courses {
    course_id?: number;
    name: string;
    description: string;
    long_description?: string; 
    category: string;
    inscription_requeriments?: string;
    approval_conditions?: string;
    teacher_id: number;
    teacherName?: string;
    active?: boolean;
    img: string;
  
    start_date?: string; 
    end_date?: string;   
    duration?: string;   
    modality?: 'Presencial' | 'Online' | 'Híbrido'; 
    level?: 'Básico' | 'Intermedio' | 'Avanzado';   
    price?: number;      
  }
  