<template>
  <div>
    <section>
      <Header/>
      <div class="main">
        <Navbar/>
        <RouterView/>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import Intro from "@/components/Main/Intro.vue";
import Header from "@/components/layout/Header.vue";
</script>
<style>

.main{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
</style>
