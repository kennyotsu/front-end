import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();

import App from 'app'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
// @ts-ignore
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
