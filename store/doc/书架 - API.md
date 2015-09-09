# 书架 - 路由表

## 数据格式
JSON
```js
{
  "status": {
    "code": [number],
    "msg": [string/object]
  },
  "data": {}
}
```

## 前台路由
### /
> 主页（我的书架）

点击某个标签时，跳转到`/shelf/:id`

### /account
> 个人信息

### /account/manage
> 个人信息

### /shelf/[:id]
> 我的书架

`:id` 书架标签

### /shelf/manage
> 我的书架 - 管理页面

管理 `收藏书籍`
管理 `标签`

### /library/[:id]
> 书库

`:id` 书库类别

### /books/add
> 新增书籍

### /books/[:id]
> 书籍详情页面

### /books/[:id]/update
> 更新书籍详情信息页面


### /search[?q=]
> 搜索页面

## View路径
> 提供基础访问路径

### /
- 获取 首页框架

## API
> API规则：`/api` + `/version` + `path`
  eg. `/api/v1/index`

- `GET` /account
获取 `个人信息`

- `POST` /account/info
修改 `个人信息`

- `POST` /account/password
修改 `个人密码`

- `GET` /shelf/books/[:id]
`:id` 标签ID
获取 `收藏书籍`列表

- `POST` /shelf/books/
新增 `收藏书籍`

- `POST` /shelf/books/update
修改 `收藏书籍`信息

- `POST` /shelf/books/delete
删除 `收藏书籍`

- `GET` /shelf/labels/
获取 `标签`列表

- `POST` /shelf/labels/
新增 `标签`

- `GET` /shelf/labels/:id
获取 `标签`信息

- `POST` /shelf/labels/:id/update
修改 `标签`信息

- `POST` /shelf/labels/:id/delete
删除 `标签`

- `GET` /library/[:category]
`:category` 页面栏目 - index/……
获取 `书籍`列表

- `POST` /books/
新增 `书籍`

- `GET` /books/:id
获取 `书籍`信息

- `POST` /books/:id/update
修改 `书籍`信息

- `POST` /books/:id/reply
增加 `书籍`评论

- `GET` /search?q=xxx
获取 搜索结果