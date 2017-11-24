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
    netstat -o 显示当前活动的tcp连接 能看到进程pid
    netstat -a 显示所有活动的tcp连接以及侦听端口
    netstat -s -p tcp 查看本机所有tcp连接情况
    netstat -s -p udp 查看本机所有udp连接情况
    netstat -s -p icmp 查看本机所有icmp连接情况 icmp internet控制消息协议
    netstat -s -p ip 查看本机所有ip连接情况 

### 网卡信息
    getmac 获取网卡信息，mac地址 有线网卡、无线网卡和虚拟网卡
    getmac/s 192.168.0.101 获取局域网内网卡信息，有可能会被禁止获取
    
### arp缓存表
    地址解析协议arp
    显示本地计算机所有接口的ARP缓存表
    arp -a 显示所有arp缓存表
    arp/s ip地址 网卡地址 将ip地址和网卡地址绑定
    arp/s 192.168.0.106 00-F1-F3-E7-02-BB
    arp -d 192.168.0.106 解除ip地址和网卡的绑定
    
### 显示完整的路由表
    route print 打印路由表
    route print 192.* 打印192开头的路由表       
    
### 查看指定计算机的共享资源
    net view 
    net view 192.168.100    
    net share 查看本地计算机的共享资源
    net user  查看本地计算机上所有用户账户
    net /? 查看语法
    net statistics 查看本机的统计服务
    net statistics server 查看本地服务器服务的统计信息
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




























    
    