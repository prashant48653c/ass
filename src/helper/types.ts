 

export interface BLOGTYPE {
  _id: string;
  profilePic: string;
  authorName: string;
  head: string;
  desc: string;
  blogImg?: string;
  user: string;
  tags: string[]
}

export interface USERTYPE {
  _id: string;
  profilePic: string;
  username: string;
  desc?: string;
  email: string;
  password: string;
  refreshToken?: string;

}

export interface LOGINTYPE {
  email: string;
  password: string;
}

export interface SIGNUPTYPE {
  username: string;
  email: string;
  password: string;
}

export interface UPDATEUSERTYPE {
  username: string;
  id: string;
  desc: string;
}
export interface UPDATEBLOGTYPE {
  title: string,
  desc: string,
  authorName: string,
  selectedTags: string[],
  id: string
}

export interface QUERYTYPE { 
  page:string,
   user:string, 
  keyword:string, 
  tags:any[] | any
}