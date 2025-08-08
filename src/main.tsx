import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx loaded');
const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  try {
    console.log('Creating root...');
    const root = createRoot(rootElement);
    console.log('Root created, rendering App...');
    root.render(<App />);
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering App:', error);
  }
} else {
  console.error('Root element not found!');
}
