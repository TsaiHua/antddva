// 引入 React，参数
import React, {PropTypes} from 'react'

// 引入 视觉组件
import {Breadcrumb, Icon} from 'antd'

// 引入 菜单配置
import menu from '../../utils/menu'

// 引入 布局样式
import styles from '../layouts.less'

//let pathSet = [];
//console.log(menu);
//const getPathSet = function (menuArray, parentPath) {
//parentPath = parentPath || '/'
// menuArray.map(item => {
//   pathSet[(parentPath + item.key).replace(/\//g, '-').hyphenToHump()] = {
//     path: parentPath + item.key,
//     name: item.name,
//     icon: item.icon || '',
//     clickable: item.clickable === undefined
//   }
//   if (item.child) {
//     getPathSet(item.child, parentPath + item.key + '/')
//   }
// })
//}

//getPathSet(menu)

// 方法
function Bread({location}) {

  //let pathNames = []

  // location.pathname.substr(1).split('/').map((item, key) => {
  //   if (key > 0) {
  //     pathNames.push((pathNames[key - 1] + '-' + item).hyphenToHump())
  //   } else {
  //     pathNames.push(('-' + item).hyphenToHump())
  //   }
  // })

  // 面包屑列表
  // const breads = pathNames.map((item, key) => {
  //   if (!(item in pathSet)) {
  //     item = 'users'
  //   }
  //   return (
  //     <Breadcrumb.Item key={key} {...((pathNames.length - 1 === key) || !pathSet[item].clickable) ? '' : { href: '#' + pathSet[item].path }}>
  //       {pathSet[item].icon
  //         ? <Icon type={pathSet[item].icon}/>
  //         : ''}
  //       <span>{pathSet[item].name}</span>
  //     </Breadcrumb.Item>
  //   )
  // })

  // 渲染
  return (
    <div className={styles.bread}>
      <Breadcrumb>
        <Breadcrumb.Item href='#/'>
          <Icon type='home'/>
          <span>主页</span>
        </Breadcrumb.Item>
        {/* {breads} */}
      </Breadcrumb>
    </div>
  );
};

// 参数验证
Bread.propTypes = {
  location: PropTypes.object
}

// 暴露方法
export default Bread
