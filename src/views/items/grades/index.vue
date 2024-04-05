<script setup>
</script>

<template>
  <h1 class="title"></h1>
  <h1 class="tlt">登分器</h1>

  <main>
    <button @click="handleInput" class="MobileBtn">Next</button>
    <div class="btn">
      <button class="animated-button" @click="handleInput">
        <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
          </path>
        </svg>
        <span class="text">Next</span>
        <span class="circle"></span>
        <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
          </path>
        </svg>
      </button>
    </div>


    <label>
      <input type="checkbox" v-model="isFullPerson" @click="CheckToCalculateGroupAverages" />
      是否去除未考式人员
    </label>


    <div class="input-container">
      <input type="number" id="input" required="" v-model="ArrNum" @input="fetchArrNum">
      <label for="input" class="label">输入学号</label>
      <div class="underline"></div>
    </div>
    <input type="number" required="" v-model="ArrNum" @input="fetchArrNum" class="MobileInput">


    <h2>当前学生：{{ ArrName }}</h2>


    <div class="input-container">
      <input type="number" id="input" required="" v-model="grades" @keyup.enter="handleInput">
      <label for="input" class="label">输入其分数</label>
      <div class="underline"></div>
    </div>
    <input type="number" required="" v-model="grades" @keyup.enter="handleInput" class="MobileInput">


    <button @click="handleInputToExpert">导出</button>


    <button @click="test">测试</button>


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
            <p v-for="grade in RawGrades">{{ grade }}</p>
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
import data from '../../../components/data.js';
import { utils, writeFileXLSX } from 'xlsx';



export default {

  setup() {
    // 定义数据
    const DataArr = reactive(data);
    const ArrIndex = ref(0)//原数组索引
    const ArrNum = ref(''); //学号（输入值）
    const ArrName = ref(''); //姓名
    const grades = ref(''); //分数（输入值）
    const names = ref(DataArr.map(item => item.name));
    const nums = ref(DataArr.map(item => item.num));
    const RawGrades = ref(DataArr.map(item => item.grade));
    const avgEverySeven = ref([]);
    const isFullPerson = ref(false);


    onMounted(() => {
    })

    /**
     * 测试
     */
    function test() {
      console.log(RawGrades.value);
      console.log(isFullPerson.value);
    }


    /**
     * 通过将学号减一的方式获取正确数组的索引
     */
    function fetchArrNum() {
      if (ArrNum.value >= 0 && ArrNum.value <= DataArr.length) {
        ArrIndex.value = ArrNum.value - 1;
        fatchname();

      } else {
        alert('学号输入有误');
      }
    }
    /**
     * 获取学号对应的姓名，并显示
     */

    function fatchname() {
      ArrName.value = DataArr[ArrIndex.value].name;
    }
    /**
     * 将输入的分数添加到原分数数组中
     */
    function handleInput() {
      if (grades.value >= 0 && grades.value) {
        RawGrades.value[ArrIndex.value] = grades.value;
        grades.value = '';
        ArrNum.value = '';
        ArrName.value = '';
        calculateGroupAverages(RawGrades.value);
      } else {
        alert('成绩或学号输入有误');
      }
    }

    /**
    * 将输入的分数添加到原分数数组中
    */
    function handleInputToExpert() {
      grades.value = '';
      ArrNum.value = '';
      ArrName.value = '';
      calculateGroupAverages(RawGrades.value);
      exportResult();
    }

    /**
     * 计算每组（默认七个）原始成绩的平均分，若最后不足七个则按剩余数量计算平均数。
     * 该函数是一个计算属性，不接受参数。
     *
     * @returns {Array} 返回一个包含每组成绩平均分的数组。
     */
    function calculateGroupAverages(scores) {
      const groupSizes = 7; // 每隔七个元素进行平均值计算
      let totalScore = 0;
      let numGroups = 0;
      let groupAverages = [];

      if (!isFullPerson.value == false) {
        for (let i = 0; i < scores.length; i += groupSizes) {
          const groupEnd = Math.min(i + groupSizes, scores.length);
          const groupScores = scores.slice(i, groupEnd);
          const rightScores = groupScores.filter(score => score !== null && score !== undefined && score !== 0);
          const groupAverage =
            rightScores.reduce((sum, score) => sum + score, 0) / rightScores.length;
          totalScore += rightScores;
          numGroups++;
          groupAverages.push(groupAverage);
        }
      } else {
        for (let i = 0; i < scores.length; i += groupSizes) {
          const groupEnd = Math.min(i + groupSizes, scores.length);
          const groupScores = scores.slice(i, groupEnd);
          const groupAverage = groupScores.reduce((sum, score) => sum + score, 0) / groupScores.length;
          totalScore += groupScores;
          numGroups++;
          groupAverages.push(groupAverage);
        }
      }

      avgEverySeven.value = groupAverages;
    }


    function CheckToCalculateGroupAverages() {
      setTimeout(() => {
        calculateGroupAverages(RawGrades.value)
      }, 300)
    }


    /**
     * 完结使用
     * 导出结果并下载
     */
    function exportResult() {
      RawGrades.value.forEach((number, index) => {
        DataArr[index].grade = number;
      });
      // const newArray = markUnpassedPoint(DataArr);
      addTeamGrade(DataArr);
    }
    /**
     * 标记未及格成绩
     * @param {} objects 
     */
    // function markUnpassedPoint(objects) {
    //   return objects.map(obj => {
    //     if (obj.grade < 60) {
    //       return { ...obj, isUnpass: true };
    //     }
    //     return obj;
    //   });
    // }

    /**
     * 将小组平均分合并入成绩数组
     * @param {} objects 
     */

    function addTeamGrade(objects) {
      const newArray = [];
      let team = 1
      let avgIndex = 0

      objects.forEach((item, index) => {
        newArray.push(item);

        if ((index + 1) % 7 === 0) {
          newArray.push({ num: `均分`, name: `第${team++}组`, grade: `平均分${avgEverySeven.value[avgIndex++]}` });
        }
      });
      exportFile(newArray);
    }


    function exportFile(src) {
      /* generate worksheet from state */
      const ws = utils.json_to_sheet(src);
      /* create workbook and append worksheet */
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Data");
      /* export to XLSX */
      writeFileXLSX(wb, "result.xlsx");
    }



    // let str = `num,name,grade\n`
    // const download = (str, data) => {
    //   // 增加\t为了不让表格显示科学计数法或者其他格式
    //   for (let i = 0; i < data.length; i++) {
    //     for (const key in data[i]) {
    //       str += `${data[i][key] + '\t'},`;
    //     }
    //     str += '\n';
    //   }
    //   // encodeURIComponent解决中文乱码
    //   const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    //   // 通过创建a标签实现
    //   const link = document.createElement("a");
    //   link.href = uri;
    //   // 对下载的文件命名
    //   link.download = "下载数据.csv";
    //   link.click();
    // }







    // 返回需要暴露给模板的数据和方法
    return {
      isFullPerson,
      RawGrades,
      nums,
      names,
      ArrNum,
      ArrName,
      grades,
      ArrIndex,
      avgEverySeven,
      fetchArrNum,
      handleInput,
      handleInputToExpert,
      CheckToCalculateGroupAverages,
      exportResult,
      test,
    };
  }
}

</script>
../../../components/data.js