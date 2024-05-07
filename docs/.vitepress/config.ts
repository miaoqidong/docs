import { defineConfig } from 'vitepress';
import { mirror, transformHtml } from './plugins';
import typedocSidebar from '../api/typedoc-sidebar.json';

const logoUrl =
  'https://registry.npmmirror.com/@miaoqidong/docs/0.0.1706371840771/files/.vitepress/dist/logo.svg';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '趣助理',
  description: '屏幕点击+消息管理',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: logoUrl,
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: logoUrl,
    lastUpdatedText: '最后更新于',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/api/' },
    ],
    sidebar: [
      {
        text: '指引',
        items: [
          { text: '开始使用', link: '/guide/' },
          { text: '高级选择器', link: '/selector/' },
          { text: '订阅规则', link: '/subscription/' },
          { text: '疑难解答', link: '/faq/' },
        ],
      },
      {
        text: '教程',
        link: '/api/',
        collapsed: true,
        items: typedocSidebar,
      },
    ],
    editLink: {
      pattern: 'https://github.com/miaoqidong/docs/edit/main/docs/:path',
      text: '为此页提供修改建议',
    },
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) return '';
          if (
            env.relativePath.startsWith('api/interfaces/') &&
            env.relativePath.endsWith('Props.md')
          ) {
            return '';
          }
          return html;
        },
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/miaoqidong' }],
    footer: {
      message: 'Released under the GPL-v3 License.',
      copyright: `Copyright © ${new Date().getFullYear()} 趣助理. All rights reserved`,
    },
  },
  transformHtml,
  vite: {
    plugins: [mirror()],
    server: {
      host: '127.0.0.1',
      port: 8633,
    },
  },
});
