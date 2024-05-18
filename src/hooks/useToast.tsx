import type { AxiosError } from 'axios'
import { useCallback, useContext } from 'react'
import {NotificationContext} from "@/utils/providers/NotificationProvider";

export const useToast = () => {
    const api = useContext(NotificationContext)

    const commonErrorHandle = useCallback(
        (error: AxiosError<{ messages?: string[] }>) => {
            const errorMessage = error?.response?.data?.messages
            const message = errorMessage ? (
                <code>
                    {errorMessage.map((message) => (
                        <span key={message}>
							{message}
                            <br />
						</span>
                    ))}
                </code>
            ) : (
                'Đã xảy ra lỗi!'
            )
            api.warning({
                message: 'Lỗi',
                description: message || 'Đã xảy ra lỗi!',
            })
        },
        [api],
    )

    const commonSuccessHandle = useCallback(() => {
        api.success({
            message: 'Thành công',
            description: 'Thao tác thành công',
        })
    }, [api])

    return { commonErrorHandle, commonSuccessHandle }
}
