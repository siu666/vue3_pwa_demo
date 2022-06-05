const microApps = [
    // {
    //   name: 'reactApp',
    //   entry: '//localhost:3000',
    //   container: '#container',
    //   activeRule: '/app-react',
    // },
    {
      name: 'sub_vue',
      entry: process.env.NODE_ENV==='production'?'/app1/':'http://localhost:8081',
      container: '#container',
      activeRule: '/sub_vue',
    },
    // {
    //   name: 'sub_vue2',
    //   entry: 'http://localhost:8082',
    //   container: '#container',
    //   activeRule: '/sub_vue2',
    // },
    // {
    //   name: 'angularApp',
    //   entry: '//localhost:4200',
    //   container: '#container',
    //   activeRule: '/app-angular',
    // },
  ]
  
  export default microApps