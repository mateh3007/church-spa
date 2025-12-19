import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DefaultLayout from './layouts/DefaultLayout'
import Companies from './pages/components/Companies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/empresas" element={<Companies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
