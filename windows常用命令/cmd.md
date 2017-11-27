### change directory  cd  切换目录
    cd 是一个命令，后面接的是参数
    其实所有的命令都是给
    cd 'ni hao' 如果有空格的目录，要加上引号，否则会报错
    cd \ 返回根目录
    F:\>d: 进入盘符不用 cd
### make directory mk dir 创建目录
### directory dir 显示目录列表
### list ls 查看目录 cmd不可用
### clear cls 清空当前控制台
### del 删除文件

### echo 'hello' >> 1.txt 输出到文件
### cat '1.txt' 查看文件
### path 查看配置的路径

### 显示时间和日期
    time
    date


### set nvm 查看nvm的环境变量
### set path 查看path

### dir 显示目录列表
    dir/? 显示帮助
    dir/p 分屏（分页）显示目录列表 
    dir/w 宽屏显示列表（可以两列显示）
    dir/ad 只显示目录
    dir/a 显示所有文件，包括隐藏文件
    dir/p/w 宽屏分页显示
    dir/s 图*.* 搜索图开头的任意文件（快速搜索文件）
    


### 快速查找同类型的文件
    * 代表任意个任意字符
    ? 代表一个任意字符     
    dir a.* 名字为a的任意类型的文件
    dir a??.* a开头的三个字符的任意类型的文件
    dir *e*.* 包含e的任意文件

### 搜索文件内容
    find "设" 当天整理.txt 在后面的文件里面搜索前面的内容，（搜索的文字要用双引号）

### 查看文本内容
    type 当天整理.txt    

### 创建，删除目录
    rd 目录名称  只能删除空目录 
    md 目录名称  创建目录 make directory
    rd/s deng
    rd /s /q [盘符:\][路径\]新目录名，因为rd只能删除空的文件夹，而如果其中有子文件或子文件夹的时候就会停下来，这时我们加上/s就可以直接删除，但是删除过程中会提示你是否确定删除，对于懒癌患者我们有添加了/q，即quiet，安静模式；

### 创建文件
    type nul > type.txt 创建空文件 
    type nul > .access 创建没有名字的文件
    echo 内容 >  echo.txt 创建非空文件

### 删除文件
    del 文件名称
    del *.* 删除所有文件
    del . 删除所有文件

### 隐藏文件
    attrib 1.txt +h 隐藏文件 隐藏的文件需要dir/a 才能显示
    attrib 1.txt -h 显示文件
    attrib 1.txt +s 设置为系统文件
    attrib 1.txt -s 不设置为系统文件
    attrib 1.txt +r 设置为只读文件
    attrib 1.txt -r 不设置为只读文件
    attrib 1.txt +a 设置为归档属性
    attrib 1.txt -a 不设置为归档属性
    attrib 1.txt +r+h 设置为只读隐藏属性
    attrib/s +r+h 设置当前文件夹里面所有文件的属性
    attrib/s      显示当前文件夹里面所有文件的属性

### 复制文件
    copy 源文件 目标文件名 （不能复制只读属性的文件）
    copy 1.txt  1-1.txt 复制文件为1-1.txt
    copy *.txt  zhi 复制当前目录的所有文件到另外一个文件夹
    xcopy C:\Users\youh\Desktop\deng/s copy 将文件的非空子目录复制到copy目录
    xcopy C:\Users\youh\Desktop\deng/e copy 将文件的空目录和非空子目录复制到copy目录

### 运行对话框常用的命令和功能
    以下的命令可以直接在运行win+R中运行，也可以直接在cmd中直接运行
    msconfig 系统配置使用程序    
    regedit  打开注册表
    cmd 命令提示符
    calc 打开计算器
    devmgmt.msc 设备管理器 (可能没有这个命令)
    compmgmt.msc 计算机管理
    gpedit.msc 组策略
    notepad 打开记事本
    secpol.msc 本地安全策略
    tsshutdn 60关机倒计时
    logoff 注销命令

### 定时关闭计算器
    shutdown/? 查看相关命令
    shutdown -s 关闭计算机
    shutdown -r 关闭并重启计算机
    shutdown -a 放弃系统关机
    shutdown -t 设置多长时间后关机
    shutdown -s -t 1800 30分钟后关机
    at 12:00 shutdown -s 在12点关机（出现拒绝访问）



    
