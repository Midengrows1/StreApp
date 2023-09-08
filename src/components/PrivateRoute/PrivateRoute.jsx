import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
	const isAuth = useSelector(state => state.auth)

	const location = useLocation()
	return !!isAuth.userToken === true ? (
		<Outlet />
	) : (
		<Navigate to='/auth' state={{ from: location }} replace />
	)
}

export default PrivateRoute
