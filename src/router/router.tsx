import { createBrowserRouter, redirect } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { routerData } from '@/router/config'
import Spin from '@/components/spin'

// 外部定义懒加载组件
const Layout = lazy(() => import(/* webpackChunkName: "Layout" */ '@/components/layout'));
const AdminManage = lazy(() => import('@/page/admin_manage'));
const CorrectExam = lazy(() => import('@/page/correct_exam'));
const CorrectExamList = lazy(() => import('@/page/correct_exam_list'));
const ExamHistory = lazy(() => import('@/page/exam_history'));
const ExamSelect = lazy(() => import('@/page/exam_select'));
const PersonInfo = lazy(() => import('@/page/person_info'));
const ReadExam = lazy(() => import('@/page/read_exam'));
const StudentManage = lazy(() => import('@/page/student_manage'));
const SubjectAdd = lazy(() => import('@/page/subject_add'));
const SubjectManage = lazy(() => import('@/page/subject_manage'));

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
            },
            {
                path: routerData.admin_manage.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <AdminManage />
                    </Suspense>
                ),
            },
            {
                path: routerData.correct_exam.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <CorrectExam />
                    </Suspense>
                ),
            },
            {
                path: routerData.correct_exam_list.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <CorrectExamList />
                    </Suspense>
                ),
            },
            {
                path: routerData.exam_history.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <ExamHistory />
                    </Suspense>
                ),
            },
            {
                path: routerData.exam_select.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <ExamSelect />
                    </Suspense>
                ),
            },
            {
                path: routerData.person_info.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <PersonInfo />
                    </Suspense>
                ),
            },
            {
                path: routerData.read_exam.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <ReadExam />
                    </Suspense>
                ),
            },
            {
                path: routerData.student_manage.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <StudentManage />
                    </Suspense>
                ),
            },
            {
                path: routerData.subject_add.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <SubjectAdd />
                    </Suspense>
                ),
            },
            {
                path: routerData.subject_manage.path,
                element: (
                    <Suspense fallback={<Spin />}>
                        <SubjectManage />
                    </Suspense>
                ),
            },

        ]
    },

]);