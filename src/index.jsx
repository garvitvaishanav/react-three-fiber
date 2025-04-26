import { ThreejsCanvas } from './canvas'
import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

root.render(
    <ThreejsCanvas />
)