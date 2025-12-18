<template>
  <div class="auth-container">
    <v-container class="fill-height py-0">
      <v-row>
        <v-col cols="10"  md="8" lg="6" xl="4" offset="1" offset-sm="1" offset-md="2" offset-lg="3" offset-xl="4" class="d-flex align-center justify-center" style="min-height: 100vh;">
          <v-card elevation="12" class="w-100 px-5 py-4 px-md-15 py-md-15 rounded-xl">
            <div class="auth-header text-center mb-10">
              <div class="logo">
                <v-icon size="52" color="white">mdi-church</v-icon>
              </div>
              <h1 class="text-h5 font-weight-bold mt-4 mb-2">Church Manager</h1>
              <p class="text-body-2 text-medium-emphasis">Faça login para continuar</p>
            </div>

            <v-form @submit.prevent="handleLogin" class="auth-form">
              <v-text-field
                v-model="email"
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                density="comfortable"
                required
                class="mb-4"
              />

              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Senha"
                placeholder="••••••••"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                density="comfortable"
                required
                class="mb-4"
              />

              <v-btn
                type="submit"
                color="primary"
                size="large"
                block
                class="mb-4"
                :loading="loading"
              >
                <span>Entrar</span>
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-form>

            <div class="text-center mt-10">
              <p class="text-body-2 text-medium-emphasis mb-2">Primeira vez aqui?</p>
              <v-btn
                variant="text"
                color="primary"
                @click="goToOnboarding"
              >
                Criar nova organização
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authCustomApi } from './auth.api'

const router = useRouter()
const $api = authCustomApi()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    await $api.login({ email: email.value, password: password.value })
    
    router.push('/dashboard')
  } catch (error) {
    console.error('Erro no login:', error)
  } finally {
    loading.value = false
  }
}

const goToOnboarding = () => {
  router.push('/auth/onboarding')
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #4299e1 100%);
}

.auth-header .logo {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #1e3a5f 0%, #4299e1 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

</style>