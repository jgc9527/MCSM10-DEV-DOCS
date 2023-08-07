<script setup lang="ts">
import type { LayoutCard } from "../../../types/index";
import { ref, computed, reactive, onMounted } from "vue";
import type { MapData } from "../../../types/index";
import type { FormInstance } from "ant-design-vue";
import { BuildOutlined, BulbOutlined } from "@ant-design/icons-vue";

const open = ref(false);
const card = ref<LayoutCard>();
let resolveFn: (value: unknown) => void;

const formData = ref<MapData<string>>({});
const formRef = ref<FormInstance>();

const onClose = () => {
  open.value = false;
  resolveFn(false);
};
const openDialog = (cardInfo: LayoutCard) => {
  formData.value = {};
  open.value = true;
  if (!cardInfo.meta) cardInfo.meta = {};
  card.value = cardInfo;
  return new Promise((resolve) => {
    resolveFn = resolve;
  });
};

const onSubmit = async () => {
  const result = await formRef.value?.validate();
  if (card.value) card.value.meta = result;

  open.value = false;
  resolveFn(true);
};

defineExpose({
  openDialog,
});
</script>

<template>
  <a-drawer
    title="请完善卡片所需参数"
    placement="bottom"
    :open="open"
    @close="onClose"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
      <a-button type="primary" @click="onSubmit">确定</a-button>
    </template>
    <div v-if="card && card.meta" class="app-max-width">
      <a-form
        ref="formRef"
        :model="formData"
        layout="vertical"
        autocomplete="off"
      >
        <a-row :gutter="[20, 20]">
          <a-col :span="24" :md="12" v-for="item in card.params">
            <a-form-item :label="item.label" :name="item.field">
              <a-input
                v-if="item.type === 'string'"
                v-model:value="formData[item.field]"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <p>
        <BulbOutlined />
        <span>
          如果不填写任何参数，新增的卡片将自动根据地址去获取数据，但这不适用于所有页面，只有在特定页面中可以正常使用。
        </span>
      </p>
      <p>列如：在不填写参数的情况下， “终端卡片” 只能在 “实例详情” 页使用。</p>
    </div>
  </a-drawer>
</template>
