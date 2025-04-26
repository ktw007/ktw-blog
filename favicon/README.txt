# 网站Favicon说明

## 当前设置
网站当前使用favicon.jpg作为网站图标（favicon）。该图标已被复制为以下必要的文件格式：

- favicon.ico - 基本图标文件
- apple-touch-icon.png - iOS设备图标
- favicon-32x32.png - 32x32像素图标
- favicon-16x16.png - 16x16像素图标
- android-chrome-192x192.png - Android设备图标（192x192像素）
- android-chrome-512x512.png - Android设备图标（512x512像素）
- site.webmanifest - 网站应用manifest文件

## 如何更换图标

如果需要更换网站图标，请按照以下步骤操作：

1. 准备一个新的图标图片（推荐使用PNG或JPG格式，尺寸为512x512或更大）
2. 将图片复制到static/favicon/目录
3. 使用在线Favicon生成器（如https://realfavicongenerator.net/）创建各种尺寸的图标
4. 将生成的图标文件覆盖当前目录中的文件

## 注意事项
- 所有favicon文件必须保留相同的文件名
- 网站模板中已配置好favicon的引用链接
- 修改后可能需要清除浏览器缓存才能看到新图标 