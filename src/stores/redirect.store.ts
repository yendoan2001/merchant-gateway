import { create } from 'zustand';

interface RedirectState {
    path: string;
    setPath: (redirect: string) => void;
}

export const useRedirectStore = create<RedirectState>()((set) => ({
    path: '/',
    setPath: (redirect) => set(() => ({ path: redirect })),
}));
