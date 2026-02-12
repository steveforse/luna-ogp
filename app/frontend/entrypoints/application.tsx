import React from "react"
import { createRoot } from "react-dom/client"
import { MantineProvider, Button } from "@mantine/core"
import "@mantine/core/styles.css"

function App() {
  return (
    <MantineProvider>
      <Button>My Mantine Button</Button>
    </MantineProvider>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("root")
  if (el) {
    createRoot(el).render(<App />)
  }
})
