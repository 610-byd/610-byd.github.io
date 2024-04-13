<template>

  <header class="header" style="background: black;">
    <input type="checkbox" name="check" id="check" :checked="checked">
    <!-- logo -->
    <h1 class="logo">webyd</h1>

    <!-- nav -->
    <nav class="nav">
      <h1 class="logo">webyd</h1>
      <div class="divider"></div>
      <RouterLink to="/"><span>home</span></RouterLink>
      <RouterLink to="/about"><span>about</span></RouterLink>
      <RouterLink to="/contact"><span>contact</span></RouterLink>
      <RouterLink to="/items"><span>Items</span></RouterLink>
    </nav>
    <!-- 用户表单按钮 -->
    <div class="user-form-group">
      <RouterLink to="/login" class="login">Login</RouterLink>
      <RouterLink to="/register" class="signup">Sign Up</RouterLink>
      <label for="check">
        <i class="bx bx-menu menu" @click="jump()"></i>
        <i class="bx bx-x close-menu"></i>
      </label>
    </div>

  </header>

  <router-view />

</template>

<script>
import router from './router';


export default {
  name: 'App',
  setup() {
    function jump() {
      router.push('/blankpage')
    } 
    
    return {
      jump,
    }
  }
}
</script>





<style scoped src="./index.css"></style>
