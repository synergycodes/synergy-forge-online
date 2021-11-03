import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/system'
import { theme } from './consts/theme'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
