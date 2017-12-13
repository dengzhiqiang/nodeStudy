### cp -rf a b 仍然有提示是否覆盖
    cp覆盖时，无论加什么参数-f之类的还是提示是否覆盖，当文件比较少的时候还可以按Y确认，
    当很多文件的时候就不好说了。用下面的方法可以解决覆盖提示的问题。

    查看别名
    [root@linuxzgf ~]# alias 
    alias cp='cp -i'
    可以看到别人  ，也就是当执行cp的时候，其实执行的是cp -i参数


### 解决办法：

    方法一：修改bashrc文件禁用掉cp的alias
    
    [root@linuxzgf ~]# vi ~/.bashrc        
        
    在alias cp='cp -i'前加上"#"注释，重新登录即可实现复制不提示。
    
    [root@linuxzgf ~]# cp -rf a b
    [root@linuxzgf ~]# cp -r a b