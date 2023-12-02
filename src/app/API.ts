export class API {
public static get domainUrl() { return "https://localhost:7211/api/"};
public static get getList() { return "getList/" };
public static get getById() { return "get/" };
public static get insert() { return "insert/" };
public static get deleteById() { return "delete/" };
public static get update() { return "update/" };
public static get filterList() { return "filterList/"};
public static get login() {return "login"};
public static get register(){return "register"};
}

export class LocalStorageHelper{
    public static get tokenKey() { return 'token'};
}
