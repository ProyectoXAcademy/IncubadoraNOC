export interface Courses {
    course_id?: number;
    name: string;
    description: string;
    long_description?: string; // ✅ nuevo
    category: string;
    inscription_requeriments?: string;
    approval_conditions?: string;
    teacher_id: number;
    teacherName?: string;
    active?: boolean;
    img: string;
  
    start_date?: string; // ✅ nuevo (formato ISO: "2025-04-01")
    end_date?: string;   // ✅ nuevo
    duration?: string;   // ✅ nuevo
    modality?: 'Presencial' | 'Online' | 'Híbrido'; // ✅ nuevo
    level?: 'Básico' | 'Intermedio' | 'Avanzado';   // ✅ nuevo
    price?: number;      // ✅ nuevo
  }
  