import { NextPage } from 'next';

export type CustomNextPage<P = object> = NextPage<P> & {
    hideSidebar?: boolean;
    public?: boolean;
};
