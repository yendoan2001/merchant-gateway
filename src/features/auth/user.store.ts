import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import omit from 'lodash/omit';
import {LoginResponse, MeResponse} from '@/types/auth/login.interface';

export const MY_NOTE_USER_STORAGE = 'MY_NOTE_USER_STORAGE';

interface UserState {
    user?: MeResponse;
    accessToken?: string;
    setUser: (user: MeResponse) => void;
    login: (user: LoginResponse) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            setUser: (user) => set(() => ({ user })),
            login: (res) => set(() => ({ user: res.user, accessToken: res.accessToken })),
            logout: () => set((state) => omit(state, ['user', 'accessToken']), true),
        }),
        {
            name: MY_NOTE_USER_STORAGE,
        }
    )
);
