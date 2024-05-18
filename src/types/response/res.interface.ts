export interface BaseRes {
    _id: string
    /* eslint-disable */
    [key: string | number | symbol]: any
}

export type TPageInfo = {
    page: number
    pageSize: number
    totalPage: number
    nextPage: number | null
    prevPage: number | null
    total: number
    totalUnRead?: number
}
export type FetchAllResponse<T> = { data: T[]; pageInfo: TPageInfo }