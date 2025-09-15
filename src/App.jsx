import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ClientZone from './pages/ClientZone'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import ClientLogin from './pages/ClientLogin'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client-zone" element={<ClientZone />} />
          <Route path="/client-login/:clientId" element={<ClientLogin />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
