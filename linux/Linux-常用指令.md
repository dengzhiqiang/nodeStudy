### 1. 查看目录下有什么文件
    > ls                //list查看"当前"目录下有什么文件
    > ls  目录          //查看指定目录下文件信息
    > ls  -a            //all查看目录下全部文件(包括隐藏文件)
    > ls  -l   或 ll    //以“详细列表”形式查看文件名字内容
    > ls  -al           //查看当前目录下"全部文件"，并以"详细列表"形式展示出来
    > ls  -i            //index查看文件索引号码
    > ls  -li           //以“详细列表”形式查看文件名字，并显示索引号码


    1) 统计当前文件夹下文件的个数
    ls -l |grep "^-"|wc -l

    2) 统计当前文件夹下目录的个数
    ls -l |grep "^d"|wc -l

     
    3) 统计当前文件夹下文件的个数，包括子文件夹里的 
    ls -lR|grep "^-"|wc -l

     
    4) 统计文件夹下目录的个数，包括子文件夹里的
    ls -lR|grep "^d"|wc -l


    ls -l 
    长列表输出当前文件夹下文件信息(注意这里的文件，不同于一般的文件，可能是目录、链接、设备文件等)
     

    grep "^-" 
    这里将长列表输出信息过滤一部分，只保留一般文件，如果只保留目录就是 ^d
    复制代码 代码如下:

    wc -l 

    统计输出信息的行数，因为已经过滤得只剩一般文件了，
    所以统计结果就是一般文件信息的行数，
    又由于一行信息对应一个文件，所以也就是文件的个数。



### 2. 目录切换
    cd  目录名称
    >cd  ..         //上级目录切换
    > cd ~          //回到用户的家目录
    cd -    // 返回上一次目录

### 3. 获得当前操作的目录位置
    > pwd

### 4. 用户切换
    su  用户名
    > su  -         //切换到root用户
    > su  -  root   //同上
      su  root      //root用户切换，在有的linux系统效果是：用户是root，权限是普通的
    > su  普通用户  //没有"横线"
    > exit          //退回到上一个用户

    //su和exit要配对使用，如果使用多个su，会造成用户叠加
    jinnan-->root-->jinnan-->root-->jinnan

### 5. 查看当前操纵者信息
    > whoami        //我是谁

### 6. 桌面模式 与 命令模式的切换(root用户操作)
    ># init 3
    ># init 5

### 7. 查看文件内容
    > cat  filename   //把文件内容输出到终端查看

### 8. 查看文件占据磁盘空间大小
    > du -h  文件 

### 9. 目录操作
    1) 创建目录 make  directory
    > mkdir  dirname
    > mkdir  dir/newdir                 //在dir下创建一个newdir
    创建多级目录，如果"新目录"个数大于1个数量，就要设置"-p"参数
    > mkdir -p  newdir/newdir/newdir    //创建多级递归目录                                    
    > mkdir -p  dir/newdir/newdir    //创建多级递归目录
    > mkdir -p dir/newdir/newdir/newdir
    
    2) (文件/目录)移动-改名字 操作  move
    > mv  dir1  dir2                //dir1移动到dir2目录下，并改名字为“原名”
    > mv  dir1  dir2/newdir         //dir1移动到dir2目录下，并改名字为“newdir”
    > mv  dir1  newdir              //dir1移动到当前目录下，并改名字为“newdir”
    > mv  dir1/dir2  dir3/dir4      //dir2移动到dir4目录下，并改名字为“原名”
    > mv  dir1/dir2  dir3/dir4/newdir      //dir2移动到dir4目录下，并改名字为“newdir”

   

    4) 删除(文件/目录)
    > rm  file          //删除文件
    > rm -r dir         //删除目录
    > rm -rf  filename  //recursive force 递归、强制 删除文件
                        //-f  force  避免 “进入目录、删除隐藏文件” 的提示
    > rm -rf  /         //kill you by your self

### 10. 文件操作
    1) 查看文件
    > cp  /etc/passwd   ./      //复制passwd文件到当前目录
    > cat  filename             //输出文件内容到终端
    > more  filename            //敲回车，逐行查看文件的内容
                                //不支持回看
                                //q键，退出查看
    > less  filename            //通过"上 下 左 右"键的方式，查看文档的各个部分内容
                                //支持回看,q键退出查看
    > head -n  filename         //查看文档的前n行内容
    > tail -n  filename         //查看文档的末尾n行内容
    > wc  filename              //计算文件行数

    2) 创建文件
    > touch  filename           //创建一个文件

    3) 给文件追加内容
       echo 内容 >/>> 文件
    > echo dog  >  animal.txt   //把dog内容以"覆盖写"方式追加到animal.txt文件中
                                //如果animal.txt文件不存在会"自动创建"
    
    > echo htc  >> order.txt    //把htc内容以"纯追加"方式设置到order.txt文件中
                                //order.txt文件不存在，会自动创建
