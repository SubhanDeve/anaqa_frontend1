// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'
import { toast } from 'react-hot-toast'

// ** Defaults
const defaultProvider = {
  user: {
    id: 1,
    name: "Anaqa Admin",
    email: "admin@anaqa.com",
    role: "admin"
  },
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      const storedUser = JSON.parse(window.localStorage.getItem('userData'))

      if (storedToken) {
        setLoading(false)
        setUser({ ...storedUser })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback) => {
    const { email, password, role } = params
    const findAuthConfig = authConfig[role]
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + findAuthConfig?.loginEndpoint, { email, password })
      .then(async res => {
        const { data: response } = res
        if (response?.success) {
          window.localStorage.setItem(findAuthConfig?.storageTokenKeyName, response?.user?.token)
          const returnUrl = router.query.returnUrl
          setUser({ ...response?.user?.user, role: "admin" })
          toast.success(response?.user?.message)
          window.localStorage.setItem('userData', JSON.stringify({ ...response?.user?.user, role: "admin" }))
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          router.replace(redirectURL)
        } else {
          toast.error(response?.message)
        }
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
