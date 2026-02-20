import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import Problem from './pages/rb/Problem'
import Market from './pages/rb/Market'
import Architecture from './pages/rb/Architecture'
import HLD from './pages/rb/HLD'
import LLD from './pages/rb/LLD'
import Build from './pages/rb/Build'
import Test from './pages/rb/Test'
import Ship from './pages/rb/Ship'
import Proof from './pages/rb/Proof'

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/rb/01-problem" replace />} />
          <Route path="/rb/01-problem" element={<Problem />} />
          <Route path="/rb/02-market" element={<Market />} />
          <Route path="/rb/03-architecture" element={<Architecture />} />
          <Route path="/rb/04-hld" element={<HLD />} />
          <Route path="/rb/05-lld" element={<LLD />} />
          <Route path="/rb/06-build" element={<Build />} />
          <Route path="/rb/07-test" element={<Test />} />
          <Route path="/rb/08-ship" element={<Ship />} />
          <Route path="/rb/proof" element={<Proof />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}

export default App
