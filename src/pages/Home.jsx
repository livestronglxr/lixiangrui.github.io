/**
 * Home.jsx - 首页组件
 * 
 * React 知识点：
 * - 函数组件: 纯函数，接收 props，返回 JSX
 * - JSX: JavaScript XML，React 的模板语法
 * - {} 表达式: 在 JSX 中嵌入 JavaScript 表达式
 */

import './Home.css';

/**
 * Home 组件 - 个人首页
 * 
 * @returns {JSX.Element} 首页界面
 */
function Home() {
  // 定义个人技能标签数组
  const skills = [
    '机器人开发',
    'C++',
    'Qt',
    'ROS/ROS2',
    '运动控制',
    '传感器驱动',
    'CAN通信',
    'MQTT'
  ];

  // 定义项目经验
  const projects = [
    {
      title: 'FCT 测试系统',
      description: '自动化功能测试系统，支持多种板卡测试'
    },
    {
      title: '水炮控制系统',
      description: 'MOCTS 水炮远控系统，包含电机控制和过流保护'
    },
    {
      title: '关节调试软件',
      description: '上位机与关节电机通信调试工具'
    },
    {
      title: 'SDK 开发',
      description: '机器人 SDK 封装与维护'
    }
  ];

  // 定义联系方式
  const contact = {
    email: 'li_xiangrui@example.com',
    github: 'github.com/livestronglxr'
  };

  return (
    <div className="home-page">
      {/* 英雄区域 - 页面顶部醒目区域 */}
      <section className="hero">
        {/* 头像 - 使用 emoji 代替图片 */}
        <div className="hero-avatar">
          🤖
        </div>
        
        {/* 标题 - 使用 JSX 表达式嵌入变量 */}
        <h1>李祥瑞</h1>
        
        <p className="hero-subtitle">机器人开发工程师</p>
        
        <p className="hero-description">
          专注于机器人控制系统开发，热爱技术，追求极致。
          擅长 C++、Qt、ROS/ROS2 等技术栈。
        </p>
        
        {/* 技能标签 - 使用 map 渲染数组 */}
        <div className="tags">
          {skills.map((skill, index) => (
            /**
             * key 属性：React 列表渲染必须，用于帮助 React 识别哪些元素改变了
             * 尽量使用稳定的唯一标识，这里用 index 是因为数组不会变
             */
            <span key={index} className="tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* 关于我 */}
      <section className="section">
        <h2 className="section-title">关于我</h2>
        <div className="about-content">
          <p>
            大家好，我是李祥瑞，一名机器人开发工程师。
            目前专注于工业机器人和智能控制系统的开发工作。
          </p>
          <p>
            在过去的项目中，我积累了丰富的嵌入式开发经验，
            熟悉 CAN、MQTT 等通信协议，对机器人运动控制有深入理解。
          </p>
          <p>
            空闲时间喜欢研究新技术，写写代码，总结学习笔记。
          </p>
        </div>
      </section>

      {/* 项目经验 */}
      <section className="section">
        <h2 className="section-title">项目经验</h2>
        <div className="card-grid">
          {projects.map((project, index) => (
            /**
             * 卡片组件 - 使用 map 渲染项目列表
             * 每个卡片显示项目名称和描述
             */
            <div key={index} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="section">
        <h2 className="section-title">联系我</h2>
        <div className="contact-info">
          <p>📧 邮箱：{contact.email}</p>
          <p>🐙 GitHub：{contact.github}</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
