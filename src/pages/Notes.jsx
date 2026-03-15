/**
 * Notes.jsx - 学习笔记页面组件
 * 
 * React 知识点：
 * - 组件化思维：将页面拆分为独立组件
 * - 数据驱动：使用数组存储笔记数据，通过 map 渲染
 * - CSS 模块化：每个组件有自己的 CSS 文件
 */

import { useState } from 'react';
import './Notes.css';

/**
 * Notes 组件 - 学习笔记页面
 * 
 * React 知识点：
 * - useState Hook: 在函数组件中添加状态
 * - 状态更新: setNotes 调用后会自动重新渲染组件
 * 
 * @returns {JSX.Element} 笔记页面
 */
function Notes() {
  /**
   * useState Hook 使用示例：
   * const [状态名, set状态名] = useState(初始值)
   * 
   * 这里的 notes 是笔记数据数组
   * setNotes 是更新这个数组的函数
   */
  const [notes] = useState([
    {
      category: '机器人控制',
      items: [
        {
          title: 'CAN通信协议详解',
          description: 'CAN总线协议原理、帧格式、错误处理机制',
          date: '2026-01-15'
        },
        {
          title: '电机控制算法',
          description: 'PID控制、模糊控制、直驱/谐波减速器控制',
          date: '2026-01-10'
        },
        {
          title: 'MQTT物联网协议',
          description: 'MQTT协议原理、QoS级别、遗嘱消息',
          date: '2026-01-05'
        }
      ]
    },
    {
      category: 'C++开发',
      items: [
        {
          title: '现代C++特性',
          description: 'C++11/14/17 新特性：lambda、智能指针、并发',
          date: '2025-12-20'
        },
        {
          title: 'CMake实践',
          description: 'CMakeLists.txt 编写、find_package、target_link_libraries',
          date: '2025-12-15'
        },
        {
          title: 'Qt开发笔记',
          description: 'Qt信号槽机制、QML、模型视图编程',
          date: '2025-12-10'
        }
      ]
    },
    {
      category: 'ROS/ROS2',
      items: [
        {
          title: 'ROS2节点通信',
          description: 'Publisher/Subscriber、Service、Action通信机制',
          date: '2025-11-25'
        },
        {
          title: 'ROS2生命周期管理',
          description: 'Node Lifecycle、Managed Nodes',
          date: '2025-11-20'
        }
      ]
    },
    {
      category: '工具技巧',
      items: [
        {
          title: 'Git工作流',
          description: '分支管理、提交规范、PR流程',
          date: '2025-11-15'
        },
        {
          title: 'Docker容器化',
          description: 'Dockerfile编写、镜像构建、容器编排',
          date: '2025-11-10'
        },
        {
          title: 'Linux系统管理',
          description: 'Shell脚本、系统服务、进程管理',
          date: '2025-11-05'
        }
      ]
    }
  ]);

  /**
   * 搜索功能示例 - 展示状态用法
   * 实际可以添加搜索框来过滤笔记
   */
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="notes-page">
      <h1>📚 学习笔记</h1>
      
      {/* 搜索框 - 演示受控组件 */}
      <div className="search-box">
        <input 
          type="text"
          placeholder="🔍 搜索笔记..."
          value={searchTerm}
          /**
           * onChange 事件处理函数
           * 每次输入都会触发状态更新，组件重新渲染
           * 这是"受控组件"的实现方式
           */
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* 渲染笔记分类 */}
      {notes.map((category, categoryIndex) => (
        <div key={categoryIndex} className="note-category">
          {/* 分类标题 */}
          <h2>{category.category}</h2>
          
          {/* 该分类下的笔记列表 */}
          <div className="note-list">
            {category.items
              /**
               * 过滤显示笔记（基于搜索词）
               * filter 返回满足条件的元素组成的新数组
               */
              .filter(note => 
                note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                note.description.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((note, noteIndex) => (
                /**
                 * 笔记卡片
                 * 使用唯一 key 帮助 React 高效更新 DOM
                 */
                <div key={noteIndex} className="note-item">
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                  <span className="note-date">📅 {note.date}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