### 11. 用户操作(root)
    用户：user
    增加：add   修改：mod(ify)  删除：del(ete)
    配置文件：/etc/passwd
    1) 增加用户 useradd
    > useradd xiaogang      //增加一个xiaogang用户，会创建一个同名的组
                            //没有设置用户的组别，就会创建同名组
    > useradd -g 组别编号  liming    //创建liming用户，并设置其组别(避免创建同名组)
    > useradd -u 用户编号  -g 组编号  -d  家目录  用户名

    2) 修改用户 usermod
    > usermod  -u 用户编号 -g 组编号 -d 家目录  -l 新名字  用户名
    //如果修改家目录，需要手动创建(不同于增加用户)

    3) 删除用户 userdel
    > userdel  用户名       // /etc/passwd的配置用户信息会删除(保留家目录，可以手动删除)
    > userdel  -r  用户名   // 用户信息 和 其家目录 都删除

### 12. 组别操作(root)
    组别：group
    配置文件：/etc/group
    1) 增加组别 groupadd
    > groupadd music          //创建一个music组别

    2) 修改组别 groupmod
    > groupmod -g 组编号  -n 新名字 组名

    3) 删除组别 groupdel
    > groupdel  组名 
    //组下存在对应的用户信息，禁止删除

### 13. 权限操作
    1) 字母相对方式设置权限
        权限只是针对局部有发生影响
    chmod u+/-rwx ,g+/-rwx ,o+/-rwx  文件
    组别：ugo可以设置多个或一个
    权限：rwx 可以设置一个或多个
    增减权限： + - 号 在每个组别里边只能用一次
    > chmod  u+rw  filename         //给文件主人增加 读、写 权限
    > chmod  u+x,g-rx  filename     //主人增加执行，同组用户去除 读、执行 权限
    > chmod  u+r,u-x  filename      //主人增加 读 权限、去除 执行 权限

    2) 数字绝对方式设置权限
        权限发生影响的范文是“全部”
        4:Read读    2:Write写    1:eXecute执行
        具体权限：
        0->没有任何权限
        1->执行
        2->写
        3->写、执行
        4->读
        5->读、执行
        6->读、写
        7->读、写、执行

        chmod  ABC  filename    //ABC分别代表主人、同组、其他组用户权限数字信息
        > chmod 753  filename   //主人：读、写、执行
                                  同组：读、执行
                                  其他组：写、执行

        字母与数字方式的取舍：
        ① 文件权限修改较少使用“字母方式”
        ② 文件权限修改较多使用“数字方式”

### 14. 文件内容查找
    grep  内容   文件       //在文件中搜寻指定“内容”，会把“内容”所在行的信息都打印到终端
    > grep itcast passwd    //在passwd文件中搜寻itcast内容

### 15. 查找指令对应的执行程序文件
    > which 指令

### 16. 查看文件/目录占据磁盘空间大小
    硬盘空间被格式化为小格子，每个小格子默认大小为4k（4096个字节）
    文件大小如果不足4k，则分配一个格子大小进行存储
    如果文件大小超过格子，则分配大于文件大小的整数倍的格子空间
    > du  -h   文件
    
        
### 17. 文件查找find
    find   查找目录   选项  选项值 选项 选项值....
    > find  /  -name  passwd   //在/斜杠 根目录下查找文件名称为passwd的文件
                                //该指令效率低，其要在"递归遍历"系统全部目录进行文件查找
    选项：
        -name    根据文件名称查找文件
            通过“完整”文件名称进行查找
            > find  ./  -name  order.txt   //在当前目录下查找文件名称等于'order.txt'的文件
                                            //需要递归遍历当前目录下的所有“子级目录”
            根据"模糊"名称查找文件，不确定名称使用"*"号代表
            > find  ./  -name  "guang*"     //在当前目录下查找名称以"guang"为开始的文件
        
        -maxdepth  限制查找文件的最深目录层次
            > find  /   -maxdepth  4 -name passwd  //在小于等于4个目录层次之间寻找passwd文件
        -mindepth  限制查找文件的最浅目录层次
            > find  /  -mindepth 3  -maxdepth 4 -name passwd //在3到4个目录层次之间寻找passwd文件

        -size   根据文件大小查找
            > find  ./  -size  -100c  //在当前目录下查找大小【小于】100个字节的文件
            > find  ./  -size   26c   //在当前目录下查找大小【等于】26个字节的文件
            > find  ./  -size  +26c   //在当前目录下查找大小【大于】26个字节的文件
            单位：
                100-----> 512字节 == 100*512字节
                100c----> 字节    == 100字节
                100k----> 千字节  == 100*1024字节
            100M----> 兆      == 100*1024*1024字节

### 管道符号
    ls -l | wc 计算一共有多少个文件   
    ls -l | head -5 | tail -1 显示第五行到最后一行 

### 查看命令的参数
    man 命名名称  查看命令的手册
    man ls         
    [root@iZ96es4rdqvzy0Z /]# man -k mkdir
    mkdir (1)            - make directories
    mkdirhier (1)        - makes a directory hierarchy
    (1) 表示区域号 可执行程序和shell
    
### 查看帮助信息
    hostname --help
    ls --help    

### 看linux是32位还是64位
    getconf LONG_BIT 
    



    
    
    
    
    
    
    
    
    
    