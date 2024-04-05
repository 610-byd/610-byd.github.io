<template>

  <header class="header" style="background: black;">
    <input type="checkbox" name="check" id="check">
    <!-- logo -->
    <h1 class="logo">webyd</h1>
    
    <!-- nav -->
    <nav class="nav">
      <RouterLink to="/"><h1 class="logo">webyd</h1></RouterLink>
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
        <i class="bx bx-menu menu"></i>
        <i class="bx bx-x close-menu"></i>
      </label>
    </div>
    
  </header>

  <router-view />

</template>

<script>
import {gsap} from 'gsap';


export default {
  name: 'App',
  setup(){
    onMounted(() => {
      gsap.from('.header', {
        y: -100,
        ease: "power1.out",
        duration: 2,
      })
    }) 
  }
}
</script>





<style scoped src="./index.css"></style>
