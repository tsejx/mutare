// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/mrsingsing/mrsingsing/mutare/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Mutare","meta":{"order":10}}],"/api":[{"title":"Array","path":"/api/array","meta":{},"children":[]},{"title":"Math","path":"/api/math","meta":{},"children":[{"path":"/api/math/seperate","title":"seperate","meta":{}}]},{"title":"Object","path":"/api/object","meta":{},"children":[]}]}},"locales":[],"navs":{"*":[{"path":"/api","title":"Api"},{"title":"Github","path":"https://github.com/tsejx/mutare"}]},"title":"Mutare","logo":"http://img.mrsingsing.com/data-structure-and-algorithms-favicon.svg","desc":"函数工具库","mode":"site","repoUrl":"https://github.com/tsejx/mutare"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'../../docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1599645588963,
          "title": "Mutare",
          "order": 10,
          "hero": {
            "title": "Mutare",
            "desc": "<div class=\"markdown\"><p>📚 工具箱</p></div>",
            "actions": [
              {
                "text": "开始阅读",
                "link": "/api/"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "完整体系",
              "desc": "<div class=\"markdown\"><p>根据官方文档及社区建设构建尽可能实用的知识体系，宏观掌握技术体系</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "深度分析",
              "desc": "<div class=\"markdown\"><p>尽览社区精品技术文章，将最受业界欢迎的使用方法收录其中</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "开发指南",
              "desc": "<div class=\"markdown\"><p>体系化整理，随时查阅具体技术细节，方便前端开发者日常开发</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by tsejx</p></div>",
          "slugs": []
        },
        "title": "Mutare"
      },
      {
        "path": "/api/array",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__api__array__index.md' */'../../docs/api/array/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/api/array/index.md",
          "updatedTime": 1599646964113,
          "slugs": [
            {
              "depth": 1,
              "value": "Array",
              "heading": "array"
            }
          ],
          "title": "Array",
          "nav": {
            "path": "/api",
            "title": "Api"
          },
          "group": {
            "path": "/api/array",
            "title": "Array"
          }
        },
        "title": "Array"
      },
      {
        "path": "/api/math/seperate",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__api__math__seperate.md' */'../../docs/api/math/seperate.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/api/math/seperate.md",
          "updatedTime": 1599647047475,
          "slugs": [
            {
              "depth": 1,
              "value": "seperate",
              "heading": "seperate"
            }
          ],
          "title": "seperate",
          "nav": {
            "path": "/api",
            "title": "Api"
          },
          "group": {
            "path": "/api/math",
            "title": "Math"
          }
        },
        "title": "seperate"
      },
      {
        "path": "/api/object",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__api__object__index.md' */'../../docs/api/object/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/api/object/index.md",
          "updatedTime": 1599645412306,
          "slugs": [
            {
              "depth": 1,
              "value": "Object",
              "heading": "object"
            }
          ],
          "title": "Object",
          "nav": {
            "path": "/api",
            "title": "Api"
          },
          "group": {
            "path": "/api/object",
            "title": "Object"
          }
        },
        "title": "Object"
      },
      {
        "path": "/api",
        "meta": {},
        "exact": true,
        "redirect": "/api/array"
      },
      {
        "path": "/api/math",
        "meta": {},
        "exact": true,
        "redirect": "/api/math/seperate"
      }
    ],
    "title": "Mutare"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
