import '@styles/app.scss'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from '@routes'
import { LoginPage, HomePage } from '@pages'
import { AuthProvider } from '@services'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PublicRoute path="/login" component={LoginPage} />
            <PrivateRoute path="/" component={HomePage} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
