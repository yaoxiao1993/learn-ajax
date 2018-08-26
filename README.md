# learn-ajax
## 1. 安装依赖
- json-server：
```npm i json-server -g```
- 在api目录打开命令行窗口，执行：
```json-server db.json --port 3000```
- 到浏览器访问：localhost:3000/movies,看到数据说明mock数据构建成功
- 在client文件夹安装： 
```npm i axios --save```
- 保持数据服务器开启，浏览器打开index.html(修改db.json里面的数据后要重启服务器才能生效）
## 2. 运行
- 运行语句
```npm run mock```
## 3. 参考资料
https://github.com/typicode/json-server
