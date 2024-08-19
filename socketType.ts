// socket 通信信令枚举
export default class SocketType {
  /**
   * 客户端登录
   */
  public static readonly CLIENT_LOGIN = 0

  /**
   * 服务端对于客户端登陆的回复
   */
  public static readonly SERVER_LOGIN_REPLY = 100

  /**
   * 服务端对于其他客户端登陆的通知
   */
  public static readonly SERVER_LOGIN_INFORM = 200

  /**
   * 客户端登出
   */
  public static readonly CLIENT_LOGOUT = 1

  /**
   * 服务端对于客户端登出的回复
   */
  public static readonly SERVER_LOGOUT_REPLY = 101

  /**
   * 服务端对于其他客户端登出的通知
   */
  public static readonly SERVER_LOGOUT_INFORM = 201

  // ------------------------------------------------------------------ 摄像头状态
  /**
   * 客户端改变摄像头状态
   */
  public static readonly CLIENT_CAMERA_STATUS = 3

  /**
   * 服务端对于客户端改变摄像头状态的回复
   */
  public static readonly SERVER_CAMERA_STATUS_REPLY = 103

  /**
   * 服务端对于客户端改变摄像头状态的通知
   */
  public static readonly SERVER_CAMERA_STATUS_INFORM = 203

  // ------------------------------------------------------------------ 麦克风状态
  /**
   * 客户端改变麦克风状态
   */
  public static readonly CLIENT_MICROPHONE_STATUS = 4

  /**
   * 服务端对于客户端改变麦克风状态的回复
   */
  public static readonly SERVER_MICROPHONE_STATUS_REPLY = 104

  /**
   * 服务端对于客户端改变麦克风状态的通知
   */
  public static readonly SERVER_MICROPHONE_STATUS_INFORM = 204

  // ------------------------------------------------------------------
  // 允许（只限老师）或关闭某学生的发言
  /**
   * 允许（只限老师）或关闭某学生的发言
   */
  public static readonly CLIENT_TALKING_STATUS = 5

  /**
   * 服务端对于允许（只限老师）或关闭某学生的发言的回复
   */
  public static readonly SERVER_TALKING_STATUS_REPLY = 105

  /**
   * 服务端对于允许（只限老师）或关闭某学生的发言的通知
   */
  public static readonly SERVER_TALKING_STATUS_INFORM = 205

  // ------------------------------------------------------------------
  // 播放或者关闭视频直播
  /**
   * 播放或者关闭视频直播
   */
  public static readonly CLIENT_VIDEO_STATUS = 6

  /**
   * 服务端对于播放或者关闭视频直播的回复
   */
  public static readonly SERVER_VIDEO_STATUS_REPLY = 106

  /**
   * 服务端对于播放或者关闭视频直播的通知
   */
  public static readonly SERVER_VIDEO_STATUS_INFORM = 206

  // ----------------------------------------------n--------------------
  // 播放或者关闭音频直播
  /**
   * 播放或者关闭音频直播
   */
  public static readonly CLIENT_AUDIO_STATUS = 7

  /**
   * 服务端对于播放或者关闭音频直播的回复
   */
  public static readonly SERVER_AUDIO_STATUS_REPLY = 107

  /**
   * 服务端对于播放或者关闭音频直播的通知
   */
  public static readonly SERVER_AUDIO_STATUS_INFORM = 207

  // ------------------------------------------------------------------ 黑板描绘
  /**
   * 描绘黑板
   */
  public static readonly CLIENT_DRAW_BOARD = 8

  /**
   * 服务端对于描绘黑板的回复
   */
  public static readonly SERVER_DRAW_BOARD_REPLY = 108

  /**
   * 服务端对于描绘黑板的通知
   */
  public static readonly SERVER_DRAW_BOARD_INFORM = 208

  // ------------------------------------------------------------------ 黑板选择
  /**
   * 选择黑板
   */
  public static readonly CLIENT_PICK_BOARD = 9

  /**
   * 服务端对于选择黑板的回复
   */
  public static readonly SERVER_PICK_BOARD_REPLY = 109

  /**
   * 服务端对于选择黑板的通知
   */
  public static readonly SERVER_PICK_BOARD_INFORM = 209

  // ------------------------------------------------------------------ 上下课铃声
  /**
   * 上下课铃声
   */
  public static readonly CLIENT_RING = 10

  /**
   * 服务端对于上下课铃声的回复
   */
  public static readonly SERVER_RING_REPLY = 110

  /**
   * 服务端对于上下课铃声的通知
   */
  public static readonly SERVER_RING_INFORM = 210

  /**
   * 服务端对于客户端错误登陆事件的回复
   */
  public static readonly SERVER_WRONG_LOGIN_REPLAY = 114

  // ------------------------------------------------------------------
  // 增加授权与会者
  /** 增加授权与会者（此值暂时无用） */
  // public static readonly  CLIENT_ADD_PERMIT = "11";

  /** 服务端对于增加授权与会者的回复（此值暂时无用） */
  // public static readonly  SERVER_ADD_PERMIT_REPLY = "111";

  /**
   * 服务端对于增加授权与会者的通知
   */
  public static readonly SERVER_ADD_PERMIT_INFORM = 211

  // ------------------------------------------------------------------ 预登陆事件
  /** 客户端预登陆事件，此值暂时无用 */
  // public static readonly  CLIENT_PRE_LOGIN = "12";

  /**
   * 服务端对于客户端预登陆事件的回复
   */
  public static readonly SERVER_PRE_LOGIN_REPLY = 112

  /** 服务端对于客户端预登陆事件的通知，此值暂时无用 */
  // public static readonly  SERVER_PRE_LOGIN_INFORM = "212";

  // ------------------------------------------------------------------ 预登出事件
  /**
   * 客户端预登出事件
   */
  public static readonly CLIENT_PRE_LOGOUT = 13

  /**
   * 服务端对于客户端预登出事件的回复
   */
  public static readonly SERVER_PRE_LOGOUT_REPLY = 113

  /**
   * 服务端对于客户端预登出事件的通知
   */
  public static readonly SERVER_PRE_LOGOUT_INFORM = 213

  // ------------------------------------------------------------------
  // 设置桌面版锁屏状态
  /**
   * 老师开关桌面版锁屏状态
   */
  public static readonly CLIENT_LOCKSCREEN_STATUS = 20

  /**
   * 服务端对于老师开关桌面版锁屏的回复
   */
  public static readonly SERVER_LOCKSCREEN_STATUS_REPLY = 120

  /**
   * 服务端对于老师开关桌面版锁屏的通知
   */
  public static readonly SERVER_LOCKSCREEN_STATUS_INFORM = 220

  // ------------------------------------------------------------------
  // 客户端状态异常（非激活状态）
  /**
   * 客户端状态异常（老师、助教、督导、学生均可）
   */
  public static readonly CLIENT_UNEXPECTED_STATUS = 21

  /**
   * 服务端对于客户端状态异常的回复
   */
  public static readonly SERVER_UNEXPECTED_STATUS_REPLY = 121

  /**
   * 服务端对于客户端状态异常的通知
   */
  public static readonly SERVER_UNEXPECTED_STATUS_INFORM = 221

  // ------------------------------------------------------------------ 发起桌面监控
  /**
   * 发起桌面监控（老师、助教、督导）
   */
  public static readonly CLIENT_CAPTURE_DESKTOP_SNAPSHOT = 22

  /**
   * 服务端对于发起桌面监控的回复
   */
  public static readonly SERVER_CAPTURE_DESKTOP_SNAPSHOT_REPLY = 122

  /**
   * 服务端对于发起桌面监控的通知
   */
  public static readonly SERVER_CAPTURE_DESKTOP_SNAPSHOT_INFORM = 222

  // ------------------------------------------------------------------ 提交桌面监控
  /**
   * 提交桌面监控（主要是学生）
   */
  public static readonly CLIENT_SUBMIT_DESKTOP_SNAPSHOT = 23

  /**
   * 服务端对于提交桌面监控的回复
   */
  public static readonly SERVER_SUBMIT_DESKTOP_SNAPSHOT_REPLY = 123

  /**
   * 服务端对于提交桌面监控的通知
   */
  public static readonly SERVER_SUBMIT_DESKTOP_SNAPSHOT_INFORM = 223

  // ------------------------------------------------------------------

  // 点名主弹窗开启
  public static ROLLCALL_MAIN_OPEN = 1000883
  public static ROLLCALL_MAIN_OPEN_REPLY = 1001883
  public static ROLLCALL_MAIN_OPEN_INFORM = 1002883

  // 点名结果弹窗开启
  public static ROLLCALL_RESULT_OPEN = 1000886
  public static ROLLCALL_RESULT_OPEN_REPLY = 1001886
  public static ROLLCALL_RESULT_OPEN_INFORM = 1002886

  // 发起或者关闭点名
  /**
   * 发起或者关闭（老师、助教、督导）
   */
  public static readonly CLIENT_TURNING_ROLLCALL = 24

  /**
   * 服务端对于发起或者关闭的回复
   */
  public static readonly SERVER_TURNING_ROLLCALL_REPLY = 124

  /**
   * 服务端对于发起或者关闭的通知
   */
  public static readonly SERVER_TURNING_ROLLCALL_INFORM = 224

  // ------------------------------------------------------------------ 响应点名
  /**
   * 响应点名（学生）
   */
  public static readonly CLIENT_ANSWER_ROLLCALL = 25

  /**
   * 服务端对于响应点名的回复
   */
  public static readonly SERVER_ANSWER_ROLLCALL_REPLY = 125

  /**
   * 服务端对于响应点名的通知
   */
  public static readonly SERVER_ANSWER_ROLLCALL_INFORM = 225

  // ------------------------------------------------------------------
  // 多媒体轮询监控状态控制
  /**
   * 设置（只限老师）某学生的监控状态（开关、监控类型等）
   */
  public static readonly CLIENT_TURNING_MONITOR = 26

  /**
   * 服务端对于设置（只限老师）某学生的监控状态的回复
   */
  public static readonly SERVER_TURNING_MONITOR_REPLY = 126

  /**
   * 服务端对于设置（只限老师）某学生的监控状态的通知
   */
  public static readonly SERVER_TURNING_MONITOR_INFORM = 226

  // ------------------------------------------------------------------
  // 视频监控开关状态
  /**
   * 视频监控开关状态（只限学生）
   */
  public static readonly CLIENT_VIDEO_MONITOR_STATUS = 27

  /**
   * 服务端对于视频监控开关状态的回复
   */
  public static readonly SERVER_VIDEO_MONITOR_STATUS_REPLY = 127

  /**
   * 服务端对于视频监控开关状态的通知
   */
  public static readonly SERVER_VIDEO_MONITOR_STATUS_INFORM = 227

  // ------------------------------------------------------------------
  // 音频监控开关状态
  /**
   * 音频监控开关状态（只限学生）
   */
  public static readonly CLIENT_AUDIO_MONITOR_STATUS = 28

  /**
   * 服务端对于播放或者关闭音频监控的回复
   */
  public static readonly SERVER_AUDIO_MONITOR_STATUS_REPLY = 128

  /**
   * 服务端对于播放或者关闭音频监控的通知
   */
  public static readonly SERVER_AUDIO_MONITOR_STATUS_INFORM = 228

  // ------------------------------------------------------------------
  // 上课已进行时间提示
  /** 不生效 */
  // public static readonly  CLIENT_LESSON_CONTINUE_STATUS = "29";

  /** 不生效 */
  // public static readonly  SERVER_LESSON_CONTINUE_STATUS_REPLY = "129";

  /**
   * 服务端对于上课已进行时间提示的通知
   */
  public static readonly SERVER_LESSON_CONTINUE_STATUS_INFORM = 229

  // ------------------------------------------------------------------
  // 禁止或允许聊天
  /**
   * 老师禁止或允许聊天权限
   */
  public static readonly CLIENT_CHAT_PERMIT = 32

  /**
   * 服务端对于老师禁止或允许聊天权限的回复
   */
  public static readonly SERVER_CHAT_PERMIT_REPLY = 132

  /**
   * 服务端对于老师禁止或允许聊天权限的通知
   */
  public static readonly SERVER_CHAT_PERMIT_INFORM = 232

  // ------------------------------------------------------------------
  // 禁言
  /**
   * 老师对学生发起禁言
   */
  public static readonly CLIENT_STU_CHAT_FORBIDDEN = 1000619

  /**
   * 老师对学生发起禁言回复
   */
  public static readonly SERVER_STU_CHAT_FORBIDDEN_REPLY = 1001619

  /**
   * 老师对学生发起禁言通知
   */
  public static readonly SERVER_STU_CHAT_FORBIDDEN_INFORM = 1002619
  // ------------------------------------------------------------------
  //老師刪除聊天信息
  /**
   * 老师删除学生聊天信息
   */
  public static readonly CLIENT_CHAT_DELETE_MSG = 1000620

  /**
   * 老师删除学生聊天信息回复
   */
  public static readonly SERVER_CHAT_DELETE_MSG_REPLY = 1001620

  /**
   * 老师删除学生聊天信息通知
   */
  public static readonly SERVER_CHAT_DELETE_MSG_INFORM = 1002620
  // ------------------------------------------------------------------
  // 禁止或允许举手
  /**
   * 老师禁止或允许举手权限
   */
  public static readonly CLIENT_RAISEHAND_PERMIT = 33

  /**
   * 服务端对于老师禁止或允许举手权限的回复
   */
  public static readonly SERVER_RAISEHAND_PERMIT_REPLY = 133

  /**
   * 服务端对于老师禁止或允许举手权限的通知
   */
  public static readonly SERVER_RAISEHAND_PERMIT_INFORM = 233

  // ------------------------------------------------------------------
  // 设置强制同步状态
  /**
   * 老师设置强制同步状态
   */
  public static readonly CLIENT_FORCESYNC_STATUS = 34

  /**
   * 服务端对于老师设置强制同步状态的回复
   */
  public static readonly SERVER_FORCESYNC_STATUS_REPLY = 134

  /**
   * 服务端对于老师设置强制同步状态的通知
   */
  public static readonly SERVER_FORCESYNC_STATUS_INFORM = 234

  // ------------------------------------------------------------------
  // 打开或关闭课件
  /**
   * 老师打开或关闭课件
   */
  public static readonly CLIENT_COURSEWARE_STATUS = 40

  /**
   * 服务端对于老师打开或关闭课件的回复
   */
  public static readonly SERVER_COURSEWARE_STATUS_REPLY = 140

  /**
   * 服务端对于老师打开或关闭课件的通知
   */
  public static readonly SERVER_COURSEWARE_STATUS_INFORM = 240

  // ------------------------------------------------------------------ 课件翻页
  /**
   * 老师课件翻页
   */
  public static readonly CLIENT_TURNING_PAGE = 41

  /**
   * 服务端对于老师课件翻页的回复
   */
  public static readonly SERVER_TURNING_PAGE_REPLY = 141

  /**
   * 服务端对于老师课件翻页的通知
   */
  public static readonly SERVER_TURNING_PAGE_INFORM = 241

  // ------------------------------------------------------------------ 课件描绘
  /**
   * 老师课件描绘
   */
  public static readonly CLIENT_DRAW_COURSEWARE = 42

