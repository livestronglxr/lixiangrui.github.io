/**
 * Links.jsx - 开源链接页面组件
 * 
 * React 知识点：
 * - 外部链接渲染: 使用 a 标签（注意与 Link 区分）
 * - 数组渲染: map 方法的典型用法
 * - 对象数组: 使用对象数组存储链接数据
 */

import './Links.css';

/**
 * Links 组件 - 开源项目链接页面
 * 
 * @returns {JSX.Element} 链接页面
 */
function Links() {
  /**
   * 链接数据 - 按类别组织
   * 每个链接包含：名称、描述、URL、标签
   */
  const links = [
    {
      category: '机器人框架',
      items: [
        {
          name: 'ROS',
          description: '机器人操作系统，提供了丰富的工具和库',
          url: 'https://www.ros.org/',
          tags: ['ROS', 'C++', 'Python']
        },
        {
          name: 'ROS2',
          description: '下一代机器人操作系统，实时性更好',
          url: 'https://index.ros.org/doc/ros2/',
          tags: ['ROS2', 'C++', 'Python']
        },
        {
          name: 'MoveIt',
          description: 'ROS机械臂运动规划框架',
          url: 'https://moveit.ros.org/',
          tags: ['运动规划', '机械臂']
        }
      ]
    },
    {
      category: '通信中间件',
      items: [
        {
          name: 'Apollo',
          description: '百度自动驾驶平台',
          url: 'https://www.apollo.auto/',
          tags: ['自动驾驶', 'C++']
        },
        {
          name: 'Cyber RT',
          description: '百度Apollo自动驾驶计算框架',
          url: 'https://github.com/ApolloAuto/cyber',
          tags: ['中间件', 'C++']
        },
        {
          name: 'Iceoryx',
          description: '高性能实时中间件',
          url: 'https://iceoryx.io/',
          tags: ['Zero-Copy', 'C++']
        }
      ]
    },
    {
      category: 'C++库',
      items: [
        {
          name: 'Boost',
          description: 'C++准标准库',
          url: 'https://www.boost.org/',
          tags: ['C++', '库']
        },
        {
          name: 'Qt',
          description: '跨平台GUI应用框架',
          url: 'https://www.qt.io/',
          tags: ['GUI', 'C++']
        },
        {
          name: 'Eigen',
          description: 'C++线性代数库',
          url: 'https://eigen.tuxfamily.org/',
          tags: ['数学', 'C++']
        }
      ]
    },
    {
      category: '工具库',
      items: [
        {
          name: 'OpenCV',
          description: '计算机视觉库',
          url: 'https://opencv.org/',
          tags: ['CV', 'C++', 'Python']
        },
        {
          name: 'PCL',
          description: '点云处理库',
          url: 'https://pointclouds.org/',
          tags: ['3D', 'C++']
        },
        {
          name: 'GTest',
          description: 'Google C++测试框架',
          url: 'https://github.com/google/googletest',
          tags: ['测试', 'C++']
        }
      ]
    }
  ];

  return (
    <div className="links-page">
      <h1>🔗 开源链接</h1>
      
      <p className="links-intro">
        收录常用的机器人开发相关开源项目和库，持续更新中...
      </p>
      
      {/* 渲染链接分类 */}
      {links.map((category, categoryIndex) => (
        <div key={categoryIndex} className="link-category">
          {/* 分类标题 */}
          <h2>{category.category}</h2>
          
          {/* 链接卡片网格 */}
          <div className="link-grid">
            {category.items.map((link, linkIndex) => (
              /**
               * 链接卡片
               * 使用 a 标签创建外部链接
               * target="_blank" 在新标签页打开
               * rel="noopener noreferrer" 是安全最佳实践
               */
              <a 
                key={linkIndex}
                href={link.url}
                className="link-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{link.name}</h3>
                <p>{link.description}</p>
                
                {/* 标签列表 - 使用 map 渲染 */}
                <div className="link-tags">
                  {link.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="link-tag">{tag}</span>
                  ))}
                </div>
                
                <span className="link-url">{link.url}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Links;
