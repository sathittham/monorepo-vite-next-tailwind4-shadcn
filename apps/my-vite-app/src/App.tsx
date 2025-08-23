import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/auth-context'
import { ProtectedRoute } from './components/protected-route'
import LoginPage from './app/login/page'
import DashboardPage from './app/dashboard/page'
import DataLibraryPage from './app/data-library/page'
import ReportsPage from './app/reports/page'
import LayoutExamplesPage from './app/layout-examples/page'
import EmptyExamplePage from './app/empty-example/page'
import SimplePageExample from './app/simple-page/page'
import SettingsPage from './app/settings/page'
import HelpPage from './app/help/page'
import SearchPage from './app/search/page'
import NotFoundPage from './app/404/page'

function AppRoutes() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/data-library" 
        element={
          <ProtectedRoute>
            <DataLibraryPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/reports" 
        element={
          <ProtectedRoute>
            <ReportsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/layout-examples" 
        element={
          <ProtectedRoute>
            <LayoutExamplesPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/empty-example" 
        element={
          <ProtectedRoute>
            <EmptyExamplePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/simple-page" 
        element={
          <ProtectedRoute>
            <SimplePageExample />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/help" 
        element={
          <ProtectedRoute>
            <HelpPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/search" 
        element={
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/" 
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} 
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App