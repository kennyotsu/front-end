import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },

});

import App from 'app'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
// @ts-ignore
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
