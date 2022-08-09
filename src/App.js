import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from './routes/routes'

import { AppHeader, MobileMenu } from 'components'

function App() {
  const [isOpen, setIsOpen] = React.useState(false)

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
      {isOpen && <MobileMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />}
        <div className={`${isOpen && 'hidden'}`}>
          <AppHeader onToggle={() => setIsOpen(!isOpen)} />
          <Routes />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
