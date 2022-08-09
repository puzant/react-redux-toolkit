import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from './routes/routes'

import { AppHeader } from 'components/appHeader'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { 
        retry: false ,
        refetchOnWindowFocus: false,
      },
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppHeader />
        <Routes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
