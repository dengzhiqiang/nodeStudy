### 显示网络配置信息
    ipconfig 
    ipconfig/all 显示更相信的网络配置信息
    ipconfig/release 释放/取消IP
    ipconfig/renew 更新ip地址
    ipconfig/registerdns 初始化网络配置
    ipconfig/displaydns 显示所有dns
    ipconfig/flushdns 清除本地dns缓存
    ipconfig/all > f:\ipconfig.txt 备份网络配置
    
### 全局可以用的命令
    cls 清空界面
    F3 可以重复上一个命令    
    ipconfig/all > f:\ipconfig.txt 备份网络配置
    echo 'dengzhiqiang' >> ipconfig.txt 追加内容
    echo 'dengzhiqiang' > ipconfig.txt 删除了原来的内容，并写入
    type ipconfig.txt 查看内容
  
### 显示网络状态
    netstat 显示活动的tcp连接，计算机侦听的接口，以太网统计信息，ip路由表
    netstat -n 数字化主机名称，即用ip地址显示
    netstat -e 统计一些基本的流量，包括单播数据，非单播数据，丢弃，错误，未知协议
    netstat -r 显示路由表信息 0.0.0.0表示不明的网络
    netstat -o 显示当前活动的tcp连接
    netstat -a 显示所有活动的tcp连接以及侦听端口
    netstat -s -p tcp 查看本机所有tcp连接情况
    netstat -s -p udp 查看本机所有udp连接情况

    
    