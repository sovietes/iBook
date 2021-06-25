import { Middleware } from '@nuxt/types'
import { $cookies } from '@/utils/nuxt-instance'

const guest: Middleware = ({ redirect }) => {
    const authenthicated = $cookies.get('token')

    if (authenthicated) {
        redirect({ path: '/' })
    }
}

export default guest