  /**
   * 服务端对于老师课件描绘的回复
   */
  public static readonly SERVER_DRAW_COURSEWAR_REPLY = 142

  /**
   * 服务端对于老师课件描绘的通知
   */
  public static readonly SERVER_DRAW_COURSEWAR_INFORM = 242

  // ------------------------------------------------------------------ 课件缩放
  public static readonly CLIENT_COURSEWARE_RATIO = 44
  public static readonly SERVER_COURSEWARE_RATIO_REPLY = 144
  public static readonly SERVER_COURSEWARE_RATIO_INFORM = 244

  // ------------------------------------------------------------------
  // 开始或结束举手
  /**
   * 学生开始或结束举手
   */
  public static readonly CLIENT_RAISEHAND_STATUS = 50

  /**
   * 服务端对于学生开始或结束举手的回复
   */
  public static readonly SERVER_RAISEHAND_STATUS_REPLY = 150

  /**
   * 服务端对于学生开始或结束举手的通知
   */
  public static readonly SERVER_RAISEHAND_STATUS_INFORM = 250

  /** 服务端对于学生开始或结束举手的批量通知 */
  public static readonly SERVER_RAISEHAND_STATUS_BATCH_INFORM = 251
  // ------------------------------------------------------------------ 教材翻页
  /**
   * 老师教材翻页
   */
  public static readonly CLIENT_TURNING_MATERIAL = 61

  /**
   * 服务端对于老师教材翻页的回复
   */
  public static readonly SERVER_TURNING_MATERIAL_REPLY = 161

  /**
   * 服务端对于老师教材翻页的通知
   */
  public static readonly SERVER_TURNING_MATERIAL_INFORM = 261

  // 教材缩放
  public static readonly CLIENT_TEXTBOOK_RATIO = 63

  public static readonly SERVER_TEXTBOOK_RATIO_REPLY = 163

  public static readonly SERVER_TEXTBOOK_RATIO_INFORM = 263

  // ------------------------------------------------------------------ 教材描绘
  /**
   * 老师教材描绘
   */
  public static readonly CLIENT_DRAW_MATERIAL = 62

  /**
   * 服务端对于老师教材描绘的回复
   */
  public static readonly SERVER_DRAW_MATERIAL_REPLY = 162

  /**
   * 服务端对于老师教材描绘的通知
   */
  public static readonly SERVER_DRAW_MATERIAL_INFORM = 262

  // ------------------------------------------------------------------
  // 开关多媒体界面
  /**
   * 老师开关多媒体界面
   */
  public static readonly CLIENT_TURNING_MULTIMEDIA = 70

  /**
   * 服务端对于老师开关多媒体界面的回复
   */
  public static readonly SERVER_TURNING_MULTIMEDIA_REPLY = 170

  /**
   * 服务端对于老师开关多媒体界面的通知
   */
  public static readonly SERVER_TURNING_MULTIMEDIA_INFORM = 270

  // ------------------------------------------------------------------ 设置多媒体
  /**
   * 老师调节多媒体课件状态和位置
   */
  public static readonly CLIENT_ADJUST_MULTIMEDIA = 71

  /**
   * 服务端对于老师调节多媒体课件状态和位置的回复
   */
  public static readonly SERVER_ADJUST_MULTIMEDIA_REPLY = 171

  /**
   * 服务端对于老师调节多媒体课件状态和位置的通知
   */
  public static readonly SERVER_ADJUST_MULTIMEDIA_INFORM = 271

  // ------------------------------------------------------------------
  // 播放或停止多媒体课件
  /**
   * 老师播放或停止多媒体课件
   */
  public static readonly CLIENT_MULTIMEDIA_STATUS = 72

  /**
   * 服务端对于老师播放或停止多媒体课件的回复
   */
  public static readonly SERVER_MULTIMEDIA_STATUS_REPLY = 172

  /**
   * 服务端对于老师播放或停止多媒体课件的通知
   */
  public static readonly SERVER_MULTIMEDIA_STATUS_INFORM = 272

  // ------------------------------------------------------------------
  // 新开多媒体课件
  /**
   * 老师新开多媒体课件
   */
  public static readonly CLIENT_OPEN_MULTIMEDIA = 73

  /**
   * 服务端对于老师新开多媒体课件的回复
   */
  public static readonly SERVER_OPEN_MULTIMEDIA_REPLY = 173

  /**
   * 服务端对于老师新开多媒体课件的通知
   */
  public static readonly SERVER_OPEN_MULTIMEDIA_INFORM = 273

  // ------------------------------------------------------------------

  // 打开或关闭随堂测试列表
  /**
   * 老师打开或关闭随堂测试列表
   */
  public static readonly CLIENT_OPEN_QUIZING = 1000695

  /**
   * 老师打开或关闭随堂测试列表的通知
   */
  public static readonly SERVER_OPEN_QUIZING_INFORM = 1002695

  /**
   * 老师获取当堂课试卷列表
   */
  public static readonly CLIENT_QUIZING_PAPER = 1000694

  /**
   * 老师获取当堂课试卷列表的通知
   */
  public static readonly SERVER_QUIZING_PAPER_INFORM = 1002694
  // 开启或关闭随堂测试
  /**
   * 老师开启或关闭随堂测试
   */
  public static readonly CLIENT_TURNING_QUIZING = 80

  /**
   * 服务端对于老师开启或关闭随堂测试的回复
   */
  public static readonly SERVER_TURNING_QUIZZING_REPLY = 180

  /**
   * 服务端对于老师开启或关闭随堂测试的通知
   */
  public static readonly SERVER_TURNING_QUIZZING_INFORM = 280

  // ------------------------------------------------------------------
  // 回答随堂测试题目
  /**
   * 学生回答随堂测试题目
   */
  public static readonly CLIENT_ANSWER_QUIZING = 81

  /**
   * 服务端对于学生回答随堂测试题目的回复
   */
  public static readonly SERVER_ANSWER_QUIZING_REPLY = 181

  /**
   * 服务端对于学生回答随堂测试题目的通知
   */
  public static readonly SERVER_ANSWER_QUIZING_INFORM = 281

  // ------------------------------------------------------------------ 交卷
  /**
   * 学生交卷
   */
  public static readonly CLIENT_HANDIN_QUIZING = 82

  /**
   * 服务端对于学生交卷的回复
   */
  public static readonly SERVER_HANDIN_QUIZING_REPLY = 182

  /**
   * 服务端对于学生交卷的通知
   */
  public static readonly SERVER_HANDIN_QUIZING_INFORM = 282

  // ------------------------------------------------------------------
  // 查看考试现场数据
  /**
   * 查看考试现场数据
   */
  public static readonly CLIENT_WATCH_QUIZING = 83

  /**
   * 服务端对于查看考试现场数据的回复
   */
  public static readonly SERVER_WATCH_QUIZING_REPLY = 183

  /**
   * 服务端对于查看考试现场数据的通知
   */
  public static readonly SERVER_WATCH_QUIZING_INFORM = 283

  // ------------------------------------------------------------------
  // 查看个人指定随堂测试数据
  /**
   * 查看个人指定随堂测试数据
   */
  public static readonly CLIENT_WATCH_PERSONAL_QUIZING = 84

  /**
   * 服务端对于查看个人指定随堂测试数据的回复
   */
  public static readonly SERVER_WATCH_PERSONAL_QUIZING_REPLY = 184

  /**
   * 服务端对于查看个人指定随堂测试数据的通知
   */
  public static readonly SERVER_WATCH_PERSONAL_QUIZING_INFORM = 284

  // ------------------------------------------------------------------
  // 讲解题卷打开、滚动
  /**
   * 老师开启或关闭讲解题卷
   */
  public static readonly CLIENT_ROLL_SOLVING = 85

  /**
   * 服务端对于老师开启或关闭讲解题卷的回复
   */
  public static readonly SERVER_ROLL_SOLVING_REPLY = 185

  /**
   * 服务端对于老师开启或关闭讲解题卷的通知
   */
  public static readonly SERVER_ROLL_SOLVING_INFORM = 285

  // ------------------------------------------------------------------ 新增题卷模板
  /**
   * 老师新增题卷模板
   */
  public static readonly CLIENT_QUIZING_STATUS = 86

  /**
   * 服务端对于老师新增题卷模板的回复
   */
  public static readonly SERVER_QUIZING_STATUS_REPLY = 186

  /**
   * 服务端对于老师新增题卷模板的通知
   */
  public static readonly SERVER_QUIZZING_STATUS_INFORM = 286

  /**
   * 老师配置作业
   */
  public static readonly CLIENT_CONFIG_QUIZING = 88

  /**
   * 服务端对于老师配置作业的回复
   */
  public static readonly SERVER_CONFIG_QUIZING_REPLY = 188

  /**
   * 服务端对于老师配置作业的通知
   */
  public static readonly SERVER_CONFIG_QUIZING_INFORM = 288

  // ------------------------------------------------------------------ 黑板缓存
  /**
   * 缓存黑板写字
   */
  public static readonly CLIENT_BUFFER_BOARD = 91

  /**
   * 缓存黑板写字的回复
   */
  public static readonly SERVER_BUFFER_BOARD_REPLY = 191

  /**
   * 缓存黑板写字的通知
   */
  public static readonly SERVER_BUFFER_BOARD_INFORM = 291

  // ------------------------------------------------------------------ 课件缓存
  /**
   * 缓存课件写字
   */
  public static readonly CLIENT_BUFFER_COURSEWARE = 92

  /**
   * 缓存课件写字的回复
   */
  public static readonly SERVER_BUFFER_COURSEWARE_REPLY = 192

  /**
   * 缓存课件写字的通知
   */
  public static readonly SERVER_BUFFER_COURSEWARE_INFORM = 292

  // ------------------------------------------------------------------ 教材缓存
  /**
   * 缓存教材写字
   */
  public static readonly CLIENT_BUFFER_MATERIAL = 93

  /**
   * 缓存教材写字的回复
   */
  public static readonly SERVER_BUFFER_MATERIAL_REPLY = 193

  /**
   * 缓存课件写字的通知
   */
  public static readonly SERVER_BUFFER_MATERIAL_INFORM = 293

  // // ------------------------------------------------------------------
  // 课堂交互
  /**
   * 点击交互类型
   */
  public static readonly CLIENT_CLASSMUTUAL = 94

  /**
   * 点击交互类型返回
   */
  public static readonly SERVER_CLASSMUTUAL_REPLY = 194

  /**
   * 点击交互类型的通知
   */
  public static readonly SERVER_CLASSMUTUAL_INFORM = 294

  /**
   * 学生点击交互类型
   */
  public static readonly CLIENT_MUTUALBACK = 95

  /**
   * 学生点击交互类型返回
   */
  public static readonly SERVER_CLASSBACK_REPLY = 195

  /**
   * 学生点击交互类型的通知(通知老师)
   */
  public static readonly SERVER_CLASSBACK_INFORM = 295

  /**
   * 倒计时状态
   */
  public static readonly CLIENT_COUNT_DOWN = 75

  /**
   * 服务端 对倒计时状态的回复
   */
  public static readonly SERVER_COUNT_DOWN_REPLY = 175

  /**
   * 服务端 对倒计时状态的通知
   */
  public static readonly SERVER_COUNT_DOWN_INFORM = 275

  /**
   * 服务端对于老师听力控制的通知
   */
  public static readonly SERVER_QUIZING__LISTEN_STATUS_INFORM = 287
  /**
   * 老师端快速问答广播
   */
  public static readonly CLIENT_MUTUAL_BROAD = 76
  public static readonly CLIENT_MUTUAL_BROAD_REPLY = 176
  /**
   * 考试实例详情
   */
  public static readonly WATCH_QUIZ_REPLAY = 183

  /**
   * 手动刷新列表
   */
  public static readonly CLIENT_REFRESH_LIST = 1000115
  /**
   * 手动刷新列表返回
   */
  public static readonly SERVER_REFRESH_LIST_REPLY = 1001115
  /**
   * 手动刷新列表通知
   */
  public static readonly SERVER_REFRESH_LIST_INFORM = 1002115

  public static readonly CLIENT_GETMUTUALDATA = 96
  public static readonly SERVER_GETMUTUALDATA_REPLY = 196
  public static readonly SERVER_GETMUTUALDATA_INFORM = 296

  public static readonly CLIENT_CLOSE_MUTUAL = 1000104

  /**
   * 考试对话框打开
   */
  public static readonly SERVER_EXAME_OPEN = 10001181

  /**
   * 考试对话框关闭
   */
  public static readonly SERVER_EXAME_CLOSE = 10001182

  /**
   * 拖堂对话框关闭
   */
  public static readonly SERVER_DELAY_CLOSE = 10001183

  /**
   * 快速问答最小化
   */
  public static readonly SERVER_CLASSQUESTION_MIN = 10001184

  /**
   * 快速问答最大化
   */
  public static readonly SERVER_CLASSQUESTION_MAX = 10001185

  /**
   * 快速问答关闭同步
   */
  public static readonly SERVER_CLASSQUESTION_CLOSE = 10001186

  /**
   * 点名对话框关闭同步
   */
  public static readonly SERVER_ROLLCALL_CLOSE = 10001187

  /**
   * 作业讲解打开
   */
  public static readonly SERVER_EXPLAIN_OPEN = 100011813

  /**
   * 作业讲解关闭
   */
  public static readonly SERVER_EXPLAIN_CLOSE = 100011814

  // ------------------------------------------------------------------ APP和PC同步消息
  /**
   * 同步消息发送
   */
  public static readonly CLIENT_PCAPP_SYNC = 1000118

  /**
   * 同步消息自己返回
   */
  public static readonly SERVER_PCAPP_SYNC_REPLY = 1001118
  /**
   * 同步消息自己通知
   */
  public static readonly SERVER_PCAPP_SYNC_INFO = 1002118

  /**
   * APP查看统计
   */
  public static readonly CLIENT_EXAM_APPREVIEW = 1000129

  /*** APP查看统计返回 */
  public static readonly SERVER_EXAM_APPREVIEW_REPLY = 100129

  /*** APP查看统计通知 */
  public static readonly SERVER_EXAM_APPREVIEW_INFORM = 1002129

  /**
   * 开关投影仪显示
   */
  public static readonly CLIENT_MASKPC = 1000128

  /**
   * 课程状态通知
   */
  public static readonly CLIENT_TIME_OVER = 1000116

  /*** 课程状态通知返回 */
  public static readonly ER_TIME_OVER_REPLY = 1001116

  /*** 课程状态通知通知 */
  public static readonly SERVER_TIME_OVER_INFORM = 1002116

  // ------------------------------------------------------------------ 老师鲜花奖励
  /**
   * 老师鲜花奖励
   */
  public static readonly CLIENT_FLOWER_INCENTIVE = 1000136

  /**
   * 老师鲜花奖励返回
   */
  public static readonly SERVER_FLOWER_INCENTIVE_REPLY = 1001136

  /**
   * 老师鲜花奖励通知
   */
  public static readonly SERVER_FLOWER_INCENTIVE_INFORM = 1002136
  ///////////////////////////////////////////////////////////////////////////

