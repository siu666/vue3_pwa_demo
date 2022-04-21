// self.addEventListener('install',e=>{
//     console.log('123123')
// });
// self.addEventListener("fetch", (e => {
//     //拦截资源，满足上述域名，优先使用缓存，否则使用网络下载资源并更新资源。
//     r.some((t => e.request.url.startsWith(t))) && e.respondWith(caches.match(e.request).then((t => t && 200 === t.status ? t : fetch(e.request).then((t => {
//       if (200 !== t.status) return t;
//       const r = t.clone();
//       return caches.open("v1").then((t => {
//         t.put(e.request, r)
//       })), t
//     })).catch((() => {})
//         )
//       )
//      )
//     )
//   }))