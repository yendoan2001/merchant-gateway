import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {useUserStore} from "@/features/auth/user.store";
import {useRedirectStore} from "@/stores/redirect.store";
import {CustomNextPage} from "@/configs/page";

export const authenticatedHook = (Component: CustomNextPage) => {
    const [processed, setProcess] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const user = useUserStore((state) => state.user);
    const setPath = useRedirectStore((state) => state.setPath);

    useEffect(() => {
        if (Component.public) {
            setProcess(true);
            return;
        }

        if (!user) {
            setPath(pathname);
            router.push('/login');
            return;
        }

        setProcess(true);
    }, [Component.public, pathname, router, setPath, user]);

    return processed;
};
