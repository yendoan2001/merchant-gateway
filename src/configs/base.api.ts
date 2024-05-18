import type { AxiosRequestConfig } from 'axios'
import {BaseRes, FetchAllResponse} from "@/types/response/res.interface";
import { api } from './api.config';

class BaseApi<T extends BaseRes> {
    protected readonly path: string
    protected readonly url: string
    constructor({ path, url }: { path?: string; url?: string }) {
        this.path = path || ''
        this.url = url || ''
    }
    create = (dto: Omit<T, '_id'>, configs?: AxiosRequestConfig<T>) =>
        api.post<T>(this.url || this.path, dto, configs)
    fetch = (configs?: AxiosRequestConfig<T>) =>
        api.get<FetchAllResponse<T>>(this.url || this.path, configs)
    updatePatch = (
        id: string,
        dto: Omit<Partial<T>, '_id'>,
        configs?: AxiosRequestConfig<T>,
    ) => api.patch<T>(`${this.url || this.path}/${id}`, dto, configs)
    updatePut = (
        id: string,
        dto: Omit<Partial<T>, '_id'>,
        configs?: AxiosRequestConfig<T>,
    ) => api.put<T>(`${this.url || this.path}/${id}`, dto, configs)
    delete = (id: string, configs?: AxiosRequestConfig<T>) =>
        api.delete<T>(`${this.url || this.path}/${id}`, configs)
}
export default BaseApi
