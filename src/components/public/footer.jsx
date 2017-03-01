// 引入 React
import React from 'react'

//引入 配置文件
import {footerText} from '../../utils/config'

// 引入布局样式
import styles from '../layouts.less'

// 方法
const Footer = () => <div className={styles.footer}>
  {footerText}
</div>

// 暴露方法
export default Footer;
