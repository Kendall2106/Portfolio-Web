export interface Repo {
  name: string;
  description: string;
  image: any[];
  linkPage:String;
  linkGit:String;
  skills: any[];
  about: any[];
  visible: string;
}

export class Repo implements Repo {

  constructor(public name: string, public description: string, public image: any[]) {

  };


}