  /**
   * 老师清空举手
   */
  public static readonly CLIENT_CLEAR_HAND = 1000112

  /**
   * 发送教师轨迹返回
   */
  public static readonly SERVER_CLEAR_HAND_REPLY = 1001112

  /**
   * 发送教师轨迹通知
   */
  public static readonly SERVER_CLEAR_HAND_INFORM = 1002112

  /**
   * 发送教师轨迹
   */
  public static readonly CLIENT_SEND_EXAM_SCORE = 1000133

  /**
   * 发送教师轨迹返回
   */
  public static readonly SERVER_SEND_EXAM_SCORE_REPLY = 1001133

  /**
   * 发送教师轨迹通知
   */
  public static readonly SERVER_SEND_EXAM_SCORE_INFORM = 1002133

  // ------------------------------------------------------------------ 绑定讲解试卷
  /**
   * 绑定考试
   */
  public static readonly CLIENT_BIND_EXAM = 1000135

  /**
   * 绑定考试返回
   */
  public static readonly SERVER_BIND_EXAM_REPLY = 1001135

  /**
   * 绑定考试通知
   */
  public static readonly SERVER_BIND_EXAM_INFORM = 1002135

  /**
   * 获得点名历史发起通知
   */
  public static readonly CLIENT_GETROLLCALLHISTORY = 98

  /**
   * 获得点名历史返回
   */
  public static readonly SERVER_GETROLLCALLHISTORY_REPLY = 198

  public static readonly SERVER_GETROLLCALLHISTORY_INFORM = 298

  // ------------------------------------------------------------------ 设置自动点名
  /**
   * 设置自动点名
   */
  public static readonly CLIENT_SETSELF_ROLLCALL = 97

  /**
   * 自动点名回复
   */
  public static readonly SERVER_SETSELF_ROLLCALL_REPLY = 197

  /**
   * 自动点名的通知
   */
  public static readonly SERVER_SETSELF_ROLLCALL_INFORM = 297

  //-----------------------------------------------------------------更换队长信息
  /**
   * 更换队长信息
   */
  public static readonly CLIENT_CHANGELEADER = 1000149

  /**
   * 更换队长信息返回
   */
  public static readonly SERVER_CHANGELEADER_REPLY = 1001149

  /**
   * 更换队长信息通知
   */
  public static readonly SERVER_CHANGELEADER_INFORM = 1002149

  //-----------------------------------------------------------------红花奖惩信息
  /**
   * 红花奖惩信息
   */
  public static readonly CLIENT_CHANGESCORE = 1000157

  /**
   * 红花奖惩信息返回
   */
  public static readonly SERVER_CHANGESCORE_REPLY = 1001157

  /**
   * 红花奖惩信息通知
   */
  public static readonly SERVER_CHANGESCORE_INFORM = 1002157

  //-----------------------------------------------------------------保存固定分组
  /**
   * 保存固定分组信息
   */
  public static readonly CLIENT_SAVE_ROOM = 1000165

  /**
   * 保存固定分组信息返回
   */
  public static readonly SERVER_SAVE_ROOM_REPLY = 1001165

  /**
   * 保存固定分组信息通知
   */
  public static readonly SERVER_SAVE_ROOM_INFORM = 1002165

  // -------------------- 固定分组
  /**
   * 获取固定分组
   */
  public static readonly CLIENT_GET_FIXROOM = 1000166

  /**
   * 获取固定分组反馈
   */
  public static readonly SERVER_GET_FIXROOM_REPLY = 1001166

  /**
   * 批量加入分组房间
   */
  public static readonly ADD_ROOM_BATCH = 1000545

  /**
   * 批量加入分组房间通知
   */
  public static readonly ADD_ROOM_BATCH_INFORM = 1002545

  //----------------------------------------------------------------- 助教通话
  /***助教发起单点通话请求通知*/
  public static readonly SERVER_ASSISTANT_AUDIOREQUEST_INFORM = 1002170

  /**
   * 助教语音流通知
   */
  public static readonly SERVER_ASSISTANT_AUDIO_INFORM = 1002124

  /**
   * 老师响应单点通话
   */
  public static readonly CLIENT_TEACHER_AUDIORESPONSE = 1000171

  public static readonly CLIENT_TEACHER_ASSISTANTSTREAM = 1000172

  public static readonly SERVER_TEACHER_AUDIORESPONSE_INFORM = 1002171

  public static readonly SERVER_TEACHER_AUDIO_STATUS = 1002172

  // ------------------------------------------------------------------ 课堂乐答
  /**
   * 收到学生提问
   */
  public static readonly SERVER_FAQ_QUESTION_INFORM = 1002126

  /**
   * 回答学生问题
   */
  public static readonly CLIENT_FAQ_ANSWER = 1000127
  /**
   * 回答学生问题的结果
   */
  public static readonly SERVER_FAQ_ANSWER_REPLY = 1001127
  /**
   * 收到学生的追问
   */
  public static readonly SERVER_REFAQ_QUESTION_INFORM = 1002177

  //----------------------------------------------------------------同步互批情况
  /**
   * 同步互批情况
   */
  public static readonly CLIENT_SYNC_BATCH = 1000187

  /**
   * 同步互批返回
   */
  public static readonly SERVER_SYNC_BATCH_REPLY = 1001187

  /**
   * 同步互批通知
   */
  public static readonly SERVER_SYNC_BATCH_INFORM = 1002187

  // 关闭dialog
  public static readonly CLIENT_ROLLCALLCLOSE = 99
  public static readonly SERVER_ROLLCALLCLOSE_INFORM = 299
  /**
   * Description: 服务端断开连接前，断线通知
   */
  public static readonly CLIENT_GRAPHIC_CHANGE_PROPERTY = 15
  public static readonly SERVER_GRAPHIC_CHANGE_PROPERTY_INFORM = 215
  public static readonly SERVER_GRAPHIC_CHANGE_PROPERTY_REPLY = 115
  public static readonly SERVER_REST_MUSICSTATUS_INFORM = 274
  /**
   * 老师听力控制
   */
  public static readonly CLIENT_QUIZING_LISTEN_STATUS = 87
  /**
   * 服务端对于老师听力控制的回复
   */
  public static readonly SERVER_QUIZING_LISTEN_STATUS_REPLY = 187
  /**
   * 服务端对于老师听力控制的通知
   */
  public static readonly SERVER_QUIZING_LISTEN_STATUS_INFORM = 287
  /**
   * 老师端快速问答广播
   */
  public static readonly SERVER_MUTUAL_BROAD_INFORM = 276

  public static readonly SERVER_SENDNOTICE_CLASSROOM = 20031
  /**
   * 结束展示主观题
   **/
  public static readonly SERVER_CLOSE_MUTUAL_IMFORM = 1002104

  /**
   * 发送给服务端考试对话框状态
   */
  public static readonly SERVER_EXAME_LISETEN = 1000118

  /**
   * 老师聊天奖励
   */
  public static readonly CLIENT_CHAT_REWARD = 35

  /**
   * 服务端对于 老师聊天奖励的回复
   */
  public static readonly SERVER_CHAT_REWARD_REPLY = 135

  /**
   * 服务端对于 老师聊天奖励的通知
   */
  public static readonly SERVER_CHAT_REWARD_INFORM = 235

  // -------------------------激励一次性增加的信令
  /**
   * 激励一次性增加
   */
  public static readonly CLIENT_INCENTIVE_ALL = 1000130

  /*** 激励一次性增加*返回 */
  public static readonly SERVER_INCENTIVE_ALL_REPLY = 1001130

  /*** 激励一次性增加*通知 */
  public static readonly SERVER_INCENTIVE_ALL_INFORM = 1002130

  // -------------------------获取金榜信息
  /**
   * 获取金榜
   */
  public static readonly CLIENT_GET_TOP = 1000111

  /**
   * 获取金榜返回
   */
  public static readonly SERVER_GET_TOP_REPLY = 1001111

  /**
   * 获取金榜通知
   */
  public static readonly SERVER_GET_TOP_INFORM = 1002111

  /**
   * 同步金榜
   */
  public static readonly CLIENT_TOP_SYNC = 1000616

  /**
   * 同步金榜
   */
  public static readonly SERVER_TOP_SYNC_REPLY = 1001616

  /**
   * 同步金榜
   */
  public static readonly SERVER_TOP_SYNC_INFORM = 1002616

  // ---------------------------教师增加积分
  /**
   * 增加积分
   */
  public static readonly CLIENT_INCENTIVE_TEACHER = 1000114

  /**
   * 增加积分返回
   */
  public static readonly SERVER_INCENTIVE_TEACHER_REPLY = 1001114

  /**
   * 增加积分通知
   */
  public static readonly SERVER_INCENTIVE_TEACHER_INFORM = 1002114

  /**
   * 答题思路
   */
  public static readonly CLIENT_ANSWER_THOUGHT = 1000109
  public static readonly SERVER_ANSWER_THOUGHT_REPLY = 1001109
  public static readonly SERVER_ANSWER_THOUGHT_INFORM = 1002109

  // ---------------------------公告统一接口
  /**
   * 红黑板
   */
  public static readonly CLIENT_REWARD = 1000132

  /**
   * 红黑板接口返回
   */
  public static readonly SERVER_REWARD_REPLY = 1001132

  /**
   * 红黑板接口通知
   */
  public static readonly SERVER_REWARD_INFORM = 1002132

  ///////////////////////////////////////////////////////////////////////
  //讲解绘制数据
  /**
   * 讲解模块绘制
   */
  public static readonly CLIENT_EXAM_DRAW = 1000119

  /***讲解模块绘制返回*/
  public static readonly SERVER_EXAM_DRAW_REPLY = 1001119

  /***讲解模块绘制通知*/
  public static readonly SERVER_EXAM_DRAW_INFORM = 1002119

  /**
   * 学生的答案
   */
  public static readonly CLIENT_STUDENT_ANSWER = 1000131

  /***学生的答案返回*/
  public static readonly SERVER_STUDENT_ANSWER_REPLY = 1001131

  /**
   * 学生的答案通知
   */
  public static readonly SERVER_STUDENT_ANSWER_INFORM = 1002131

  // ------------------------------------------------------------------ 激励通知
  /**
   * 激励通知
   */
  public static readonly CLIENT_INCENTIVE_NOTICE = 1000137

  /**
   * 激励通知返回
   */
  public static readonly SERVER_INCENTIVE_NOTICE_REPLY = 1001137

  /**
   * 激励通知通知
   */
  public static readonly SERVER_INCENTIVE_NOTICE_INFORM = 1002137

  // ------------------------------------------------------------------ 口语题界面同步
  /**
   * 激励通知
   */
  public static readonly CLIENT_SHOW_SYNC = 1000138

  /**
   * 激励通知返回
   */
  public static readonly SERVER_SHOW_SYNC_REPLY = 1001138

  /**
   * 激励通知通知
   */
  public static readonly SERVER_SHOW_SYNC_INFORM = 1002138

  // ------------------------------------------------------------------ 快速问答放大同步
  /**
   * 激励通知
   */
  public static readonly CLIENT_SHOW_MUTUAL = 1000139

  /**
   * 激励通知返回
   */
  public static readonly SERVER_SHOW_MUTUAL_REPLY = 1001139

  /**
   * 激励通知通知
   */
  public static readonly SERVER_SHOW_MUTUAL_INFORM = 1002139

  // ------------------------------------------------------------------ 快速问答绘制同步
  /**
   * 快速问答绘制通知
   */
  public static readonly CLIENT_DRAW_MUTUAL = 1000140

  /**
   * 快速问答绘制通知返回
   */
  public static readonly SERVER_DRAW_MUTUAL_REPLY = 1001140

  /**
   * 快速问答绘制通知通知
   */
  public static readonly SERVER_DRAW_MUTUAL_INFORM = 1002140

  //--------------------------------------------------------------------
  /**
   * 教师发起查看成绩
   */
  public static readonly CLIENT_EXAM_REVIEW = 1000122

  /**
   * 教师发起查看成绩返回
   */
  public static readonly SERVER_EXAM_REVIEW_REPLY = 1001122

  /**
   * 教师发起查看成绩通知
   */
  public static readonly SERVER_EXAM_REVIEW_INFORM = 1002122

  /**
   * 发送鼠标轨迹通知
   */
  public static readonly SERVER_TEACHER_TRACK = 1002103

  /**
   * 全端同步操作
   * 重复定义
   */
  // public static readonly  SERVER_PCAPP_SYNC_INFORM = "1002118";

  /**
   * 发送教师轨迹
   */
  public static readonly CLIENT_TEACHER_TRACK = 1000103

  /**
   * 发送教师轨迹返回
   */
  public static readonly SERVER_TEACHER_TRACK_REPLY = 1001103

  /**
   * 发送教师轨迹通知
   */
  public static readonly SERVER_TEACHER_TRACK_INFORM = 1002103

  //-------------------------------------------------------------------

  public static readonly SERVER_ALIVE = 'alive'

  /**
   * 学生关闭音频通知
   */
  public static readonly SERVER_STUDENT_AUDIO_CLOSE_INFORM = 1002101
  //------------------------------------------------------------------考试结束的统计分析
  /**
   * 同步统计信息
   */
  public static readonly CLIENT_SYSN_EXAM_ANALYSE = 1000141

  /**
   * 同步统计信息返回
   */
  public static readonly SERVER_SYSN_EXAM_ANALYSE_REPLY = 1001141

  /**
   * 同步统计信息通知
   */
  public static readonly SERVER_SYSN_EXAM_ANALYSE_INFORM = 1002141

  //-----------------------------------------------------------------考试结束的成绩信息
  /**
   * 同步成绩信息
   */
  public static readonly CLIENT_SYSN_EXAMRESULT = 1000142

  /**
   * 同步成绩信息返回
   */
  public static readonly SERVER_SYSN_EXAMRESULT_REPLY = 1001142

  /***同步成绩信息通知*/
  public static readonly SERVER_SYSN_EXAMRESULT_INFORM = 1002142

  //-------------------抓取学生屏幕相关协议----------------

  /**
   * 抓取屏幕界面
   */
  public static readonly CLIENT_SCREEN_CAPTURE = 1000105
  /**
   * 抓取屏幕通知
   */
  public static readonly SERVER_SCREEN_CAPTURE_INFORM = 1002105
  /**
   * 屏幕反馈
   */
  public static readonly CLIENT_CAPTURE_BACK = 1000107
  /**
   * 抓取屏幕反馈通知
   */
  public static readonly SERVER_CAPTURE_BACK_INFORM = 1002107

  //-----------------------------------------------------------------创建分组
  /**
   * 创建分组
   */
  public static readonly CLIENT_CREATE_GROUP = 1000143

  /**
   * 创建分组信息返回
   */
  public static readonly SERVER_CREATE_GROUP_REPLY = 1001143

  /**
   * 创建分组信息通知
   */
  public static readonly SERVER_CREATE_GROUP_INFORM = 1002143

  //-----------------------------------------------------------------开始分组
  /**
   * 开始分组
   */
  public static readonly CLIENT_START_GROUP = 1000144

  /**
   * 开始分组信息返回
   */
  public static readonly SERVER_START_GROUP_REPLY = 1001144

