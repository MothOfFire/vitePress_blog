export interface logoText {
  // 主体文字
  main: string;
  // 底部文字，一般为主体文字的拼音或英文
  buttom: string;
}

export interface nav {
  // 导航名
  name: string;
  // 导航地址
  path: string;
}

export type navList = nav[];
