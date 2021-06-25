import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Credentials } from '@/models'
import { $axios, $cookies } from '@/utils/nuxt-instance'

type Token = string | null

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
    private token = '' as Token

    public get $token() {
        return this.token
    }

    @Mutation
    private SET_TOKEN(payload: any) {
        this.token = payload
    }

    @Action
    public async create(payload: Credentials) {
        try {
            const { accessToken } = await $axios.$post('/login', payload)
            console.log(accessToken)
            $cookies.set('token', accessToken, {
                path: '/',
                maxAge: 60 * 60 * 24 * 30
            })

            this.context.commit('SET_TOKEN', accessToken)
        } catch (e) {
            console.log(e)
        }
    }

    @Action
    public update() {
        const token = $cookies.get('token') || null
        this.context.commit('SET_TOKEN', token)
    }

    @Action
    public delete() {
        $cookies.remove('token')
        this.context.commit('SET_TOKEN', null)
    }
}
