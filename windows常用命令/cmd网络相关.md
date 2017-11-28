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
    任何命名 /? 查看使用方法
    type/? 查看type 的使用方法
  
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
    net config 查看本机上可以配置的服务
    net config workstation 查看本地工作站上的配置服务
    net localgroup 查看本地组列表
    
### 网络诊断
        
### ping 相当于向目标发送数据，返回则正常
    ping/? 查看ping的用法    
    ping 127.0.0.1 测试网卡是否正常

### 诊断网络协议
    ipconfig/all 查看本机ip，在ping本地地址（ping 192.168.0.106），如果不能正常返回，表明网络协议故障，应该重点排查网络协议的配置。比如tcp/ip协议，    
    
### 诊断路由器配置
    ipconfig/all 
        获取路由器地址==> DHCP 服务器 . . . . . . . . . . . : 192.168.0.1   
    arp -a 192.168.0.1           8c-a6-df-b2-fb-23     动态 
    得出：路由器的ip是192.168.0.1
    ping 路由器地址：如果不能返回信息，表示是路由器与电脑之间有错误

### 测试hosts文件是否正常
    ping localhost 测试hosts文件是否正常      

### ping网络攻击
    ping/?
    ping -l 65500 -t 192.168.0.101 一直ping发送数据包
    ping 局域网内的主机，如果请求超时，表示计算机没有响应，重点排查网线连接，网卡，驱动程序
    试试能不能ping通其他的主机，如果只有某一台主机ping不通，表明计算机的网线连接，网卡，驱动程序有故障
    
    ping -a 192.168.0.101 查看对应ip地址的主机名称
    更改计算机的主机名称：我的电脑--》右键--》属性
    
    如果发现某个人的流量特别大，可以通过ip查找主机名称，定位到某个人
    
    ping www.baidu.com 能够获取域名的ip地址    
        正在 Ping www.yufangyl.com [116.62.246.252] 具有 32 字节的数据:
        来自 116.62.246.252 的回复: 字节=32 时间=48ms TTL=50


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




























    
    