# Fudan_ACM_Homepage

Fudan University Programming Contest Team website.

部署时应该将www中的port改为80。

理论上node版本应该大于8.10.0。

编译失败时，尝试删除package-lock.json和node_modules再npm install。

如果还不能成功编译运行，尝试使用node v12.13.0 LTS。

服务器已经使用n将node升级到12.13.0。

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
git clone https://github.com/FudanICPC/Fudan_ACM_Homepage.git
cd Fudan_ACM_Homepage
npm run build
npm run pm2_prod
```
