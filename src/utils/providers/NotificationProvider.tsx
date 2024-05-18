import { notification } from 'antd'
import type { NotificationInstance } from 'antd/lib/notification/interface'
import type { FC, ReactNode } from 'react'
import { createContext } from 'react'

export const NotificationContext = createContext<NotificationInstance>(
    {} as NotificationInstance,
)
type PropsNotification = {
    children: ReactNode
}
export const NotificationsProvider: FC<PropsNotification> = ({ children }) => {
    const [api, contextHolder] = notification.useNotification({
        placement: 'bottomRight',
    })
    return (
        <NotificationContext.Provider value={api}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    )
}