  /**
   * 开始分组信息通知
   */
  public static readonly SERVER_START_GROUP_INFORM = 1002144

  //-----------------------------------------------------------------获取翻页数据
  /**
   * 获取翻页绘制发送
   */
  public static readonly CLIENT_GET_GROUPWHITE = 1000189

  /**
   * 获取翻页绘制返回
   */
  public static readonly SERVER_GET_GROUPWHITE_REPLY = 1001189

  /**
   * 分组白板绘制广播
   */
  public static readonly SERVER_GET_GROUPWHITE_INFORM = 1002189

  //-----------------------------------------------------------------白板绘制数据
  /**
   * 分组白板绘制
   */
  public static readonly CLIENT_GROUPWHITE_DRAW = 1000188

  /**
   * 分组白板绘制反馈
   */
  public static readonly SERVER_GROUPWHITE_DRAW_REPLY = 1001188

  /**
   * 分组白板绘制广播
   */
  public static readonly SERVER_GROUPWHITE_DRAW_INFORM = 1002188

  //-----------------------------------------------------------------截止分组信息
  /**
   * 截止分组信息
   */
  public static readonly CLIENT_STOP_GROUP = 1000145

  /**
   * 截止分组信息返回
   */
  public static readonly SERVER_STOP_GROUP_REPLY = 1001145

  /**
   * 截止分组信息通知
   */
  public static readonly SERVER_STOP_GROUP_INFORM = 1002145

  //-----------------------------------------------------------------关闭分组信息
  /**
   * 关闭分组信息
   */
  public static readonly CLIENT_CLOSE_GROUP = 1000146

  /**
   * 关闭分组信息返回
   */
  public static readonly SERVER_CLOSE_GROUP_REPLY = 1001146

  /**
   * 关闭分组信息通知
   */
  public static readonly SERVER_CLOSE_GROUP_INFORM = 1002146

  //-----------------------------------------------------------------进入房间信息
  /**
   * 进入房间信息
   */
  public static readonly CLIENT_ENTER_ROOM = 1000147

  /**
   * 进入房间信息返回
   */
  public static readonly SERVER_ENTER_ROOM_REPLY = 1001147

  /**
   * 进入房间信息通知
   */
  public static readonly SERVER_ENTER_ROOM_INFORM = 1002147

  //-----------------------------------------------------------------退出房间信息
  /**
   * 退出房间信息
   */
  public static readonly CLIENT_QUITE_ROOM = 1000148

  /**
   * 退出房间信息返回
   */
  public static readonly SERVER_QUITE_ROOM_REPLY = 1001148

  /**
   * 退出房间信息通知
   */
  public static readonly SERVER_QUITE_ROOM_INFORM = 1002148

  //-----------------------------------------------------------------学生提交答案信息
  /**
   * 学生提交答案信息
   */
  public static readonly CLIENT_GROUP_HANDANSWER = 1000153

  /**
   * 学生提交答案信息返回
   */
  public static readonly SERVER_GROUP_HANDANSWER_REPLY = 1001153

  /**
   * 学生提交答案信息通知
   */
  public static readonly SERVER_GROUP_HANDANSWER_INFORM = 1002153

  //-----------------------------------------------------------------广播答案
  /**
   * 广播答案信息
   */
  public static readonly CLIENT_GROUP_BROADANSWER = 1000155

  /**
   * 广播答案信息返回
   */
  public static readonly SERVER_GROUP_BROADANSWER_REPLY = 1001155

  /**
   * 广播答案信息通知
   */
  public static readonly SERVER_GROUP_BROADANSWER_INFORM = 1002155

  //-----------------------------------------------------------------广播答案绘制
  /**
   * 广播答案绘制信息
   */
  public static readonly CLIENT_GROUP_ANSWERDRAW = 1000156

  /**
   * 广播答案绘制信息返回
   */
  public static readonly SERVER_GROUP_ANSWERDRAW_REPLY = 1001156

  /**
   * 广播答案绘制信息通知
   */
  public static readonly SERVER_GROUP_ANSWERDRAW_INFORM = 1002156

  //-----------------------------------------------------------------更改组名口号
  /**
   * 更改组名口号信息
   */
  public static readonly CLIENT_CHANGEROOMINFO = 1000158

  /**
   * 更改组名口号信息返回
   */
  public static readonly SERVER_CHANGEROOMINFO_REPLY = 1001158

  /**
   * 更改组名口号信息通知
   */
  public static readonly SERVER_CHANGEROOMINFO_INFORM = 1002158

  //-----------------------------------------------------------------更改公告
  /**
   * 更改公告信息
   */
  public static readonly CLIENT_CHANGETOPIC = 1000160

  /**
   * 更改公告信息返回
   */
  public static readonly SERVER_CHANGETOPIC_REPLY = 1001160

  /**
   * 更改公告信息通知
   */
  public static readonly SERVER_CHANGETOPIC_INFORM = 1002160

  /**
   * 更改部分话题
   */
  public static readonly CLIENT_CHANGEPART_TOPIC = 1000190

  /**
   * 更改部分话题返回
   */
  public static readonly SERVER_CHANGEPART_TOPIC_REPLY = 1001190

  /**
   * 更改部分话题通知
   */
  public static readonly SERVER_CHANGEPART_TOPIC_INFORM = 1002190

  //-----------------------------------------------------------------更改学生信息
  /**
   * 更改学生信息
   */
  public static readonly CLIENT_CHANGEGROUPUSER = 1000161

  /**
   * 更改学生信息返回
   */
  public static readonly SERVER_CHANGEGROUPUSER_REPLY = 1001161

  /**
   * 更改学生信息通知
   */
  public static readonly SERVER_CHANGEGROUPUSER_INFORM = 1002161

  //-----------------------------------------------------------------新增用户
  /**
   * 新增用户信息
   */
  public static readonly CLIENT_GROUP_NEWUSER = 1000163

  /**
   * 新增用户信息返回
   */
  public static readonly SERVER_GROUP_NEWUSER_REPLY = 1001163

  /**
   * 新增用户信息通知
   */
  public static readonly SERVER_GROUP_NEWUSER_INFORM = 1002163

  //-----------------------------------------------------------------快速问答获取绘制数据
  /**
   * 获取快速问答绘制内容
   */
  public static readonly CLIENT_GETMUTUALDRAW = 1000164

  /**
   * 获取快速问答绘制内容返回
   */
  public static readonly SERVER_GETMUTUALDRAW_REPLY = 1001164

  /**
   * 获取快速问答绘制内容通知
   */
  public static readonly SERVER_GETMUTUALDRAW_INFORM = 1002164

  //-----------------------------------------------------------------获取绘制信息
  /**
   * 获取绘制信息
   */
  public static readonly CLIENT_GETGROUPDRAW = 1000168

  /**
   * 获取绘制信息返回
   */
  public static readonly SERVER_GETGROUPDRAW_REPLY = 1001168

  /**
   * 获取绘制信息通知
   */
  public static readonly SERVER_GETGROUPDRAW_INFORM = 1002168

  //-----------------------------------------------------------------黑板背景切换
  /**
   * 黑板颜色选择
   */
  public static readonly CLIENT_BOARDCOLOR_SELECT = 1000173

  /***黑板颜色选择返回*/
  public static readonly SERVER_BOARDCOLOR_SELECT_REPLY = 1001173

  /***黑板颜色选择通知*/
  public static readonly SERVER_BOARDCOLOR_SELECT_INFORM = 1002173

  //---------------------- 分组讨论聊天相关
  /**
   * 聊天
   */
  public static readonly CLIENT_GROUP_CHAT = 1000151
  /**
   * 聊天反馈
   */
  public static readonly SERVER_GROUP_CHAT_REPLY = 1001151
  /**
   * 聊天通知
   */
  public static readonly SERVER_GROUP_CHAT_INFORM = 1002151
  /**
   * 获取聊天记录
   */
  public static readonly CLIENT_GETCHATLIST = 1000159
  /**
   * 获取聊天记录反馈
   */
  public static readonly SERVER_GETCHATLIST_REPLY = 1001159
  /**
   * 音频开关
   */
  public static readonly CLIENT_GROUP_AUDIO = 1000152
  /**
   * 音频开关反馈
   */
  public static readonly SERVER_GROUP_AUDIO_REPLY = 1001152
  /**
   * 音频开关通知
   */
  public static readonly SERVER_GROUP_AUDIO_INFORM = 1002152
  /**
   *  拉取历史消息
   */
  public static readonly SERVER_GROUP_HISTORY = 1000839
  /**
   *  返回历史消息
   */
  public static readonly SERVER_GROUP_HISTORY_BACK = 1002839

  // ------------------- 最终答案
  /**
   * 本组的最终答案
   */
  public static readonly CLIENT_GROUP_FINALANSWER = 1000154
  /**
   * 本组的最终答案通知
   */
  public static readonly SERVER_GROUP_FINALANSWER_INFORM = 1002154

  //---------------------- 课堂讨论区
  /**
   * 发送讨论消息
   */
  public static readonly CLIENT_SYSN_CHAT = 2
  /**
   * 发送讨论消息返回
   */
  public static readonly SERVER_SYSN_CHAT_REPLY = 102
  /**
   * 接受消息
   */
  public static readonly SERVER_SYSN_SYSN_CHAT_INFORM = 202

  //---------------------- 同步数据
  /**
   * 同步数据
   */
  public static readonly CLIENT_GROUPSYNC = 1000162
  /**
   * 同步数据通知
   */
  public static readonly SERVER_GROUPSYNC_INFORM = 1002162

  // ------------------------------------------------------------------ 绑定教材
  /**
   * 老师绑定教材教材
   */
  public static readonly CLIENT_TEXTBOOK_STATUS = 1000174
  /**
   * 服务端对于老师绑定教材教材的回复
   */
  public static readonly SERVER_TEXTBOOK_STATUS_REPLY = 1001174
  /**
   * 服务端对于老师绑定教材教材的通知
   */
  public static readonly SERVER_TEXTBOOK_STATUS_INFORM = 1002174

  // ------------------------------------------------------------------ 教材打开、翻页、滚动操作
  /**
   * 老师打开、翻页、滚动操作
   */
  public static readonly CLIENT_TURNING_TEXTBOOK = 1000175
  /**
   * 服务端对于老师教材打开、翻页、滚动操作的回复
   */
  public static readonly SERVER_TURNING_TEXTBOOK_REPLY = 1001175
  /**
   * 服务端对于老师教材打开、翻页、滚动操作的通知
   */
  public static readonly SERVER_TURNING_TEXTBOOK_INFORM = 1002175

  // ------------------------------------------------------------------ 描绘教材
  /**
   * 老师描绘教材
   */
  public static readonly CLIENT_DRAW_TEXTBOOK = 1000176
  /**
   * 服务端对于老师教材描绘的回复
   */
  public static readonly SERVER_DRAW_TEXTBOOK_REPLY = 1001176
  /**
   * 服务端对于老师课件描绘的通知
   */
  public static readonly SERVER_DRAW_TEXTBOOK_INFORM = 1002176

  // ------------------------------------------------------------------ 课堂乐答
  /**
   * 学生发起提问
   */
  public static readonly CLIENT_FAQ_QUESTION = 1000126
  /**
   * 学生发起提问结果
   */
  public static readonly SERVER_FAQ_QUESTION_REPLY = 1001126

  /**
   * 收到老师的回复
   */
  public static readonly SERVER_FAQ_ANSWER_INFORM = 1002127

  /**
   * 学生发起追问
   */
  public static readonly CLIENT_REFAQ_QUESTION = 1000177
  /**
   * 学生发起追问结果
   */
  public static readonly SERVER_REFAQ_QUESTION_REPLY = 1001177

  // ---------------------------------------------------------------通用点赞信令
  /**
   * 发起点赞
   */
  public static readonly CLIENT_PRAISE_MUTUAL = 1000179

  /***发起点赞返回*/
  public static readonly SERVER_PRAISE_MUTUAL_REPLY = 1001179

  /***发起点赞通知*/
  public static readonly SERVER_PRAISE_MUTUAL_INFORM = 1002179

  // ------------------------------------------------------------------ 删除课件
  /***发送删除课件信令通知*/
  public static readonly CLIENT_COURSEWARE_DELETE = 1000121

  /***发送删除课件信令通知*/
  public static readonly SERVER_COURSEWARE_DELETE_REPLY = 1001121

  /***发送删除课件信令通知*/
  public static readonly SERVER_COURSEWARE_DELETE_INFORM = 1002121

  /***发送删除多媒体信令*/
  public static readonly CLIENT_MULTIIMEDIA_DELETE = 1000134

  /***发送删除多媒体信令反馈*/
  public static readonly SERVER_MULTIIMEDIA_DELETE_REPLY = 1001134

  /***发送删除多媒体信令通知*/
  public static readonly SERVER_MULTIIMEDIA_DELETE_INFORM = 1002134

  // 更改多媒体播放模式
  public static readonly CLIENT_SET_MULTIMEDIA_MODE = 1000713
  public static readonly SERVER_SET_MULTIMEDIA_MODE_REPLY = 1001713
  public static readonly SERVER_SET_MULTIMEDIA_MODE_INFORM = 1002713

  // ------------------------------------------------------------------ 作业互批
  /**
   * 互批分组
   */
  public static readonly CLIENT_EACHBATCH = 1000180
  /**
   * 互批返回
   */

  public static readonly SERVER_EACHBATCH_REPLY = 1001180
  /**
   * 互批通知
   */
  public static readonly SERVER_EACHBATCH_INFORM = 1002180

  /**
   * 学生增加互批内容
   */
  public static readonly CLIENT_ADDEACHBATCH = 1000183
  /**
   * 增加互批内容返回
   */
  public static readonly SERVER_ADDEACHBATCH_REPLY = 1001183
  /**
   * 增加互批内容通知
   */
  public static readonly SERVER_ADDEACHBATCH_INFORM = 1002183

  /**
   * 获取互批用户
   */
  public static readonly CLIENT_GET_EACHBATCHLIST = 1000182
  /**
   * 获取互批用户返回
   */
  public static readonly SERVER_GET_EACHBATCHLIST_REPLY = 1001182
  /**
   * 获取互批用户通知
   */
  public static readonly SERVER_GET_EACHBATCHLIST_INFORM = 1002182

  /**
   * 更换互批
   */
  public static readonly CLIENT_CHANGE_EACHBATCH = 1000181
  /**
   * 更换互批返回
   */
  public static readonly SERVER_CHANGE_EACHBATCH_REPLY = 1001181
  /**
   * 更换互批通知
   */
  public static readonly SERVER_CHANGE_EACHBATCH_INFORM = 1002181

  /**
   * 获取用户互批情况
   */
  public static readonly CLIENT_GETEACHBATCH = 1000184
  /**
   * 获取用户互批返回
   */
  public static readonly SERVER_GETEACHBATCH_REPLY = 1001184
  /**
   * 获取用户互批通知
   */
  public static readonly SERVER_GETEACHBATCH_INFORM = 1002184

  // ------------------------------------------------------------------ 点赞
  /**
   * 发起点赞
   */
  public static readonly CLIENT_PRAISE = 1000178

