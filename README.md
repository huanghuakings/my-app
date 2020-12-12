# react 
# 
第一步：建立git仓库 cd到你的本地项目根目录下，执行git命令
git init

第二步：将项目的所有文件添加到仓库中

git add .

第三步：将add的文件commit到仓库
git commit -m "注释语句"

将本地的仓库关联到github上

git remote add origin git@github.com:huanghuakings/main.git

第六步：上传github之前，要先pull一下，执行如下命令： git pull origin master

git push -u origin master