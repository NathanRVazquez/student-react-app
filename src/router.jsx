import {createBrowserRouter} from 'react-router-dom'
import {App} from './App.jsx'
import {StudentDetailPage} from './pages/StudentPage.jsx'
import { SubmitStudentPage } from './pages/SubmitStudentPage.jsx'
import { RegisterPage } from './pages/RegisterPage.jsx'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path:'/student/:sId',
        element: <StudentDetailPage />,
    },
    {
        path:'/student/add-student',
        element: <SubmitStudentPage />,
    },
    {
        path:'/register',
        element: <RegisterPage />,
    }
])