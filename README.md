# Fudan_ACM_Homepage

Fudan University ACM-ICPC website.

部署时应该将www中的port改为80。

node使用LTS 12.13.0。

react编译

```shell
npm run build
```

react测试

```shell
npm run start
```

开发

```shell
npm run dev
```

windows生产环境

```shell
npm run win_prod
```

linux生产环境

```shell
npm run linux_prod
```

linux开启服务（使用pm2后台挂起并监控）

```shell
npm run pm2_prod
```

部署

```shell
git clone -b ztx_upd https://github.com/FudanICPC/Fudan_ACM_Homepage.git
cd Fudan-ACM-Homepage
npm run build
npm run pm2_prod
```
