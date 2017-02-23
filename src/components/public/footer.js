// 引入 React
import React from 'react';
// 引入布局样式
import styles from '../layouts.less';

// 方法
const Footer = (props) => {
  return (
    <div className={styles.con}>
      版权所有 © 2017 湖南猛势信息科技有限公司
    </div>
  );
};

// 参数验证
Footer.propTypes = {};

// 暴露方法
export default Footer;
