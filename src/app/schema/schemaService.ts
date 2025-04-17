import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SchemaService {
  baseURL:string = ''
     httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        })
    };
    // Resolve HTTP using the constructor
    constructor(private _http: HttpClient) {
        this.baseURL = 'https://localhost:44372'
     }

    getTables(connectStr:string, DBType:string ): Observable<any> {
       
      
        const postData:string = '{"connectStr" : "' + connectStr + '","DBType":"'+ DBType +'"}';
        return this._http.get(this.baseURL + '/api/Schema/GetTables?strData='+ postData, this.httpOptions);
            
    }

    getColumns(connectStr:string, DBType:string, tableName:string): Observable<any> {
        
        const postData = '{"connectStr" : "' + connectStr + '","DBType":"'+ DBType +'","tableName": "' + tableName + '" }';
        return this._http.get(this.baseURL + '/api/Schema/GetColumns?strData='+ postData, this.httpOptions);
    }


    getCode(connectStr:string,  DBType:string, tableName:string, CodeType:string, ORM:string): Observable<any> {
      
        const postData = '{"connectStr" : "' + connectStr + '","DBType":"'+ DBType +'","tableName": "' + tableName + '", "codeType" : "' + CodeType+'", "ORM" : "' + ORM +'" }';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'text/plain'
            })
        };
       return this._http.get(this.baseURL + '/api/Schema/GetCode?strData='+ postData,{ responseType: 'text' });
    }

    createFiles(connectStr:string,  DBType:string, CodeType:string, ORM:string): any {
        const postData = '{"connectStr" : "' + connectStr +  '","DBType":"'+ DBType +'", "codeType" : "' + CodeType+'", "ORM" : "' + ORM +'" }';
        return this._http.get(this.baseURL + '/api/Schema/CreateFiles?strData='+ postData,this.httpOptions);
      }
}

/*export class SchemaInputModel {
    public connectStr:string ='';
    public tableName:string ='';
    public codeType:string ='';
    public DBType:string='';
}*/
