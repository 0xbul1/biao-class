# 前置工作

- 下Chrome浏览器
- 下编辑器 VS Code、WebStorm皆可
- 下Git， [https://git-scm.com](https://git-scm.com)
- 配Git
  - `git config --global user.name "whh""`
  - `git config --global user.email "whh@xxx.com""`
- 创建github仓库 [https://github.com/new](https://github.com/new)
- 创建表教室目录
    - biao-class（总目录）
        - practice（练习）
            - 001
            - ...
        - project（项目）
    - 初始化仓库
        - `cd biao-class`（进入`biao-class`目录）
        - `git init`（初始化仓库）
        - `git add .` （将仓库所有的修改存入暂存区）
        - `git commit -m "开始的开始"` （打点保存，名为"开始的开始"）
        - `git remote add origin https://github.com/用户名/仓库名.git`（添加远程仓库，名字叫`origin`）
        - `git push -u origin master`（把本地代码推到`origin`上去，其实就是github上）
    - 做出一点修改
        - `git add .` （将仓库所有的修改存入暂存区）
        - `git commit -m "开始的开始"` （打点保存，名为"做了一点修改"）
        - `git push -u origin master`（把本地代码推到`origin`上去，其实就是github上）
      - 然后就是重复以上三部

- 更改远程仓库 `git remote set-url origin https://...`