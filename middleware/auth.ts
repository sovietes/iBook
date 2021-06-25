import { Middleware } from '@nuxt/types'
import { $cookies } from '@/utils/nuxt-instance'

const auth: Middleware = ({ redirect }) => {
    const authenthicated = $cookies.get('token')

    if (!authenthicated) {
        return redirect({ path: 'login' })
    }
}

export default auth
