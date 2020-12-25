<template>
  <el-form ref="form" label-width="80px">
    <el-form-item label="你的生日">
      <el-date-picker v-model="birth" type="date" placeholder="Pick a day">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="理想岁数">
      <el-input-number
        v-model="idealAge"
        :min="pastYear"
        :max="120"
        label="label"
      ></el-input-number>
    </el-form-item>
  </el-form>

  <div class="age-area">
    <div
      class="year-item"
      v-for="(item, index) in idealAge"
      :key="index"
      :class="{ past: item <= pastYear }"
    ></div>
  </div>
</template>

<script lang="ts" src="./RemainingLife.ts"></script>

<style lang="scss" scoped>
.age-area {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  justify-items: center;
  .year-item {
    border: 1px solid #000;
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    &.past {
      background-color: #ccc;
    }
  }
}
</style>
