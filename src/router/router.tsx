import { createBrowserRouter, redirect } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { routerData } from '@/router/config'
import Spin from '@/components/spin'

// 外部定义懒加载组件
const Layout = lazy(() => import(/* webpackChunkName: "Layout" */ '@/components/layout'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Spin />}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                index: true,
                lazy: async () => {
                    const { default: Login } = await import('@/page/login'); //注意：动态导入会分包哦
                    return {
                        Component: () => (
                            <Suspense fallback={<Spin />}>
                                <Login />
                            </Suspense>
                        )
                    };
                }
            },
            {
                path: routerData.exam.path,
                lazy: async () => {
                    const { default: Exam } = await import('@/page/exam');
                    return {
                        Component: () => (
                            <Suspense fallback={<Spin />}>
                                <Exam />
                            </Suspense>
                        )
                    }
                },
            }

        ]
    }
]);