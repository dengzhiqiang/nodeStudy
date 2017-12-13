 ### 3) (文件/目录)复制-改名字 操作  copy
    文件复制
    > cp  file1  dir1                   //file1被复制到dir1下，并改名字为“原名”
    > cp  file1  dir1/newfile           //file1被复制到dir1下，并改名字为“newfile”
    > cp  dir1/file1  dir2/dir3         //file1被复制到dir3下，并改名字为“原名”
    > cp  dir1/file1  dir2/dir3/newfile //file1被复制到dir3下，并改名字为“newfile”
    
    目录复制,统一设置-r参数 recursive递归地 (无视目录层次)
    > cp -r dir1  dir2              //dir1被复制到dir2下，并改名字为“原名”
    > cp -r dir1  dir2/newdir       //dir1被复制到dir2下，并改名字为“newdir”
    > cp -r dir1/dir2  dir3/dir4    //dir2被复制到dir4下，并改名字为“原名”
    > cp -r dir1/dir2  dir3/dir4/newdir    //dir2被复制到dir4下，并改名字为“newdir”
    > cp -r dir1/dir2  newdir       //dir2被复制到当前目录下，并改名字为“newdir”
    
    cp -r dir1/*  newdir   目录dir1下面的所有内容复制到newdir中