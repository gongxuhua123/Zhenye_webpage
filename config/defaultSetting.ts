import {Settings as LayouSettings } from "@ant-design/pro-components";

const Settings:LayouSettings &{
  pwa?: boolean;
  logo?: string;
  headerHeight?:Number
}={
  title: false,
  pwa: false,
  layout: 'side',
  logo: "/icon/log.jpg",
  headerHeight:65,
  iconfontUrl: '',
}

export default Settings;
