<script setup>
</script>

<template>
  <h1 class="title"></h1>
  <h1 class="tlt">登分器</h1>

  <main>
    <button @click="handleInput" v-if="isMobile">下一个</button>
    <div class="btn">
      <button class="animated-button" @click="handleInput" v-if="!isMobile">
        <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
          </path>
        </svg>
        <span class="text">下一个</span>
        <span class="circle"></span>
        <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
          </path>
        </svg>
      </button>
    </div>

    <div class="input-container" v-if="!isMobile">
      <input type="number" id="input" required="" v-model="arrnum" @input="fetcharrnum">
      <label for="input" class="label">输入学号</label>
      <div class="underline"></div>
    </div>
    <input type="number" required="" v-model="arrnum" @input="fetcharrnum" v-if="isMobile" >
    <h2>当前学生：{{ arrname }}</h2>
    <div class="input-container" v-if="!isMobile">
      <input type="number" id="input" required="" v-model="grades" @keyup.enter="handleInput">
      <label for="input" class="label">输入其分数</label>
      <div class="underline"></div>
    </div>
    <input ype="number" required="" v-model="grades" @keyup.enter="handleInput" v-if="isMobile">
    <div class="input-box">
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
          <div class="column">
            <p v-for="(teamgrade, index) in avgEverySeven" :key="index">{{ teamgrade.toFixed(2) }}</p>

          </div>


        </div>
      </div>
    </div>

  </main>


</template>

<style scoped src="./index.css"></style>

<script>
import data from '../../components/data.js';


export default {

  setup() {
    // 定义数据
    const dataArr = reactive(data);
    const ArrIndex = ref(0)//原数组索引
    const arrnum = ref(''); //学号（输入值）
    const arrname = ref(''); //姓名
    const grades = ref(''); //分数（输入值）
    const names = ref(dataArr.map(item => item.name));
    const nums = ref(dataArr.map(item => item.num));
    const rawgrades = ref(dataArr.map(item => item.grade));
    const isMobile = ref(false);

    onMounted(() => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 768) {
        isMobile.value = true;
      }
    })





    /**
     * 通过将学号减一的方式获取正确数组的索引
     */
    function fetcharrnum() {
      if (arrnum.value >= 0 && arrnum.value <= dataArr.length) {
        ArrIndex.value = arrnum.value - 1;
        fatchname();

      } else {
        alert('学号输入有误');
      }
    }
    /**
     * 获取学号对应的姓名，并显示
     */

    function fatchname() {
      arrname.value = dataArr[ArrIndex.value].name;
    }
    /**
     * 将输入的分数添加到原分数数组中
     */
    function handleInput() {
      if (grades.value >= 0 && grades.value) {
        rawgrades.value[ArrIndex.value] = grades.value;
        grades.value = '';
        arrnum.value = '';
        arrname.value = '';
        avgEverySeven();
      } else {
        alert('成绩输入有误');
      }
    }

    /**
     * 计算每组（默认七个）原始成绩的平均分，若最后不足七个则按剩余数量计算平均数。
     * 该函数是一个计算属性，不接受参数。
     *
     * @returns {Array} 返回一个包含每组成绩平均分的数组。
     */
    const avgEverySeven = computed(() => {
      const results = []; // 用于存储每组成绩的平均分结果

      // 遍历原始成绩数组，处理最后一组可能不足七个的情况
      for (let i = 0; i <= rawgrades.value.length - 7; i += 7) {
        const end = Math.min(i + 6, rawgrades.value.length); // 确定当前子数组结束位置
        const subArr = rawgrades.value.slice(i, end); // 截取当前子数组
        const sum = subArr.reduce((acc, curr) => acc + curr, 0); // 计算子数组总分
        const avg = sum / subArr.length; // 计算平均分
        results.push(avg); // 将平均分添加到结果数组中
        console.log(subArr)
      }

      // 处理剩余不足七个的成绩（如果存在）
      if (rawgrades.value.length % 7 !== 0) {
        const remainingSubArr = rawgrades.value.slice(-Math.min(7, rawgrades.value.length % 7));
        const remainingSum = remainingSubArr.reduce((acc, curr) => acc + curr, 0);
        const remainingAvg = remainingSum / remainingSubArr.length;
        results.push(remainingAvg);
      }

      return results; // 返回结果数组
    });

    // 返回需要暴露给模板的数据和方法
    return {
      isMobile,
      rawgrades,
      nums,
      names,
      arrnum,
      arrname,
      grades,
      ArrIndex,
      avgEverySeven,
      fetcharrnum,
      handleInput,
    };
  }
}

</script>
