# 疑难解答 {#title}

一些可能影响使用体验的问题和对应解决方案, 某些方案可能并不适用您的机型系统

如您有更好的方案或想对现有方案进行补充, 请点击底部 `为此页提供修改建议`

## 受限制的设置 {#restriction}

无障碍列表界面提示 `受限制的设置(出于安全考虑，此设置目前不可用)`

这是 Android13 的限制, 对于不在应用商店等可信任来源安装的应用不能直接开启无障碍权限

您需要解除这个限制, 到系统设置-应用管理-找到并点击趣助理-右上角-允许受限制的设置

以 LineageOS 20 为例, 下面为完整的解除限制流程截图, 此处感谢来自 [CyrusYip](https://github.com/miaoqidong/docs/issues/2) 的截图

|                                         |                                         |                                         |                                         |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| ![image](https://a.趣助理.li/0013.png) | ![image](https://a.趣助理.li/0014.png) | ![image](https://a.趣助理.li/0015.png) | ![image](https://a.趣助理.li/0016.png) |
| ![image](https://a.趣助理.li/0017.png) | ![image](https://a.趣助理.li/0018.png) |                                         |                                         |

如果您按照以上步骤设置后回到 无障碍列表 仍然提示不可用, 您可以试试 **重启手机**, 此解决方案来自 [Herobrine2005928](https://github.com/orgs/miaoqidong/discussions/433#discussioncomment-8899920)

## 后台运行 {#persistent}

如何尽量保持后台运行不被系统回收

- 任务切换界面给 趣助理 应用卡片加锁即可

一般情况下, 使用此项即可正常后台运行, 如果不行请使用下面的步骤

- 打开 趣助理 首页, 开启 `常驻通知`
- 打开 趣助理 设置, 开启 `后台隐藏`
- 允许后台活动, 关闭省电策略, 或者设置 趣助理 的省电策略为无限制
- 允许 趣助理 自启动

## 关闭无障碍警告弹窗 {#close_warn_dialog}

请注意: **这个方案不一定适用所有机型**

大多数设备开启无障碍时都会出现 10s 的无障碍警告弹窗, 若是只需要开启一次则无所谓, 但是如果开启次数比较多每次都有这个警告等待就很烦人了

|                                         |                                         |
| --------------------------------------- | --------------------------------------- |
| ![image](https://a.趣助理.li/0004.png) | ![image](https://a.趣助理.li/0005.png) |

你可能已经看到这个界面还有一个开关, 也就是下方的 `快捷方式` 开关

打开一次下面这个快捷方式开关后, 上面的的开启按钮就不会出现警告弹窗了, 但是你会发现屏幕侧边出现了一个应用小图标, 多数情况下我们并不需要这个图标

到无障碍界面-"无障碍"按钮-使用按钮或手势-点击切换为手势即可隐藏

以 Xiaomi HyperOS 为例子, 下面是完整的关闭弹窗流程截图

|                                         |                                         |                                         |                                         |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| ![image](https://a.趣助理.li/0009.png) | ![image](https://a.趣助理.li/0010.png) | ![image](https://a.趣助理.li/0011.png) | ![image](https://a.趣助理.li/0012.png) |
