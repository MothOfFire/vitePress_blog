---
layout: doc
title: "MongoDB"
---

## MongoDB 基础

### MongoDB 的基本概念

|     SQL     |   MongoDB   |                  说明                  |
| :---------: | :---------: | :------------------------------------: |
|  database   |  database   |                 数据库                 |
|    table    | collection  |             数据库表/集合              |
|     row     |  document   |            数据记录行/文档             |
|   column    |    field    |              数据字段/域               |
|    index    |    index    |                  索引                  |
| table joins |     ---     |         表连接,MongoDB 不支持          |
| primary key | primary key | 主键,MongoDB 自动将\_id 字段设置为主键 |

### MongoDB 连接

```shell

# 启动客户端
# 6.0以上版本
mongosh

# 6.0以下版本
mongo




```

### 数据库相关操作的指令

```shell
# 显示所有数据库
show dbs

# 切换数据库
use 数据库名

# 删除当前数据库
db.dropDatabase()

# 显示当前数据库
db

```

### 集合相关操作的指令

```shell
# 创建集合
db.createCollection(name, options)

# 显示当前数据库所有集合
show collections

# 重命名集合
db.集合名.renameCollection(newName)

# 删除集合
db.集合名.drop()

```

### 文档相关的操作指令

#### 查询文档

```shell

# 查询文档
db.集合名.find(query, projection)

# 插入文档
db.集合名.insert(document)

# 更新文档
db.集合名.update(
    <query>,
    <update>,
    {
        upsert: <boolean>,
        multi: <boolean>,
        writeConcern: <document>
    }
)
# 删除文档
db.集合名.remove()
```

#### 插入文档

#### 更新文档

#### 删除文档

## MongoDB 高级

## mongose
