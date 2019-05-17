# vue-img-url-suffix-for-alioss

## 场景
项目基于vue，同时使用阿里云oss图片，希望优化图片尺寸和体积。

## 使用
main.js
```js
import VueImgUrlSuffixForAlioss from 'vue-img-url-suffix-for-alioss';
```

```
// template
<img
  v-img-suffix="{width: 100,height: 100}"
  src="http://sitecdn.zcy.gov.cn/zcy-front-other-upload/1920x1200_cd38f61d8d608f8.png"
  alt=""
/>

```

## 配置项
- width: number,图片宽度
- height: number,图片高度
- l: number，图片最大边
- quality: number（60-100）,图片压缩质量，默认80
- mPad: boolean,是否补白，默认不补白
- color: 16位颜色值, 默认白色
- format: [jpg/png] 默认使用jpg，如果支持webp使用webp
