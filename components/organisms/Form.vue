<template>
    <div class="form-ibook">
        <div class="logo">
            <Logo />
        </div>
        <div class="presentation">
            <p>Bem-vindo(a) ao Dashboard</p>
            <p><b>Entre na sua conta</b></p>
        </div>
        <form>
            <input
                v-model="form.email"
                type="email"
                placeholder="E-mail"
                autocomplete="off"
            />
            <input
                v-model="form.password"
                type="password"
                placeholder="Senha"
                autocomplete="off"
            />
            <button type="submit" @click.prevent="login()">Entrar</button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        async login() {
            try {
                await auth.create(this.form)
                this.$router.push('/')
            } catch (e) {
                this.$router.push('/login')
            }
        }
    }
})
</script>

<style lang="scss" scoped>
.form-ibook {
    background: color(dark, darkest);
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    color: white;
    padding: 5rem 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .logo {
        width: 100px;
    }

    .presentation {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        p {
            font-size: 1.1rem;
            b {
                font-weight: 600;
                line-height: 1.4;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            background: transparent;
            border: 1px solid hsla(0, 0%, 96.9%, 0.5);
            padding: 0.5rem 1rem;
            border-radius: 5rem;
            color: #f7f7f7;
            width: 100%;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            margin-bottom: 0.5rem;
        }

        button {
            background: white;
            padding: 0.5rem 1rem;
            margin-top: 1rem;
            border-radius: 5rem;
            background: #f7f7f7;
            color: #292929;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            cursor: pointer;
            width: 100%;

            &:hover {
                transform: scale(1.1, 1.1);
            }
        }
    }
}
</style>
