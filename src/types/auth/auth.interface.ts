
export interface JwtRoles {
    _id: string;
    roles: string[];
}

export interface JwtPayload {
    _id: string;
    email: string;
    roles?: JwtRoles[];
}
