import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeMode = 'light' | 'dark'

type ThemeState = {
    mode: ThemeMode
    toggleMode: () => void
    clear: () => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            mode: 'light',
            toggleMode: () =>
                set((state) => ({
                    mode: state.mode === 'dark' ? 'light' : 'dark',
                })),
            clear: () => set((_) => ({ mode: 'light' })),
        }),
        { name: 'themeStore' },
    ),
)
