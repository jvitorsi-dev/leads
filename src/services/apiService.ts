import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://fiveinsurance.com.br/API/api.php';

  constructor(private http: HttpClient) {}

  sendData(data: any) {
    this.http.post(this.apiUrl, data).subscribe({
      next: (data) => {
        console.log('Dados recebidos:', data);
        // Lógica para processar os dados recebidos
      },
      error: (error) => {
        console.error('Erro na requisição:', error);
        // Lógica para tratar o erro
      },
      complete: () => {
        console.log('Requisição completa.');
        // Lógica adicional após a conclusão da requisição
      },
    });
  }
}
