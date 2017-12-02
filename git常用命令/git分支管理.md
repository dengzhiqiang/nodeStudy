<!-- https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840038939c291467cc7c747b1810aab2fb8863508000
 -->

### 首先，我们创建dev分支，然后切换到dev分支：
    $ git checkout -b dev
        Switched to a new branch 'dev'

    git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：
    $ git branch dev
    $ git checkout dev
    Switched to branch 'dev'        

### git branch命令查看当前分支：    
    $ git branch
    * dev
    git branch命令会列出所有分支，当前分支前面会标一个*号。

### 现在，dev分支的工作完成，我们就可以切换回master分支
    $ git checkout master
    Switched to branch 'master'

### 现在，我们把dev分支的工作成果合并到master分支上：
    $ git merge dev
    Updating d17efd8..fec145a
    Fast-forward
    readme.txt |    1 +
    1 file changed, 1 insertion(+)

### 合并完成后，就可以放心地删除dev分支了：
    $ git branch -d dev    