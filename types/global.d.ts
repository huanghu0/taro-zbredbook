/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
declare module "*.json";
declare module "*.js";

declare namespace NodeJS {
  interface ProcessEnv {
    /** NODE 内置环境变量, 会影响到最终构建生成产物 */
    NODE_ENV: 'development' | 'production',
    /** 当前构建的平台 */
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
    /**
     * 当前构建的小程序 appid
     * @description 若不同环境有不同的小程序，可通过在 env 文件中配置环境变量`TARO_APP_ID`来方便快速切换 appid， 而不必手动去修改 dist/project.config.json 文件
     * @see https://taro-docs.jd.com/docs/next/env-mode-config#特殊环境变量-taro_app_id
     */
    TARO_APP_ID: string
  }
}

type LoginType = {
    phone:string,
    pwd:string
}

type ArticleComment = {
    userName: string;
    avatarUrl: string;
    message: string;
    dateTime: string;
    location: string;
    favoriteCount: number;
    isFavorite: boolean;
    children?: ArticleComment[];
}

type Article = {
    id: number;
    title: string;
    desc: string;
    tag: string[];
    dateTime: string;
    location: string;
    userId: number;
    userName: string;
    isFollow: boolean;
    avatarUrl: string;
    images: string[];
    favoriteCount: number;
    collectionCount: number;
    isFavorite: boolean;
    isCollection: boolean;
    comments?: ArticleComment[];
}

type ArticleSimple = {
    id: number;
    title: string;
    userName: string;
    avatarUrl: string;
    favoriteCount: number;
    isFavorite: boolean;
    image: string;
}

type Category = {
    name: string;
    default: boolean;
    isAdd: boolean;
}

type GoodsSimple = {
    id: number;
    title: string;
    image: string;
    price: number;
    originPrice: number | undefined;
    promotion: string | undefined;
}

type GoodsCategory = {
    id: number;
    name: string;
    image: string;
}

type MessageListItem = {
    id: number;
    name: string;
    avatarUrl: string;
    lastMessage?: string;
    lastMessageTime?: string;
}

type UnRead = {
    unreadFavorate: number,
    newFollow: number,
    comment: number,
};