  /**
   * 发起点赞返回
   */
  public static readonly SERVER_PRAISE_REPLY = 1001178

  /**
   * 发起点赞通知
   */
  public static readonly SERVER_PRAISE_INFORM = 1002178

  // ------------------------------------------------------------------ 口语测评
  /**
   * 提交测评进度情况
   */
  public static readonly CLIENT_SPOKEN_PROGRESS = 1000185

  /**
   * 提交测评进度返回
   */
  public static readonly SERVER_SPOKEN_PROGRESS_REPLY = 1001185

  /**
   * 提交测评进度通知
   */
  public static readonly SERVER_SPOKEN_PROGRESS_INFORM = 1002185

  /**
   * 同步操作情况
   */
  public static readonly CLIENT_SYNCSPOKEN = 1000186

  /**
   * 同步操作返回
   */
  public static readonly SERVER_SYNCSPOKEN_REPLY = 1001186

  /**
   * 同步操作通知
   */
  public static readonly SERVER_SYNCSPOKEN_INFORM = 1002186

  //---------------------------------------------------------
  /**
   * 老师批改通知  参数{solvId:String, userId:long}
   **/
  public static readonly CLIENT_TEACHER_CORRECT = 1000200

  /**
   * 老师批改通知返回  参数{fail : boolean}
   **/
  public static readonly SERVER_TEACHER_CORRECT_REPLY = 1001200

  /**
   * 老师批改广播，暂不处理
   **/
  public static readonly SERVER_TEACHER_CORRECT_INFORM = 1002200

  //---------------------------------------------------------
  /**
   * 老师批改数据
   **/
  public static readonly CLIENT_TEACHER_CORRECT_DATA = 1000201

  /**
   * 老师批改数据返回  暂不处理
   **/
  public static readonly SERVER_TEACHER_CORRECT_DATA_REPLY = 1001201

  /**
   * 老师批改数据广播  暂不处理
   **/
  public static readonly SERVER_TEACHER_CORRECT_DATA_INFORM = 1002201

  //----------------------------------------------------------

  /**
   * 老师批改完成，如果没有完成退出，不发  {solvId:String, userId:long}
   **/
  public static readonly CLIENT_TEACHER_CORRECT_COMPLETE = 1000202

  /**
   * 老师批改完成返回  暂不处理
   **/
  public static readonly SERVER_TEACHER_CORRECT_COMPLETE_REPLY = 1001202

  /**
   * 老师批改完成广播  暂不处理
   **/
  public static readonly SERVER_TEACHER_CORRECT_COMPLETE_INFORM = 1002202

  /*班级作业讲评*/
  public static readonly CLIENT_TEACHER_CLASS_HOMEWORK_EXPLAIN = 1000424
  public static readonly SERVER_TEACHER_CLASS_HOMEWORK_EXPLAIN_REPLAY = 1001424
  public static readonly SERVER_TEACHER_CLASS_HOMEWORK_EXPLAIN_INFO = 1002424

  /**
   * 发送获取单题目统计标签学生名单
   */
  public static readonly CLIENT_TEACHER_CLASS_STDUENT_INFOS = 1000425
  /**
   * 发送获取单题目统计标签学生名单反馈
   */
  public static readonly SERVER_TEACHER_CLASS_STDUENT_INFOS_REPLAY = 1001425
  /**
   * 发送获取单题目统计标签学生名单通知
   */
  public static readonly SERVER_TEACHER_CLASS_STDUENT_INFOS_INFO = 1002425

  /**
   * 客户端发送获取班级错题
   */
  public static readonly CLIENT_STUDENT_GET_CLASS_WRONG = 1000422
  /**
   * 客户端收到发送班级错题信令的反馈
   */
  public static readonly SERVER_STUDENT_GET_CLASS_WRONG_REPLAY = 1001422
  /**
   * 客户端收到发送班级错题信令的通知
   */
  public static readonly SERVER_STUDENT_GET_CLASS_WRONG_INFO = 1002422

  /* 作业讲评的作业报告*/
  public static readonly CLIENT_TEACHER_CLASS_REPORT = 1000428
  public static readonly SERVER_TEACHER_CLASS_STDUENT_REPORT_REPLAY = 1001428
  public static readonly SERVER_TEACHER_CLASS_REPORT_INFO = 1002428

  /* 学生作业讲评*/
  public static readonly CLIENT_TEACHER_STUDENT_HOMEWORK_EXPLAIN = 1000427
  public static readonly SERVER_TEACHER_STUDENT_HOMEWORK_EXPLAIN_REPLAY = 1001427
  public static readonly SERVER_TEACHER_STUDENT_HOMEWORK_EXPLAIN_INFO = 1002427

  /**
   * 作业提交情况
   */
  public static readonly CLIENT_TEACHER_STUDENT_HOMEWORK_SUBMIT_SEND = 1000429
  public static readonly SERVER_TEACHER_STUDENT_HOMEWORK_SUMIT_REPLAY = 1001429
  public static readonly SERVER_TEACHER_STUDENT_HOMEWORK_SUMIT_INFO = 1002429

  /**
   * 作业统计
   */
  public static readonly CLIENT_TEACHER_STUDENT_HOMEWORK_STATISTICS = 1000430
  public static readonly SERVER_TEACHER_STUDENT_HOMEWORK_STATISTICS_REPLAY = 1001430
  public static readonly SERVER_TEACHER_STUDENT_HOMEWORK_STATISTICS_INFO = 1002430

  //中控返回
  public static readonly SERVER_CONTROL_TYPE = 20000003

  //学生互批列表数据
  public static readonly CLIENT_STUDENT_EACHER_CORRECT_LIST_SEND = 1000205
  public static readonly SERVER_STUDENT_EACHER_CORRECT_LIST_REPLAY = 1001205
  public static readonly SERVER_STUDENT_EACHER_CORRECT_LIST_INFO = 1002205

  //课内用户信息查询
  public static readonly CLIENT_USER_INFO_BY_ID_SEND = 1000208
  public static readonly SERVER_USER_INFO_BY_ID_REPLAY = 1001208

  /**
   * 更新隨堂測試列表状态   更新批改状态
   */
  public static readonly SERVER_HOMEWORK_TEST_STATUS_INFORM = 1002423

  /**
   * 互批分页列表数据请求
   **/
  public static readonly CLIENT_EACH_CORRECT_LIST_DETAIL = 1000421

  /**
   * 互批分页列表数据请求-回复
   **/
  public static readonly SERVER_EACH_CORRECT_LIST_DETAIL_REPLY = 1001421

  /**
   * 互批分页列表数据请求-通知
   **/
  public static readonly SERVER_EACH_CORRECT_LIST_DETAIL_INFORM = 1002421

  /**
   * 随堂测试测试进行中查询列表
   */
  public static readonly CLASS_TEST_DETAIL_LIST_SEND = 1000419

  /**
   * 随堂测试测试进行中查询列表应答
   */
  public static readonly CLASS_TEST_DETAIL_LIST_REPLY = 1001419

  /**
   * 随堂测试测试进行中查询列表应答
   */
  public static readonly CLASS_TEST_DETAIL_LIST_INFORM = 1002419

  /**
   * 随堂测试测试进行中发送信息
   */
  public static readonly CLASS_TEST_UNDER_WAY_SEND = 1000418

  /**
   * 随堂测试测试进行中收到回复
   */
  public static readonly CLASS_TEST_UNDER_WAY_REPLY = 1002418

  //----------------------------------------------------------------互批进行中
  /**
   * 互批进行中数据请求
   **/
  public static readonly CLIENT_UNDER_EACH_CORRECT_DETAIL = 1000420

  /**
   * 互批进行中数据请求-回复
   **/
  public static readonly SERVER_UNDER_EACH_CORRECT_DETAIL_REPLY = 1001420

  /**
   * 互批进行中数据请求-通知
   **/
  public static readonly SERVER_UNDER_EACH_CORRECT_DETAIL_INFORM = 1002420

  // ------------------------------------------------------------------ 作业讲评
  /*作业讲评列表*/
  public static readonly CLIENT_HOMEWORK_EXPLAIN = 1000426

  public static readonly SERVER_HOMEWORK_EXPLAIN_REPLY = 1001426

  public static readonly SERVER_HOMEWORK_EXPLAIN_INFORM = 1002426

  // ------------------------------------------------------------------ 考试讲评
  /*老师开始绘上传制数据*/
  public static readonly CLIENT_CLASSEXAM_EXPLAIN = 1000523

  public static readonly SERVER_CLASSEXAM_EXPLAIN_REPLY = 1001523

  public static readonly SERVER_CLASSEXAM_EXPLAIN_INFORM = 1002523

  /*老师学生考试讲评绘制数据*/
  public static readonly CLIENT_STUDENTEXAM_EXPLAIN = 1000527
  public static readonly SERVER_STUDENTEXAM_EXPLAIN_REPLY = 1001527
  public static readonly SERVER_STUDENTEXAM_EXPLAIN_INFORM = 1002527

  /*开启考试讲解*/
  public static readonly CLIENT_EXAM_OPEN_EXPLAIN = 1000522
  public static readonly SERVER_EXAM_OPEN_EXPLAIN_REPLY = 1001522
  public static readonly SERVER_EXAM_OPEN_EXPLAIN_INFORM = 1002522

  /*考试分析报告*/
  public static readonly CLIENT_EXAM_ANALYSIS_REPORT_EXPLAIN = 1000528
  public static readonly SERVER_EXAM_ANALYSIS_REPORT_REPLY = 1001528
  public static readonly SERVER_EXAM_ANALYSIS_REPORT_INFORM = 1002528

  /**
   * 设置讲解时  学生端是否能够翻页
   */
  public static readonly CLIENT_TEACHER_TURN_PAGE = 1000194
  /**
   * 讲解时  学生端是否能够翻页返回
   */
  public static readonly SERVER_TEACHER_TURN_PAGE_REPLY = 1001194
  /**
   * 讲解时  学生端是否能够翻页 广播
   */
  public static readonly SERVER_TEACHER_TURN_PAGE_INFORM = 1002194

  /**
   * 设置学生端是否 静音(是否启用扬声器) 请求
   */
  public static readonly CLIENT_TEACHER_MUTE = 1000192
  public static readonly SERVER_CLIENT_TEACHER_MUTE_REPLY = 1001192
  public static readonly SERVER_CLIENT_TEACHER_MUTE_INFORM = 1002192

  /**
   * 中控切换音视频流类型收到的通知
   * {"streamType":1}
   */
  public static readonly SERVER_STREAM_TYPE_INFORM = 1002529

  /**
   * 课堂发送获取搜索学生的信令
   */
  public static readonly CLIENT_SEARCH_STUDENT = 1000195
  /**
   * 搜索学生信令反馈搜索的操作结果
   */
  public static readonly SERVER_SEARCH_STUDENT_REPLY = 1001195
  /**
   * 搜索学生信息搜索的通知结果
   */
  public static readonly SERVER_SEARCH_STUDENT_INFORM = 1002195

  /**
   * 随机抽答信令
   */
  public static readonly CLIENT_RANDOM_TALK = 1000530
  public static readonly SERVER_RANDOM_TALK_REPLY = 1001530
  public static readonly SERVER_RANDOM_TALK_INFORM = 1002530

  /**
   * 随机抽答查看历史记录
   */
  public static readonly CLIENT_RANDOM_TALK_RECORD = 1000531
  public static readonly SERVER_RANDOM_TALK_RECORD_REPLY = 1001531
  public static readonly SERVER_RANDOM_TALK_RECORD_INFORM = 1002531

  /**
   * 随机抽答窗口同步
   */
  public static readonly CLIENT_RANDOM_TALK_SYNC_WINDOW = 1000613
  public static readonly SERVER_RANDOM_TALK_SYNC_WINDOW_REPLY = 1001613
  public static readonly SERVER_RANDOM_TALK_SYNC_WINDOW_INFORM = 1002613

  public static readonly CLIENT_STUDENT_DRAW_COURSEWARE = 1000541 //学生未授权课件绘制上传信令

  public static readonly SERVER_COURSEWARE_PAGE_DRAW_INFORM = 1002543 //学生未授权绘制数据变化

  public static readonly CLIENT_DRAW_COURSEWARE_SWITCH = 1000540 //我的笔迹的开关按钮
  public static readonly SERVER_DRAW_COURSEWARE_SWITCH_INFO = 1002540

  public static readonly SERVER_ENABLE_LESSON_STUDENT_COURSEWARE_DRAW_INFORM = 1002542 //学生未授权绘制画板的开关的监听信令

  /**
   * 分组讨论授权展示
   */
  public static readonly CLIENT_DISCUSS_ACCREDIT_SHOW = 1000535
  public static readonly SERVER_DISCUSS_ACCREDIT_SHOW_REPLY = 1001535
  public static readonly SERVER_DISCUSS_ACCREDIT_SHOW_INFORM = 1002535

  /**
   * 分组讨论组员我会了
   */
  public static readonly CLIENT_DISCUSS_WELLBE = 1000536
  public static readonly SERVER_DISCUSS_WELLBE_REPLY = 1001536
  public static readonly SERVER_DISCUSS_WELLBE_INFORM = 1002536

  /**
   * 分组讨论组长更新组员我会了
   */
  public static readonly CLIENT_DISCUSS_LEADER_UPDATE_WELLBE = 1000537
  public static readonly SERVER_DISCUSS_LEADER_UPDATE_WELLBE_REPLY = 1001537
  public static readonly SERVER_DISCUSS_LEADER_UPDATE_WELLBE_INFORM = 1002537

  /**
   * 分组讨论组长申请展示
   */
  public static readonly CLIENT_DISCUSS_APPLY_SHOW = 1000538
  public static readonly SERVER_DISCUSS_APPLY_SHOW_REPLY = 1001538
  public static readonly SERVER_DISCUSS_APPLY_SHOW_INFORM = 1002538

  /**
   * 分组讨论 小组金榜 同步广播
   */
  public static readonly CLIENT_DISCUSS_CATON = 1000532
  public static readonly SERVER_DISCUSS_CATON_REPLY = 1001532
  public static readonly SERVER_DISCUSS_CATON_INFORM = 1002532

  /**
   * 分组讨论 随机展示
   */
  public static readonly CLIENT_DISCUSS_GROUP_RANDOM = 1000533
  public static readonly SERVER_CLIENT_DISCUSS_GROUP_RANDOM_REPLAY = 1001533
  public static readonly SERVER_CLIENT_DISCUSS_GROUP_RANDOM_INFORM = 1002533

  public static readonly CLIENT_DISCUSS_RED_FLOWER_REWARDS = 1000534
  public static readonly SERVER_DISCUSS_RED_FLOWER_REWARDS_REPLAY = 1001534
  public static readonly SERVER_DISCUSS_RED_FLOWER_REWARDS_INFORM = 1002534

  /**
   * 分组讨论打开
   */
  public static readonly CLIENT_DISCUSS_OPEN = 1000544
  public static readonly SERVER_DISCUSS_OPEN_REPLY = 1001544
  public static readonly SERVER_DISCUSS_OPEN_INFORM = 1002544

