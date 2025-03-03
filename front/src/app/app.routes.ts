import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CoursesComponent } from './views/courses/courses.component';
import { DashboardContentComponent } from './views/dashboard-content/dashboard-content.component';
import { MyAttendanceComponent } from './views/my-attendance/my-attendance.component';
import { ProfileComponent } from './views/profile/profile.component';
import { MyCoursesComponent } from './views/my-courses/my-courses.component';
import { MyGradesComponent } from './views/my-grades/my-grades.component';
import { MyEnrollmentsComponent } from './views/my-enrollments/my-enrollments.component';
import { MyPaymentsComponent } from './views/my-payments/my-payments.component';
import { CreateCourseComponent } from './views/create-course/create-course.component';
import { CreateUserRoleComponent } from './views/createUserRole/create-user-role.component';
import { CourseViewComponent } from './views/course-view/course-view.component';
import { AdminGradesComponent } from './views/admin-grades/admin-grades.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'faq', component:FAQComponent},
  { path:'contact', component:ContactComponent},
  { path:'about-us', component:AboutUsComponent},
  { path:'policies', component:PoliciesComponent},
  { path:'terms', component:TermsComponent},
  { path:'cookie-policies', component:CookiePoliciesComponent},

  // Rutas de autenticación
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  // Ruta Dashboard con rutas hijas
  {
    path: 'dashboard',
    component: DashboardContentComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'mycourses', component: MyCoursesComponent },
      { path: 'attendance', component: MyAttendanceComponent },
      { path: 'mygrades', component: MyGradesComponent },
      { path: 'myenrollments', component: MyEnrollmentsComponent },
      { path: 'mypayments', component: MyPaymentsComponent },
      { path: 'create-course', component: CreateCourseComponent },
      { path: 'create-user-role', component: CreateUserRoleComponent },
      { path: 'view-course/:course_id', component: CourseViewComponent},
      { path: 'admin-grades/:course_id', component: AdminGradesComponent},
      { path: 'admin-attendance/:course_id', component: AdminAttendanceComponent},





      // Redirigir a 'profile' si no se selecciona ninguna ruta hija
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },
  // Ruta comodín para manejar rutas no encontradas
  { path: '**', component: NotFoundComponent },
];