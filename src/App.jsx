/**
 * App.jsx - 主应用组件
 * 
 * 这是整个网站的入口组件，使用 React Router 实现页面路由
 * 
 * React 知识点：
 * - BrowserRouter: HTML5 History API，用于 SPA 路由管理
 * - Routes/Route: 定义路由规则，path 匹配时渲染对应组件
 * - useLocation: 获取当前路由路径，用于高亮当前导航项
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Links from './pages/Links';
import './App.css';

/**
 * Navigation 组件 - 顶部导航栏
 * 
 * React 知识点：
 * - useLocation Hook: 获取当前页面路径，用于动态高亮当前选中的导航项
 * - Link 组件: 声明式路由导航，相当于 <a> 标签但不会刷新页面
 * 
 * @returns {JSX.Element} 导航栏组件
 */
function Navigation() {
  // useLocation 返回当前路由信息，pathname 是当前路径
  const location = useLocation();
  
  // 定义导航项数组，方便管理和渲染
  const navItems = [
    { path: '/', label: '首页', icon: '🤖' },
    { path: '/notes', label: '学习笔记', icon: '📚' },
    { path: '/links', label: '开源链接', icon: '🔗' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* 网站Logo/标题 */}
        <div className="nav-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">LXR</span>
        </div>
        
        {/* 导航链接列表 */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              {/* Link 组件实现无刷新导航，to 属性指定目标路径 */}
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/**
 * App 主组件
 * 
 * React 知识点：
 * - Router (BrowserRouter): 包裹整个应用，提供路由上下文
 * - Routes: 路由出口，定义所有 Route 的容器
 * - Route: 单个路由规则，path 匹配时渲染 element 指定的组件
 * 
 * SPA (Single Page Application) 原理：
 * - 使用 History API 改变 URL 不刷新页面
 * - React Router 根据 URL 动态渲染对应组件
 * - 相比多页面应用，体验更流畅
 */
function App() {
  return (
    // Router 必须在最外层，为整个应用提供路由功能
    <Router>
      <div className="app">
        {/* 导航栏 - 所有页面共享 */}
        <Navigation />
        
        {/* 路由出口 - 根据 URL 显示不同页面 */}
        <main className="main-content">
          <Routes>
            {/* 首页路由 */}
            <Route path="/" element={<Home />} />
            
            {/* 学习笔记路由 */}
            <Route path="/notes" element={<Notes />} />
            
            {/* 开源链接路由 */}
            <Route path="/links" element={<Links />} />
          </Routes>
        </main>
        
        {/* 页脚 - 所有页面共享 */}
        <footer className="footer">
          <p>© 2026 李祥瑞 | 机器人开发工程师</p>
          <p className="footer-tech">Built with React ⚡</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
