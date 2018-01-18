export class UserModel {

  id: number;
  userName: string;

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getUserName() {
    return this.userName;
  }

  setUserName(userName: string) {
    this.userName = userName;
  }
}
