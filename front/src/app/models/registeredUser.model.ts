export interface LoggedUser {
  user_id: number;
  name: string;
  lastName: string;
  dni: number;
  date_of_birth: Date;
  email: string;
  Roles: Role[];  // Relación con los roles
}

export interface Role {
  role_id: number;
  name: string;
}

export interface UserRole {
  UserUserId: number;
  RoleRoleId: number;
}