  /**
   * 分组讨论倒计时
   */
  public static readonly CLIENT_DISCUSS_COUNTDOWN = 1000547
  public static readonly SERVER_DISCUSS_COUNTDOWN_REPLY = 1001547
  public static readonly SERVER_DISCUSS_COUNTDOWN_INFORM = 1002547

  /**
   * 分组讨论学生端申请点评
   */
  public static readonly CLIENT_STUDENT_DISCUSS_APPLY_COMMENT = 1000548
  public static readonly SERVER_STUDENT_DISCUSS_APPLY_COMMENT_REPLY = 1001548
  public static readonly SERVER_STUDENT_DISCUSS_APPLY_COMMENT_INFORM = 1002548

  /**
   * 分组讨论打开申请点评列表
   */
  public static readonly CLIENT_DISCUSS_APPLY_REMARK = 1000549
  public static readonly SERVER_DISCUSS_APPLY_REMARK_REPLAY = 1001549
  public static readonly SERVER_DISCUSS_APPLY_REMARK_INFORM = 1002549

  /**
   * 分组讨论关闭讨论区
   */
  public static readonly CLIENT_DISCUSS_CLOSE_CHAT = 1000550
  public static readonly SERVER_DISCUSS_CLOSE_CHAT_REPLAY = 1001550
  public static readonly SERVER_DISCUSS_CLOSE_CHAT_INFORM = 1002550

  /**
   * 分组讨论排名更新
   */
  public static readonly CLIENT_DISCUSS_RANK_CHANGE = 1000551
  public static readonly SERVER_DISCUSS_RANK_CHANGE_REPLAY = 1001551
  public static readonly SERVER_DISCUSS_RANK_CHANGE_INFORM = 1002551

  /**
   * 分组讨论授权点评
   */
  public static readonly CLIENT_DISCUSS_ACCREDIT_REMARK = 1000552
  public static readonly SERVER_DISCUSS_ACCREDIT_REMARK_REPLY = 1001552
  public static readonly SERVER_DISCUSS_ACCREDIT_REMARK_INFORM = 1002552

  /**
   * 分组讨论随机点评
   */
  public static readonly CLIENT_DISCUSS_RANDOM_REMARK = 1000553
  public static readonly SERVER_DISCUSS_RANDOM_REMARK_REPLY = 1001553
  public static readonly SERVER_DISCUSS_RANDOM_REMARK_INFORM = 1002553

  /**
   * 小组内随机展示
   */
  public static readonly CLIENT_DISCUSS_RANDOM_DISPLAY = 1000554
  public static readonly SERVER_DISCUSS_RANDOM_DISPLAY_REPLY = 1001554
  public static readonly SERVER_DISCUSS_RANDOM_DISPLAY_INFORM = 1002554

  /**
   * 对比展示列表
   */
  public static readonly CLIENT_DISCUSS_COMPARE_SHOW_LIST = 1000608
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_LIST_REPLY = 1001608
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_LIST_INFORM = 1002608

  /**
   * 对比展示详情
   */
  public static readonly CLIENT_DISCUSS_COMPARE_SHOW_DETAIL = 1000609
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_DETAIL_REPLY = 1001609
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_DETAIL_INFORM = 1002609

  /**
   * 对比展示批注
   */
  public static readonly CLIENT_DISCUSS_COMPARE_SHOW_REMARK = 1000610
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_REMARK_REPLY = 1001610
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_REMARK_INFORM = 1002610

  /**
   * 对比展示获取批注
   */
  public static readonly CLIENT_DISCUSS_COMPARE_SHOW_GET_REMARK = 1000611
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_GET_REMARK_REPLY = 1001611
  public static readonly SERVER_DISCUSS_COMPARE_SHOW_GET_REMARK_INFORM = 1002611

  /**
   * 老师结束批量加入房间
   */
  public static readonly CLIENT_DISCUSS_OVER_PATCH_ADD = 1000555
  public static readonly SERVER_DISCUSS_OVER_PATCH_ADD_REPLY = 1001555
  public static readonly SERVER_DISCUSS_OVER_PATCH_ADD_INFORM = 1002555

  //学生课件翻页
  public static readonly CLIENT_ROLL_COURSEWARE_STUDENT = 1010544
  public static readonly SERVER_CLIENT_ROLL_COURSEWARE_STUDENT_REPLAY = 1011544
  public static readonly SERVER_CLIENT_ROLL_COURSEWARE_STUDENT_INFORM = 1012544

  //老师开启关闭学生自由翻页课件开关
  public static readonly CLIENT_ROLL_COURSEWARE_STUDENT_SWITCH = 1010545
  public static readonly SERVER_ROLL_COURSEWARE_STUDENT_SWITCH_REPLY = 1011545
  public static readonly SERVER_ROLL_COURSEWARE_STUDENT_SWITCH_INFORM = 1012545

  /**
   * 老师开启关闭学生自由翻页教材开关
   */
  public static readonly CLIENT_ROLL_TEXTBOOK_STUDENT_SWITCH = 1000715 //学生教材自由翻页开关
  public static readonly SERVER_ROLL_TEXTBOOK_STUDENT_SWITCH_REPLY = 1001715 //学生教材自由翻页开关
  public static readonly SERVER_ROLL_TEXTBOOK_STUDENT_SWITCH_INFORM = 1002715 //学生教材自由翻页开关

  public static readonly ClIENT_TEACHER_FIND_READSPEED = 1000601
  public static readonly SERVER_TEACHER_FIND_READSPEED_REPLY = 1001601
  public static readonly SERVER_TEACHER_FIND_READSPEED_INFORM = 1002601

  public static readonly ClIENT_TEACHER_TURN_READSPEED = 1000600 //老师发起或关闭语速测试
  public static readonly SERVER_TEACHER_TURN_READSPEED_REPLY = 1001600
  public static readonly SERVER_TEACHER_TURN_READSPEED_INFORM = 1002600

  public static readonly ClIENT_STUDENT_SUBMIT_READ = 1000602 //学生结束阅读
  public static readonly SERVER_STUDENT_SUBMIT_READ_REPLY = 1001602
  public static readonly SERVER_STUDENT_SUBMIT_READ_INFORM = 1002602

  /**
   * 公告信令
   */
  public static readonly CLIENT_NOTICE = 1000603
  public static readonly SERVER_NOTICE_REPLY = 1001603
  public static readonly SERVER_NOTICE_INFORM = 1002603

  /**
   * 学生发送奖惩申请
   */
  public static readonly CLIENT_APPLY_FOR_REWARD = 1000604
  /**
   * 学生发送奖惩申请结果反馈
   */
  public static readonly SERVER_APPLY_FOR_REWARD_REPLY = 1001604
  /**
   * 学生发送奖惩申请 老师端收到通知
   */
  public static readonly SERVER_APPLY_FOR_REWARD_INFORM = 1002604

  /**
   * 老师清除奖惩申请
   */
  public static readonly CLIENT_CLEAR_APPLY_FOR_REWARD = 1000605
  /**
   * 老师清除奖惩申请结果反馈
   */
  public static readonly SERVER_CLEAR_APPLY_FOR_REWARD_REPLY = 1001605
  /**
   * 老师清除奖惩申请 对应学生收到通知
   */
  public static readonly SERVER_CLEAR_APPLY_FOR_REWARD_INFORM = 1002605

  /**
   * 老小组奖励申请
   */
  public static readonly CLIENT_GROUP_INCENTIVE = 1000606
  /**
   * 小组奖励申请结果反馈
   */
  public static readonly SERVER_GROUP_INCENTIVE_REPLY = 1001606
  /**
   * 小组奖励申请 对应学生收到通知
   */
  public static readonly SERVER_GROUP_INCENTIVE_INFORM = 1002606

  /**
   * 学生列表中异常学生集合
   */
  public static readonly CLIENT_ABNORMAL_STUDENT = 1000607
  public static readonly SERVER_ABNORMAL_STUDENT_REPLY = 1001607
  public static readonly SERVER_ABNORMAL_STUDENT_INFORM = 1002607

  /**
   * 老师课件自由排序
   */
  public static readonly CLIENT_COURSEWARE_SORT = 1000614
  public static readonly CLIENT_COURSEWARE_SORT_REPLY = 1001614
  public static readonly CLIENT_COURSEWARE_SORT_INFORM = 1002614

  //按年月获取含有作业的日期
  public static readonly CLIENT_HOMEWORK_PKG_MONTH = 1000431
  public static readonly CLIENT_HOMEWORK_PKG_MONTH_REPLY = 1001431
  public static readonly SERVICE_HOMEWORK_PKG_MONTH_INFORM = 1002431

  /**
   * 多媒体播放学生控制
   */
  public static readonly CLIENT_MULTI_MEDIA_FREE_TURN = 1000612
  public static readonly CLIENT_MULTI_MEDIA_FREE_TURN_REPLY = 1001612
  public static readonly SERVER_MULTI_MEDIA_FREE_TURN_INFORM = 1002612

  /**
   * 多媒体播放耳机外放控制
   */
  public static readonly CLIENT_EARPHONE_SOUND_CONTROLL = 1000632
  public static readonly CLIENT_EARPHONE_SOUND_CONTROLL_REPLY = 1001632
  public static readonly CLIENT_EARPHONE_SOUND_CONTROLL_INFORM = 1002632

  /*学生退出课堂设置提醒*/
  public static readonly CLIENT_STUDENT_OUT_INCLASS_SWITCH_REMIND = 1000615
  public static readonly SERVICE_STUDENT_OUT_INCLASS_SWITCH_REMIND_INFO = 1002615

  /*学生退出课堂提醒*/
  public static readonly SERVICE_STUDENT_OUT_INCLASS_REMIND_INFO = 1002617

  //学生作业答题记录相关信令
  public static readonly CLIENT_STUDENT_ANSWER_DETAIL = 1000618
  public static readonly SERVER_STUDENT_ANSWER_DETAIL_REPLAY = 1001618
  public static readonly SERVER_STUDENT_ANSWER_DETAIL_INFO = 1002618

  /**
   * 分组讨论历史记录
   */
  public static readonly CLIENT_DISCUSS_RECORD = 1000621
  public static readonly SERVER_DISCUSS_RECORD_REPLY = 1001621
  public static readonly SERVER_DISCUSS_RECORD_INFORM = 1002621

  /**
   * 分组讨论历史记录详情
   */
  public static readonly CLIENT_DISCUSS_RECORD_DETAIL = 1000622
  public static readonly SERVER_DISCUSS_RECORD_DETAIL_REPLY = 1001622
  public static readonly SERVER_DISCUSS_RECORD_DETAIL_INFORM = 1002622

  /**
   * 服务端对于学生作业时间提醒的通知
   */
  public static readonly SERVER_REMIND_QUIZING_INFORM = 289

  /**
   * 客户端埋点
   */
  public static readonly CLIENT_BZ_CODE_LOG = 100000000
  /**
   * 举手状态
   */
  public static readonly CANCEL_HAND_UP_BY_TEACHER = true

  /**
   * 老师打开网页工具
   */
  public static readonly CLIENT_WEB_TOOLS_URL = 1000623
  public static readonly SERVER_WEB_TOOLS_URL_REPLY = 1001623
  public static readonly SERVER_WEB_TOOLS_URL_INFORM = 1002623

  /**
   * 投屏相关的
   */
  public static readonly CLIENT_CAST_SCREEN = 1000624
  public static readonly SERVER_CAST_SCREEN = 1002624

  /**
   * 鲜花
   */
  public static readonly SERVER_FRESH_FLOWER_INFORM = 1002630

  /**
   * 学科能力
   */
  public static readonly SERVER_SUBJECT_ABILITY_INFORM = 1002631

  /**
   * （作业讲评,考试讲评） 答题卡绘制
   */
  public static readonly CLIENT_SHEET_DRAW = 1000628

  public static readonly SERVER_SHEET_DRAW_REPLY = 1001628

  public static readonly SERVER_SHEET_DRAW_INFORM = 1002628

  /**
   * （作业讲评,考试讲评）讲评界面模式设置 目前只是班级讲解模式
   */
  public static readonly CLIENT_CONFIG_GUI_MODE = 1000625

  public static readonly SERVER_CONFIG_GUI_MODE_REPLY = 1001625

  public static readonly SERVER_CONFIG_GUI_MODE_INFORM = 1002625

  /**
   * 答题卡翻页
   */
  public static readonly CLIENT_SHEET_TURN_PAGE = 1000626

  public static readonly SERVER_SHEET_TURN_PAGE_REPLY = 1001626

  public static readonly SERVER_SHEET_TURN_PAGE_INFORM = 1002626

  /**
   * 讲评 tab切换 （概览和详情）
   */
  public static readonly CLIENT_SOLVE_TURE_TAB = 1000627

  public static readonly SERVER_SOLVE_TURE_TAB_REPLY = 1001627

  public static readonly SERVER_SOLVE_TURE_TAB_INFORM = 1002627

  /**
   * （作业讲评,考试讲评） 打开关闭 草稿纸
   */
  public static readonly CLIENT_OPERATION_DRAFT_PAPER = 1000633
  public static readonly SERVER_OPERATION_DRAFT_PAPER_REPLY = 1001633
  public static readonly SERVER_OPERATION_DRAFT_PAPER_INFORM = 1002633

  /**
   * （作业讲评,考试讲评）新增 草稿纸
   */
  public static readonly CLIENT_ADD_DRAFT_PAPER = 1000634
  public static readonly SERVER_ADD_PAPER_REPLY = 1001634
  public static readonly SERVER_ADD_PAPER_INFORM = 1002634
  /**
   * （作业讲评,考试讲评）绘制 草稿纸
   */
  public static readonly CLIENT_DRAW_DRAFT_PAPER = 1000635
  public static readonly SERVER_DRAW_DRAFT_PAPER_REPLY = 1001635
  public static readonly SERVER_DRAW_DRAFT_PAPER_INFORM = 1002635
  /**
   * （作业讲评,考试讲评）翻页/滑动 草稿纸
   */
  public static readonly CLIENT_CHANGE_DRAFT_PAPER = 1000636
  public static readonly SERVER_DRAW_CHANGE_PAPER_REPLY = 1001636
  public static readonly SERVER_DRAW_CHANGE_PAPER_INFORM = 1002636

  /**
   * 设置学生优选答案
   */
  public static readonly CLIENT_SET_STUDENT_ANSWER = 1000637

  public static readonly SERVER_SET_STUDENT_ANSWER_REPLY = 1001637

  /**
   * 设置老师答案
   */
  public static readonly CLIENT_SET_TEACHER_ANSWER = 1000638

  public static readonly SERVER_SET_TEACHER_ANSWER_REPLY = 1001638

  /**
   * getHwPaper接口信令
   */
  public static readonly CLIENT_GET_HWPAPER = 1000639

  public static readonly SERVER_GET_HWPAPER_REPLY = 1001639

  public static readonly SERVER_GET_HWPAPER_INFORM = 1002639

  /**
   * getQuestions接口信令
   */
  public static readonly CLIENT_GET_QUESTIONS = 1000640

  public static readonly SERVER_GET_QUESTION_REPLY = 1001640

  public static readonly SERVER_GET_QUESTION_INFORM = 1002640

