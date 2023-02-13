export default
  [
    { path: '/', component: '@/pages/index' },
    { path: "user", component: "@/pages/user/" },
    {
      path: '/admin',
      name: '功能功能功能A',
      icon: 'crown',
      routes: [
        {
          path: '/admin/sub-page',
          name: '二级管理页',
          icon: 'smile',
          component: '@/pages/user',
        },
        {
          path: "/admin/three",
          name: "三级管理",
          icon: "crown",
          routes: [
            {
              path: '/admin12/three12/four12/five12',
              name: '四级管理页',
              icon: 'smile',
              component: '@/pages/user',
            }
          ]
        }
      ],
    },
    {
      path: '/admin2',
      name: '功能功能B',
      icon: 'crown',
      routes: [
        {
          path: '/admin2/sub-page2',
          name: '二级管理页',
          icon: 'smile',
          component: '@/pages/user',
        },
        {
          path: "/admin2/three",
          name: "三级管理",
          icon: "crown",
          routes: [
            {
              path: '/admin/three2/four2',
              name: '四级管理页',
              icon: 'smile',
              component: '@/pages/user',
            }
          ]
        }
      ],
    },
    {
      path: '/admin3',
      name: '功能功能C',
      icon: 'crown',
      routes: [
        {
          path: '/admin3/sub-page3',
          name: '二级管理页',
          icon: 'smile',
          component: '@/pages/user',
        },
        {
          path: "/admin3/three3",
          name: "三级管理",
          icon: "crown",
          routes: [
            {
              path: '/admin3/three3/four3',
              name: '四级管理页',
              icon: 'smile',
              component: '@/pages/user',
            }
          ]
        }
      ],
    },
    {
      path: '/admin5',
      name: '功能功能功能D',
      icon: 'crown',
      routes: [
        {
          path: '/admin5/sub-page5',
          name: '二级管理页',
          icon: 'smile',
          component: '@/pages/user',
        },
        {
          path: "/admin5/three5",
          name: "三级管理",
          icon: "crown",
          routes: [
            {
              path: '/admin/three5/four5',
              name: '四级管理页',
              icon: 'smile',
              component: '@/pages/user',
            }
          ]
        }
      ],
    },
    {
      path: '/admin6',
      name: '功能功能E',
      icon: 'crown',
      routes: [
        {
          path: '/admin6/sub-page6',
          name: '二级管理页',
          icon: 'smile',
          component: '@/pages/user',
        },
        {
          path: "/admin6/three6",
          name: "三级管理",
          icon: "crown",
          routes: [
            {
              path: '/admin6/three6/four6',
              name: '四级管理页',
              icon: 'smile',
              component: '@/pages/user',
            }
          ]
        }
      ],
    },
    {
      path: '/admin7',
      name: '功能功能F',
      icon: 'crown',
      routes: [
        {
          path: '/admin7/sub-page7',
          name: '二级管理页',
          icon: 'smile',
          component: '@/pages/user',
        },
        {
          path: "/admin7/three7",
          name: "三级管理",
          icon: "crown",
          routes: [
            {
              path: '/admin12/three12/four12/five12',
              name: '四级管理页',
              icon: 'smile',
              component: '@/pages/user',
            }
          ]
        }
      ],
    },
    {
      path: '/admin12',
      name: '首页',
      icon: 'crown',
      hideInMenu: true,
      routes: [
        {
          path: "/admin12/three12",
          name: "年度协议管理",
          icon: "crown",
          routes: [
            {
              path: '/admin12/three12/four12',
              name: '二级商协议',
              routes:[
                {
                  path:"/admin12/three12/four12/five12",
                  name: '新增二级商协议',
                  component: '@/pages/newAgreement',
                }
              ]
            }
          ]
        }
      ],
    },
  ]
