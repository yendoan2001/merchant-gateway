import {JwtRoles} from "@/types/auth/auth.interface";


export type MeResponse = { _id: string; email: string; name: string; avatarUrl?: string; roles: JwtRoles[] };
export type LoginResponse = { accessToken: string; user: MeResponse };
