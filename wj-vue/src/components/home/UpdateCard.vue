<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">最近更新</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2023/6/20" placement="top">
          <el-card>
            <h4>实现管理中心功能</h4>
            <p>代 提交于 2023.6.20</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/6/16" placement="top">
          <el-card>
            <h4>实现社区功能</h4>
            <p>封 提交于 2023.6.16</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/6/15" placement="top">
          <el-card>
            <h4>实现上传至服务器和输入 URL 两种方式添加封面</h4>
            <p>代 提交于 2023.6.15</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/6/14" placement="top">
          <el-card>
            <h4>实现图书分类功能</h4>
            <p>封 提交于 2023.6.14</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/6/14" placement="top">
          <el-card>
            <h4>实现图书分页，修复图书添加的 BUG</h4>
            <p>封 提交于 2023.6.14</p>
          </el-card>
        </el-timeline-item>
<!--        <el-timeline-item timestamp="2023/6/14" placement="top">-->
<!--          <el-card>-->
<!--            <h4>实现搜索框模糊查询</h4>-->
<!--            <p>代 提交于 2023.6.14</p>-->
<!--          </el-card>-->
<!--        </el-timeline-item>-->
<!--        <el-timeline-item timestamp="2023/6/14" placement="top">-->
<!--          <el-card>-->
<!--            <h4>实现图书修改功能</h4>-->
<!--            <p>代 提交于 2023.6.14</p>-->
<!--          </el-card>-->
<!--        </el-timeline-item>-->
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'UpdateCard'
  }
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1050px;
    text-align: left;
  }
</style>