  /**
   * 开始设置答案
   */
  public static readonly CLIENT_START_SETANSWER = 1000641

  public static readonly SERVER_START_SETANSWER_REPLY = 1001641

  /**
   * 确认设置答案
   */
  public static readonly CLIENT_SURE_SETANSWER = 1000642

  public static readonly SERVER_SURE_SETANSWER_REPLY = 1001642

  /**
   * 获取正在设置的答案
   */
  public static readonly CLIENT_GET_SET_ANSWERS = 1000643

  public static readonly SERVER_GET_SET_ANSWERS_REPLY = 1001643

  public static readonly SERVER_GET_SET_ANSWERS_INFORM = 1002643

  /**
   * 推流失败向服务器反馈错误信息
   */
  public static readonly CLIENT_AUDIO_PUBLISH_ERROR = 1000650
  public static readonly SERVER_AUDIO_PUBLISH_ERROR_REPLY = 1001650
  public static readonly SERVER_AUDIO_PUBLISH_ERROR_INFORM = 1002650

  /*多媒体预习相关的*/
  /**
   * 课堂预习完成情况信令
   */
  public static readonly CLIENT_CLASS_PREVIEW_COMPLETION = 1000651
  public static readonly SERVER_CLASS_PREVIEW_COMPLETION_REPLY = 1001651
  public static readonly SERVER_CLASS_PREVIEW_COMPLETION_INFORM = 1002651

  /**
   * 课堂预习笔记信令
   */
  public static readonly CLIENT_CLASS_PREVIEW_NOTES = 1000652
  public static readonly SERVER_CLASS_PREVIEW_NOTES_REPLY = 1001652
  public static readonly SERVER_CLASS_PREVIEW_NOTES_INFORM = 1002652

  /**
   * 预习笔记标记重点
   */
  public static readonly CLIENT_CLASS_PREVIEW_NOTES_MARK = 1000653
  public static readonly SERVER_CLASS_PREVIEW_NOTES_MARK_REPLY = 1001653
  public static readonly SERVER_CLASS_PREVIEW_NOTES_MARK_INFORM = 1002653

  /**
   * 断线重连同步
   */
  public static readonly CLIENT_CLASS_PREVIEW_SYNC = 1000654
  public static readonly SERVER_CLASS_PREVIEW_SYNC_REPLY = 1001654

  /**
   * 同步预习报告小组完成情况组员名字列表
   */
  public static readonly CLIENT_CLASS_PREVIEW_GROUP_MEMBER = 1000661
  public static readonly SERVER_CLASS_PREVIEW_GROUP_MEMBER_REPLY = 1001661
  public static readonly SERVER_CLASS_PREVIEW_GROUP_MEMBER_INFORM = 1002661

  /**
   * 获取标记重点预习笔记列表
   */
  public static readonly CLIENT_CLASS_PREVIEW_MARKED_NOTES_LIST = 1000662
  public static readonly SERVER_CLASS_PREVIEW_MARKED_NOTES_LIST_REPLY = 1001662
  public static readonly SERVER_CLASS_PREVIEW_MARKED_NOTES_LIST_INFORM = 1002662

  /*多媒体预习相关的*/
  /**
   * 老师发起学习统计请求
   */
  public static readonly CLIENT_GET_STUDYSTATISTIC = 1000655
  public static readonly SERVER_GET_STUDYSTATISTIC_REPLY = 1001655
  public static readonly SERVER_GET_STUDYSTATISTIC_INFORM = 1002655

  /**
   * 个人获取学习统计数据请求(断线重连使用)
   * 信令
   */
  public static readonly CLIENT_GET_RECOVER_STUDYSTATISTIC = 1000656
  public static readonly SERVER_GET_RECOVER_STUDYSTATISTIC_REPLY = 1001656

  /**
   * 3、分页获取个人学习统计数据
   * 信令
   */
  public static readonly CLIENT_GET_STUDYSTATISTIC_PAGE = 1000657
  public static readonly SERVER_GET_STUDYSTATISTIC_PAGE_REPLY = 1001657

  /**
   * 4、老师查看小组详情操作
   * 说明：老师查看或关闭小组详情操作，返回给老师1001658信令，广播给所有人1002658
   * 信令：
   */
  public static readonly CLIENT_GET_STUDYSTATISTIC_DETAIL = 1000658
  public static readonly SERVER_GET_STUDYSTATISTIC_DETAIL_REPLY = 1001658
  public static readonly SERVER_GET_STUDYSTATISTIC_DETAIL_INFORM = 1002658

  /**
   * 5、奖扣个人红花
   * 信令：
   */
  public static readonly CLIENT_PREVIEW_REWARD = 1000659
  public static readonly SERVER_PREVIEW_REWARD_REPLY = 1001659
  public static readonly SERVER_PREVIEW_REWARD_INFORM = 1002659

  /**
   * 6、奖扣小组红花
   * 信令
   */
  public static readonly CLIENT_PREVIEW_GROUP_REWARD = 1000660
  public static readonly SERVER_PREVIEW_GROUP_REWARD_REPLY = 1001660
  public static readonly SERVER_PREVIEW_GROUP_REWARD_INFORM = 1002660

  /**
   * 老师端切换新老版本界面
   */
  public static readonly CLIENT_SCREEN_CHANGE_VERSION = 1000710
  public static readonly SERVER_SCREEN_CHANGE_VERSION_REPLY = 1001710
  public static readonly SERVER_SCREEN_CHANGE_VERSION_INFORM = 1002710

  /**
   * 设置课堂的常用工具栏
   */
  public static readonly CLIENT_CUSTOM_BAR = 1000711
  public static readonly SERVER_CUSTOM_BAR_REPLY = 1001711
  public static readonly SERVER_CUSTOM_BAR_INFORM = 1002711

  /**
   * 获取分组信息
   */
  public static readonly CLIENT_GET_GROUP_LIST = 1000712
  public static readonly SERVER_GET_GROUP_LIST_INFORM = 1002712

  /**
   * 学生音视频禁言
   */
  public static readonly CLIENT_AUTH_CLOSE_AUDIO = 1000690
  public static readonly SERVER_AUTH_CLOSE_AUDIO_REPLY = 1001690
  public static readonly SERVER_AUTH_CLOSE_AUDIO_INFORM = 1002690

  /**
   * 授权指定学生允许翻页
   */
  public static readonly CLIENT_AUTH_STUDENT_PAGE_TURN = 1000714
  public static readonly SERVER_AUTH_STUDENT_PAGE_TURN_REPLY = 1001714
  public static readonly SERVER_AUTH_STUDENT_PAGE_TURN_INFORM = 1002714

  /**
   * 教材学生翻页
   */
  public static readonly CLIENT_ROLL_TEXTBOOK_STUDENT = 1000716 //学生教材翻页
  public static readonly SERVER_ROLL_TEXTBOOK_STUDENT_REPLY = 1001716 //学生教材翻页
  public static readonly SERVER_ROLL_TEXTBOOK_STUDENT_INFORM = 1002716 //学生教材翻页

  /**
   * 新版打开/关闭 作业报告 分析报告
   */
  public static readonly CLIENT_OPEN_REPORT = 1000700
  public static readonly SERVER_OPEN_REPORT_REPLY = 1001700
  public static readonly SERVER_OPEN_REPORT_INFORM = 1002700

  /**
   * 查看报告详情
   */
  public static readonly CLIENT_REPORT_DETAIL = 1000704
  public static readonly SERVER_REPORT_DETAIL_INFORM = 1002704

  /**
   * 查看个人报告
   */
  public static readonly CLIENT_REPORT_DETAIL_SINGLE = 1000705
  public static readonly SERVER_REPORT_DETAIL_SINGLE_INFORM = 1002705

  //查看报告切换标记
  public static readonly CLIENT_REPORT_CHANGE_SIGN = 1000698
  public static readonly SERVER_REPORT_CHANGE_SIGN_REPLY = 1001698
  public static readonly SERVER_REPORT_CHANGE_SIGN_INFORM = 1002698

  //作业讲评切换标记
  public static readonly CLIENT_EXPLAIN_CHANGE_SIGN = 1000699
  public static readonly SERVER_EXPLAIN_CHANGE_SIGN_REPLY = 1001699
  public static readonly SERVER_EXPLAIN_CHANGE_SIGN_INFORM = 1002699

  //发起单题模式测试
  public static readonly CLIENT_SINGLE_QUIZ_START = 1000800
  public static readonly SERVER_SINGLE_QUIZ_START_REPLY = 1001800
  public static readonly SERVER_SINGLE_QUIZ_START_INFORM = 1002800

  //单题模式学生答题
  public static readonly CLIENT_SINGLE_QUIZ_ANSWER = 1000801
  public static readonly SERVER_SINGLE_QUIZ_ANSWER_REPLY = 1001801
  public static readonly SERVER_SINGLE_QUIZ_ANSWER_INFORM = 1002801

  //单题模式学生批改
  public static readonly CLIENT_SINGLE_QUIZ_CORRECT = 1000802
  public static readonly SERVER_SINGLE_QUIZ_CORRECT_REPLY = 1001802
  public static readonly SERVER_SINGLE_QUIZ_CORRECT_INFORM = 1002802

  //单题模式老师打开讲评界面
  public static readonly CLIENT_SINGLE_QUIZ_EXPLAIN = 1000805
  public static readonly SERVER_SINGLE_QUIZ_EXPLAIN_REPLY = 1001805
  public static readonly SERVER_SINGLE_QUIZ_EXPLAIN_INFORM = 1002805

  //单题模式老师讲评同步
  public static readonly CLIENT_SINGLE_QUIZ_EXPLAIN_SYNC = 1000807
  public static readonly SERVER_SINGLE_QUIZ_EXPLAIN_SYNC_REPLY = 1001807
  public static readonly SERVER_SINGLE_QUIZ_EXPLAIN_SYNC_INFORM = 1002807

  //学生获取自己答案
  public static readonly CLIENT_SINGLE_QUIZ_SELF_ANSWER = 1000809
  public static readonly SERVER_SINGLE_QUIZ_SELF_ANSWER_REPLY = 1001809
  public static readonly SERVER_SINGLE_QUIZ_SELF_ANSWER_INFORM = 1002809

  public static readonly CLIENT_CHAT_FLOWER_ENABLE = 1000816
  public static readonly SERVER_CHAT_FLOWER_ENABLE_REPLY = 1001816
  public static readonly SERVER_CHAT_FLOWER_ENABLE_INFORM = 1002816

  //学生同步听讲
  public static readonly CLIENT_SINGLE_QUIZ_SYNC_SELECT = 1000808
  public static readonly SERVER_SINGLE_QUIZ_SYNC_SELECT_REPLY = 1001808
  public static readonly SERVER_SINGLE_QUIZ_SYNC_SELECT_INFORM = 1002808

  //老师获取听讲学生人数
  public static readonly CLIENT_SINGLE_QUIZ_SYNC_COUNT = 1000810
  public static readonly SERVER_SINGLE_QUIZ_SYNC_COUNT_REPLY = 1001810
  public static readonly SERVER_SINGLE_QUIZ_SYNC_COUNT_INFORM = 1002810

  //老师获取听讲学生名单
  public static readonly CLIENT_SINGLE_QUIZ_SYNC_STULIST = 1000811
  public static readonly SERVER_SINGLE_QUIZ_SYNC_STULIST_REPLY = 1001811
  public static readonly SERVER_SINGLE_QUIZ_SYNC_STULIST_INFORM = 1002811

  //切换RTC推拉流
  public static readonly SERVER_LESSON_SWITCH_RTC_INFORM = 1002820

  //创建视频会议
  public static readonly CLIENT_VIDEO_CREATE_MEET = 1000830
  public static readonly SERVER_VIDEO_CREATE_MEET_REPLY = 1001830
  public static readonly SERVER_VIDEO_CREATE_MEET_INFORM = 1002830
  //        入参：无
  //        出参：
  //        {
  //            "cid":"会议ID",
  //                "dwz_id":"二维码",
  //                "webrtcUrl":"webRTC地址"
  //        }

  //结束视频会议
  public static readonly CLIENT_VIDEO_DELETE_MEET = 1000831
  public static readonly SERVER_VIDEO_DELETE_MEET_REPLY = 1001831
  public static readonly SERVER_VIDEO_DELETE_MEET_INFORM = 1002831

  //教室绑定摄像头的通知
  public static readonly SERVER_VIDEO_BIND_MEET_INFORM = 1002832

  // 邀请学生连线
  public static readonly CLIENT_INVITE_CONNECT = 1000834
  public static readonly SERVER_INVITE_CONNECT_REPLY = 1001834
  public static readonly SERVER_INVITE_CONNECT_INFORM = 1002834

  // 学生确认连线
  public static readonly CLIENT_CONFIRM_CONNECT = 1000835
  public static readonly SERVER_CONFIRM_CONNECT_REPLY = 1001835
  public static readonly SERVER_CONFIRM_CONNECT_INFORM = 1002835

  // 全员静音
  public static readonly CLIENT_CLOSE_TALKING_ALL = 1000836
  public static readonly SERVER_CLOSE_TALKING_ALL_REPLY = 1001836
  public static readonly SERVER_CLOSE_TALKING_ALL_INFORM = 1002836

  // 老师控制学生设备
  public static readonly CLIENT_AUTH_STU_EDIT = 1000837
  public static readonly SERVER_AUTH_STU_EDIT_REPLY = 1001837
  public static readonly SERVER_AUTH_STU_EDIT_INFORM = 1002837

  //放大查看学生摄像头内容
  public static readonly CLIENT_VIDEO_SHOW_CAMERA = 1000833
  public static readonly SERVER_VIDEO_SHOW_CAMERA_REPLY = 1001833
  public static readonly SERVER_VIDEO_SHOW_CAMERA_INFORM = 1002833

  // 老师全员挂断学生
  public static readonly CLIENT_CLOSE_CONNECT_ALL = 1000838
  public static readonly SERVER_CLOSE_CONNECT_ALL_REPLY = 1001838

  // 邀请学生视频
  public static readonly CLIENT_INVITE_VIDEO = 1000840
  public static readonly SERVER_INVITE_VIDEO_INFORM = 1002840

  // 点名结果红花奖扣
  public static readonly CLIENT_CALL_REWARD = 1000841
  public static readonly SERVER_CALL_REWARD_REPLY = 1001841
  public static readonly SERVER_CALL_REWARD_INFORM = 1002841

  //老师跳过乐答待回答问题
  public static readonly CLIENT_FAQ_SKIP = 1000842
  public static readonly SERVER_FAQ_SKIP_REPLY = 1001842
  public static readonly SERVER_FAQ_SKIP_INFORM = 1002842

  // 下一次点名时间
  public static readonly SERVER_CALL_NEXTCALLTIME_INFORM = 1002843

  //打开/关闭  快速问答弹窗
  public static readonly CLIENT_QUICKASK_OPEN = 1000735
  public static readonly SERVER_QUICKASK_OPEN_REPLY = 1001735
  public static readonly SERVER_QUICKASK_OPEN_INFORM = 1002735

  //发起/结束  快速问答
  public static readonly CLIENT_QUICKASK_START = 1000720
  public static readonly SERVER_QUICKASK_START_REPLY = 1001720
  public static readonly SERVER_QUICKASK_START_INFORM = 1002720

