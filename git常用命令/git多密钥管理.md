### 生成密钥
### 如果没有自动创建目录.ssh 需要手动创建
### .ssh目录下手动创建 config文件 注意不是.config文件。文件格式如下
    ssh-keygen -t rsa -C "1445124133@qq.com" 创建id_rsa
    ssh -T git@github.com  验证是否设置成功
    
    Host github.com
    HostName github.com
    User 1445124133@qq.com
    PreferredAuthentications publickey
    IdentityFile C:\Users\admin\.ssh\id_rsa_github