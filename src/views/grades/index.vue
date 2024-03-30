<script setup>

</script>

<template>
  <header>
    <h1 class="title">登分器</h1>
  </header>
  <main>
    <button @click="handleInput">下一个</button>
    <input type="number" v-model="arrnum" @input="fetcharrnum" />
    <p>当前学生：{{ arrname }}</p>
    <input type="number" v-model="grades" @keyup.enter="handleInput" />
    <div class="container">
      <div class="row">
        <div class="column">
          <p v-for="num in nums">{{ num }}</p>
        </div>
        <div class="column">
          <p v-for="name in names">{{ name }}</p>
        </div>
        <div class="column">
          <p v-for="grade in rawgrades" contenteditable="true">{{ grade }}</p>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.row {
  display: flex;
  align-items: center;
}

.column {
  flex-grow: 1;
  margin-right: 3rem;
  /* 添加间隔 */
}

</style>

<script>

import { ref, reactive } from 'vue';
import data from '../../components/data.js';


export default {
  setup() {
    // 定义数据
    const dataArr = reactive(data);
    const index = ref(0)//原数组索引
    const arrnum = ref(''); //学号（输入值）
    const arrname = ref(''); //姓名
    const grades = ref(''); //分数（输入值）
    const names = ref(dataArr.map(item => item.name));
    const nums = ref(dataArr.map(item => item.num));
    const rawgrades = ref(dataArr.map(item => item.grade));

    /**
     * 通过将学号减一的方式获取正确数组的索引
     */
    function fetcharrnum() {
      if (arrnum.value >= 0 && arrnum.value <= dataArr.length) {
        index.value = arrnum.value - 1;
        fatchname();

      } else {
        alert('学号输入有误');
      }
    }
    /**
     * 获取学号对应的姓名，并显示
     */

    function fatchname() {
      arrname.value = dataArr[index.value].name;
    }
    /**
     * 将输入的分数添加到原分数数组中
     */
    function handleInput() {
      if (grades.value >= 0 && grades.value) {
        rawgrades.value[index.value] = grades.value;
        grades.value = '';
        arrnum.value = '';
        arrname.value = '';
      } else {
        alert('成绩输入有误');
      }
    }

    // 返回需要暴露给模板的数据和方法
    return {
      rawgrades,
      nums,
      names,
      arrnum,
      arrname,
      grades,
      index,
      fetcharrnum,
      handleInput,
    };
  }
}

</script>