  //获取快速问答历史记录
  public static CLIENT_QUICKASK_HISTORY = 1000722
  public static SERVER_QUICKASK_HISTORY_REPLY = 1001722
  public static SERVER_QUICKASK_HISTORY_INFORM = 1002722
  // public static SERVER_QUICKASK_HISTORY_INFORM = 1003721

  //快速问答断线重连
  public static CLIENT_QUICKASK_RECOVER = 1000732
  public static SERVER_QUICKASK_RECOVER_REPLY = 1001732
  public static SERVER_QUICKASK_RECOVER_INFORM = 1002732

  //操作同步
  public static CLIENT_QUICKASK_SYNC = 1000733
  public static SERVER_QUICKASK_SYNC_REPLY = 1001733
  public static SERVER_QUICKASK_SYNC_INFORM = 1002733

  //结束快速问答
  public static CLIENT_QUICKASK_CLOSE = 1000734
  public static SERVER_QUICKASK_CLOSE_REPLY = 1001734
  public static SERVER_QUICKASK_CLOSE_INFORM = 1002734

  //历史记录详情 主观题、课件题结束答题后，也会广播1002723信令给学生
  public static CLIENT_QUICKASK_HISTORY_DETAIL = 1000723
  public static SERVER_QUICKASK_HISTORY_DETAIL_REPLY = 1001723
  public static SERVER_QUICKASK_HISTORY_DETAIL_INFORM = 1002723

  //学生答题
  public static CLIENT_QUICKASK_STU_ANSWER = 1000721
  public static SERVER_QUICKASK_STU_ANSWE_REPLY = 1001721
  public static SERVER_QUICKASK_STU_ANSWER_INFORM = 1002721
  public static SERVER_QUICKASK_STU_ANSWER_INFORM_TO_TEA = 1002742 //定时任务，全量数据返回给老师 , 单个数据返回给学生 （有学生提交| 新学生加入快速问答）

  //快速问答红花激励
  public static CLIENT_QUICKASK_REWARD = 1000730
  public static SERVER_QUICKASK_REWARD_REPLY = 1001730
  public static SERVER_QUICKASK_REWARD_INFORM = 1002730

  //新增学生广播的通知
  public static SERVER_QUICKASK_ADD_STU_INFORM = 1002739
  // public static SERVER_QUICKASK_ADD_STU_INFORM_TO_TEA = 1003739  // 全量数据返回给老师

  //学生申请点评
  public static CLIENT_QUICKASK_APPLY_COMMENT = 1000724
  public static SERVER_QUICKASK_APPLY_COMMENT_REPLY = 1001724
  public static SERVER_QUICKASK_APPLY_COMMENT_INFORM = 1002724

  //口语广播
  public static CLIENT_QUICKASK_SPOKEN_SYNC = 1000738
  public static SERVER_QUICKASK_SPOKEN_SYNC_REPLY = 1001738
  public static SERVER_QUICKASK_SPOKEN_SYNC_INFORM = 1002738

  //主观题筛选
  public static CLIENT_QUICKASK_SEARCH = 1000741
  public static SERVER_QUICKASK_SEARCH_INFORM = 1002741

  //快速问答中的随机抽答
  public static CLIENT_QUICKASK_RANDOM = 1000726
  public static SERVER_QUICKASK_RANDOM_REPLY = 1001726
  public static SERVER_QUICKASK_RANDOM_INFORM = 1002726

  //快速问答将学生加入对比展示
  public static CLIENT_QUICKASK_ADDCOMPARE = 1000737
  public static SERVER_QUICKASK_ADDCOMPARE_REPLY = 1001737
  public static SERVER_QUICKASK_ADDCOMPARE_INFORM = 1002737

  //打开、关闭对比展示
  public static CLIENT_QUICKASK_COMPARE_SHOW = 1000731
  public static SERVER_QUICKASK_COMPARE_SHOW_REPLY = 1001731
  public static SERVER_QUICKASK_COMPARE_SHOW_INFORM = 1002731

  //教师批注绘制
  public static CLIENT_QUICKASK_TEA_DRAW = 1000728
  public static SERVER_QUICKASK_TEA_DRAW_REPLY = 1001728
  public static SERVER_QUICKASK_TEA_DRAW_INFORM = 1002728

  //大图展示某个学生答案
  public static CLIENT_QUICKASK_SHOWANSWER = 1000736
  public static SERVER_QUICKASK_SHOWANSWER_REPLY = 1001736
  public static SERVER_QUICKASK_SHOWANSWER_INFORM = 1002736

  // 点赞学生答案
  public static CLIENT_QUICKASK_PRAISE = 1000725
  public static SERVER_QUICKASK_PRAISE_REPLY = 1001725
  public static SERVER_QUICKASK_PRAISE_INFORM = 1002725

  //旋转学生答案
  public static CLIENT_QUICKASK_ANSWER_ROTATE = 1000740
  public static SERVER_QUICKASK_ANSWER_ROTATE_REPLY = 1001740
  public static SERVER_QUICKASK_ANSWER_ROTATE_INFORM = 1002740

  // 随堂测试流程结束去考试报告
  public static SERVER_CLASS_TEST_REPORT_QUERY_INFORM = 1002696

  // 查询随堂测试作业报告状态
  public static CLIENT_CLASS_TEST_REPORT_QUERY_STATUS = 1000697
  public static SERVER_CLASS_TEST_REPORT_QUERY_STATUS_INFORM = 1002697

  // 切换报告查看维度
  public static CLIENT_REPORT_CHANGE_DIMENSION = 1000702
  public static SERVER_REPORT_CHANGE_DIMENSION_INFORM = 1002702

  // 课堂报告断线恢复
  public static CLIENT_REPORT_RECOVER = 1000707
  public static SERVER_REPORT_RECOVER_REPLY = 1001707
  public static SERVER_REPORT_RECOVER_INFORM = 1002707

  // 课堂报告同步信令
  public static CLIENT_REPORT_SYNC = 1000706
  public static SERVER_REPORT_SYNC_INFORM = 1002706

  // 互批/自批学生名单
  public static CLIENT_CORRECT_STUDENT_SYNC = 1000693
  public static CLIENT_CORRECT_STUDENT_INFORM = 1002693
  // 录像开始的通知
  public static SERVER_REPORT_RECORD_START = 1002860

  /** 查询学生名单*/
  public static CLIENT_STUDENT_LIST = 1000196
  /** 查询学生名单*/
  public static CLIENT_STUDENT_LIST_REPLY = 1001196
  /** 查询学生名单*/
  public static CLIENT_STUDENT_LIST_INFORM = 1002196

  // 获取投票列表
  public static CLIENT_VOTE_LIST = 1000866
  public static CLIENT_VOTE_LIST_REPLY = 1001866
  public static CLIENT_VOTE_LIST_INFORM = 1002866

  /**
   * 查看老师的模板信息集合
   */
  public static CLIENT_VOTE_TEMPLATE_LIST = 1000877
  public static CLIENT_VOTE_TEMPLATE_LIST_REPLY = 1001877
  public static CLIENT_VOTE_TEMPLATE_LIST_INFORM = 1002877

  /**
   * 获取指定的模板信息
   */
  public static CLIENT_VOTE_TEMPLATE_DETAIL = 1000867
  public static CLIENT_VOTE_TEMPLATE_DETAIL_REPLY = 1001867
  public static CLIENT_VOTE_TEMPLATE_DETAIL_INFORM = 1002867

  /**
   * 删除模板数据
   */
  public static CLIENT_VOTE_TEMPLATE_DELETE = 1000868
  public static CLIENT_VOTE_TEMPLATE_DELETE_REPLY = 1001868
  public static CLIENT_VOTE_TEMPLATE_DELETE_INFORM = 1002868

  /**
   * 添加/更新模板数据
   */
  public static CLIENT_VOTE_TEMPLATE_ADD = 1000869
  public static CLIENT_VOTE_TEMPLATE_ADD_REPLY = 1001869
  public static CLIENT_VOTE_TEMPLATE_ADD_INFORM = 1002869

  /**
   * 发起投票
   */
  public static CLIENT_VOTE_START = 1000870
  public static CLIENT_VOTE_START_REPLY = 1001870
  public static CLIENT_VOTE_START_INFORM = 1002870

  /**
   * 查看指定进行中投票信息
   */
  public static CLIENT_VOTE_DETAIL_JOIN = 1000872
  public static CLIENT_VOTE_DETAIL_JOIN_REPLY = 1001872
  public static CLIENT_VOTE_DETAIL_JOIN_INFORM = 1002872

  /**
   * 学生投票
   */
  public static CLIENT_STUDENT_VOTE_START = 1000871
  public static CLIENT_STUDENT_VOTE_START_REPLY = 1001871
  public static CLIENT_STUDENT_VOTE_START_INFORM = 1002871

  /**
   * 查看指定已经结束的投票信息
   */
  public static CLIENT_VOTE_DETAIL_END = 1000879
  public static CLIENT_VOTE_DETAIL_END_REPLY = 1001879
  public static CLIENT_VOTE_DETAIL_END_RECOVER_INFORM = 1002879

  /**
   * 查询指定投票记录结果的学生信息集合
   */
  public static CLIENT_VOTE_QUESTION_STUDENT = 1000880
  public static CLIENT_VOTE_QUESTION_STUDENT_REPLY = 1001880
  public static CLIENT_VOTE_QUESTION_STUDENT_INFORM = 1002880

  /**
   * 获取投票中的数据
   */
  public static CLIENT_VOTE_JOIN = 1000872
  public static CLIENT_VOTE_JOIN_REPLY = 1001872
  public static CLIENT_VOTE_JOIN_INFORM = 1002872

  /**
   * 停止投票
   */
  public static CLIENT_VOTE_STOP = 1000873
  public static CLIENT_VOTE_STO_REPLY = 1001873
  public static CLIENT_VOTE_STOP_INFORM = 1002873

  /**
   * 删除投票记录
   */
  public static CLIENT_VOTE_DELETE = 1000874
  public static CLIENT_VOTE_DELETE_REPLY = 1001874
  public static CLIENT_VOTE_DELETE_INFORM = 1002874

  /**
   * 公布/停止公布结果
   */
  public static CLIENT_VOTE_RESULT_OPEN = 1000875
  public static CLIENT_VOTE_RESULT_OPEN_REPLY = 1001875
  public static CLIENT_VOTE_RESULT_OPEN_INFORM = 1002875

  /**
   * 查看专注力
   */
  public static CLIENT_FOCUS_STATUS_SHOW = 1000876
  public static CLIENT_FOCUS_STATUS_SHOW_REPLY = 1001876
  public static CLIENT_FOCUS_STATUS_SHOW_INFORM = 1002876

  /**
   * 断线重连投票显示的数据
   */
  public static CLIENT_VOTE_RECOVER = 1000881
  public static CLIENT_VOTE_RECOVER_REPLY = 1001881
  public static CLIENT_VOTE_RECOVER_INFORM = 1002881
  // 通知其它端登录
  public static SERVER_USER_LOGIN__INFORM = 1002882

  // 切换其它版本课堂
  public static CLIENT_CLASS_VERSION_RECOVER = 1000887
  public static CLIENT_CLASS_VERSION_REPLY = 1001887
  public static CLIENT_CLASS_VERSION_INFORM = 1002887

  // 信令发送失败，给的提示，被管控的情况
  public static CLIENT_SEND_ERROR_REPLY = 1001890
  // 全员解除静音 学生应答

  public static CLIENT_STUDENT_RESPONSE = 1000891
  public static CLIENT_STUDENT_RESPONSE_REPLY = 1001891
  public static CLIENT_STUDENT_RESPONSE_INFORM = 1002891

  // 开启录像
  public static START_MEETING_RECORD = 1000893
  public static START_MEETING_RECORD_ALL_REPLY = 1001893
  public static START_MEETING_RECORD_ALL_INFORM = 1002893

  // 切换角色
  public static CLIENT_CHANGE_USER_ROLE_ID = 1000894
  public static CLIENT_CHANGE_USER_ROLE_ID_REPLAY = 1001894
  public static CLIENT_CHANGE_USER_ROLE_ID_INFORM = 1002894

  // 添加会议资源课件
  public static CLIENT_BIND_CONFER_RESOURCE = 1000895
  public static CLIENT_BIND_CONFER_RESOURCE_INFORM = 1002895

  // 会议共享课件
  public static CLIENT_MEETING_COURSE_SHARE = 1000896
  public static CLIENT_MEETING_COURSE_SHARE_REPLY = 1001896
  public static CLIENT_MEETING_COURSE_SHARE_INFORM = 1002896

  // 取消会议共享课件
  public static CLIENT_CLOSE_MEETING_COURSE_SHARE = 1000897
  public static CLIENT_CLOSE_MEETING_COURSE_SHARE_REPLY = 1001897
  public static CLIENT_CLOSE_MEETING_COURSE_SHARE_INFORM = 1002897

  // 老师切换多端登录rtc
  public static CLIENT_CHANGE_RTC = 1000898
  public static CLIENT_CHANGE_RTC_REPLY = 1001898
  public static CLIENT_CHANGE_RTC_INFORM = 1002898

  // 老师开始关闭麦克风，摄像头
  public static CLIENT_TEACHER_CHANGE_DEVICE = 1000899
  public static CLIENT_TEACHER_CHANGE_DEVICE_REPLY = 1001899
  public static CLIENT_TEACHER_CHANGE_DEVICE_INFORM = 1002899

  // 邀请开麦克风
  public static CLIENT_INVITE_AUDIO = 1000904
  public static SERVER__INVITE_AUDIO_REPLY = 1001904
  public static SERVER__INVITE_AUDIO_INFORM = 1002904

  // 开启屏幕共享
  public static CLIENT_MEET_SCREEN_SHARING = 1000906
  public static SERVER_MEET_SCREEN_SHARING_REPLY = 1001906
  public static SERVER_MEET_SCREEN_SHARING_INFORM = 1002906

  // 查询共享状态
  public static CLIENT_SHARING_STATUS = 1000907
  public static CLIENT_SHARING_STATUS_REPLY = 1001907
  public static CLIENT_SHARING_STATUS_INFORM = 1002907
  /** -------------------------- 会议相关信令 -------------------------- **/
  // 多媒体添加
  public static ADD_MULTIMEDIA_MODE = 1000902
  public static ADD_MULTIMEDIA_MODE_REPLY = 1001902
  public static ADD_MULTIMEDIA_MODE_INFORM = 1002902

  // 资源删除
  public static DELETE_CLIENT_ASSETS = 1000903
  public static DELETE_CLIENT_ASSETS_REPLY = 1001903
  public static DELETE_CLIENT_ASSETS_INFORM = 1002903

  // 踢人下线
  public static CLIENT_KICKLOGOUT_STUDENT = 1000905
  public static CLIENT_KICKLOGOOUT_STUDENT_REPLY = 1001905
  public static CLIENT_KICKLOGOUT_STUDENT_INFORM = 1002905

  // 会议时间提示
  public static CLIENT_MEETING_TIME_INFORM = 1002909
}
