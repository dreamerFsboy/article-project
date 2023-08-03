# 项目重新设置为小说网站项目

设计route

1.登陆
2.小说列表界面、包含小说搜索功能
3.小说详情页面：小说名称、小说作者、小说简介、创建时间、最新编辑时间、小说章节目录
4.小说展示界面：小说某章节具体显示、有目录、章节评论

5.小说编辑
6.章节编辑
7.编辑个人信息

管理员功能：
登陆、
创建临时管理账号
录入邮箱并创建账号（分发邮件）
其他功能（

用户route

/                               首页（2.）
/login                          登陆（1.）
/novel/:novelId/detail          小说详情（3.）
/novel/:novelId/:partId         小说章节（4.）
/novel/:novelId/edit            小说信息编辑（5.）
/novel/:novelId/:partId/edit    小说章节编辑（6.）
/profile                        个人信息编辑（7.）

管理员route

/admin                          管理员登陆
/admin/dashboard                管理员主面板
/admin/addUser                  管理面板之添加用户
/admin/addAdmin                 管理面板之创建临时管理账号
