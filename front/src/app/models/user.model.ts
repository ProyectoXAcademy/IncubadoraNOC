export interface User {
    RoleRoleId?: number;
    user_id: number,
    name: string,
    lastName: string,
    dni: number,
    date_of_birth: Date,
    email: string,
  }


  export interface UserRole {
    UserUserId: number,
    RoleRoleId: number
  }