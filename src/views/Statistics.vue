<template>
    <Layout>
        <Tabs :data-source='typeList' class-prefix="type" :value.sync="type"/>
        <Tabs :data-source='intervalList' class-prefix="interval" :value.sync="intervalType"/>
        <ol>
            <li v-for="group in result" :key="group.id">
                <h3 class="title">{{beautyTitle(group.title)}}</h3>
                <ol>
                    <li v-for="item in group.items" class="record" :key="item.id">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>¥{{item.amount}}</span>
                    </li>
                </ol>
            </li>
        </ol>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Tabs from "@/components/Tabs.vue";
  import typeList from "@/constants/typeList";
  import intervalList from "@/constants/intervalList";
  import dayjs from "dayjs";

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = "-";
    intervalType = "day";
    intervalList = intervalList;
    typeList = typeList;

    beautyTitle(string: string) {
      const day = dayjs(string);
      const now = dayjs();
      if(day.isSame(now,'day')){return '今天'}
      if(day.isSame(now.subtract(1,'day'),'day')){return '昨天'}
      if(day.isSame(now.subtract(2,'day'),'day')) {return '前天'}
      if(day.isBefore(now.subtract(2,'day'),'day')&&day.isSame(now,'year')) {return day.format('M月D日')}
    }

    tagString(tags: Tag[]) {
      const names = tags.map(item => item.name);
      return names.length === 0 ? "无" : names.join(",");
    }

    get recordList() {
      return this.$store.state.recordList;
    }

    beforeCreate() {
      this.$store.commit("fetchRecordList");
    }

    get result() {
      type HashTableItem = {
        title: string
        items: RecordItem[]
      }
      const {recordList} = this;
      const hashTable: { [key: string]: HashTableItem } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createAt.split("T");
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;

    }
  }
</script>

<style lang="scss" scoped>
    ::v-deep .type-item {
        background: white;

        &.selected {
            background: #c4c4c4;
        }

        &::after {
            display: none;
        }
    }

    ::v-deep .interval-item {
        height: 48px;
    }

    %item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 16px;
        line-height: 24px;
    }

    .title {
        @extend %item;
        background: #e9e9e9;
    }

    .record {
        @extend %item;

    }

    .notes {
        margin-right: auto;
        margin-left: 8px;
        color: #999999;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>