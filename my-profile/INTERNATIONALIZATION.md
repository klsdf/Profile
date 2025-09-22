# 国际化支持说明

本项目已成功添加了Vue I18n国际化支持，支持中文、英文和日文三种语言。

## 功能特性

- ✅ 支持中文（zh-CN）、英文（en-US）和日文（ja-JP）三种语言
- ✅ 自动检测浏览器语言设置
- ✅ 语言选择器，用户可以手动切换语言
- ✅ 语言偏好保存在本地存储中
- ✅ 所有页面和组件都已国际化

## 文件结构

```
src/
├── locales/
│   ├── index.ts          # i18n配置文件
│   ├── zh-CN.ts         # 中文翻译文件
│   ├── en-US.ts         # 英文翻译文件
│   └── ja-JP.ts         # 日文翻译文件
├── components/
│   └── LanguageSwitcher.vue  # 语言切换组件
└── types/
    └── i18n.d.ts        # TypeScript类型声明
```

## 使用方法

### 1. 在模板中使用翻译

```vue
<template>
  <div>
    <h1>{{ $t('pages.gamePortfolio') }}</h1>
    <p>{{ $t('common.loading') }}</p>
  </div>
</template>
```

### 2. 在脚本中使用翻译

```vue
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const message = t('common.error')
</script>
```

### 3. 添加新的翻译

在 `src/locales/zh-CN.ts`、`src/locales/en-US.ts` 和 `src/locales/ja-JP.ts` 中添加新的翻译键值对：

```typescript
// zh-CN.ts
export default {
  newSection: {
    newKey: '新的翻译内容'
  }
}

// en-US.ts
export default {
  newSection: {
    newKey: 'New translation content'
  }
}

// ja-JP.ts
export default {
  newSection: {
    newKey: '新しい翻訳内容'
  }
}
```

## 语言切换

用户可以通过页面右上角的语言选择器来切换语言。语言偏好会自动保存到本地存储中。

## 添加新语言

要添加新的语言支持：

1. 在 `src/locales/` 目录下创建新的语言文件（如 `ko-KR.ts`）
2. 在 `src/locales/index.ts` 中导入新语言文件
3. 在 `getDefaultLocale` 函数中添加新语言的检测逻辑
4. 在 `supportedLocales` 数组中添加新语言
5. 更新 `messages` 对象包含新语言

## 注意事项

- 所有翻译键都使用点号分隔的层级结构
- 翻译文件使用TypeScript导出，确保类型安全
- 语言切换器会自动保存用户偏好
- 项目启动时会自动检测浏览器语言设置
