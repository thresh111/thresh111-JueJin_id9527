<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>相关文章</span>
        <!-- <el-button class="button" text>Operation button</el-button> -->
      </div>
    </template>
    <div class="text item">
      <el-row class="row-bg">
        <el-link target="_blank">点击</el-link>
      </el-row>
      <el-row class="row-bg">
        <el-link target="_blank">点击</el-link>
      </el-row>
    </div>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
