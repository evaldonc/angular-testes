import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Mundo';

  constructor(private http: HttpClient){
    this.resultaFinal();
  }
  
  

  //Escopo de service
   obterIdAnexoManual(cod: number): Observable<Object>{
      return this.http.get('https://viacep.com.br/ws/01001000/json/');         
    }


    resultaFinal(): void {
      var result;
      this.obterIdAnexoManual(1).subscribe(x=>{
        result = x;
        console.log('IMPRIMINANDO CONSULTA >>>>');
        console.log(result);
      })
  
    }
  


}
