import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import AccessibilityChecker from "@/components/AccessibilityChecker"

function App() {
  return (
    <>
      <AccessibilityChecker />
      <Analytics />
      <Pages />
      <Toaster />
    </>
  )
}

export default App 