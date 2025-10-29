import { Component, ElementRef, ViewChild  } from'@angular/core';
import {MatSidenav, MatSidenavModule} from'@angular/material/sidenav';
import {CommonModule} from'@angular/common';
import {MatButtonModule} from'@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  opcoesMenu = ['HOME', 'DIFERENCIAIS', 'PLANO EMPRESARIAL', 'REDE CREDENCIADA'];
  diferenciais: Diferenciais[] = [
    {
      icone:'headset',
      titulo:'Alô Saúde',
      descricao:'Atendimento médico especializado 24 horas por telefone ou videochamada.',
      imagem: 'phone-call.svg'
    },
    {
      icone:'favorite_border',
      titulo:'Psicologia online',
      descricao:'Rede de 130 psicólogos disponíveis 24 horas, garantindo sigilo e segurança.',
      imagem: 'mobile-user.svg'
    },
    {
      icone:'phone_iphone',
      titulo:'Aplicativo Porto',
      descricao:'Agende consultas e solicite serviços de maneira fácil e inovadora.',
      imagem: 'mobile-app.svg'
    },
    {
      icone:'home',
      titulo:'Coleta Domiciliar',
      descricao:'Coleta de exames no conforto da sua casa, sem custo adicional.',
      imagem: 'sweet-home.svg'
    }
  ]
    formulario: FormGroup;
    redeCredenciada1 = ['🏥 HOSPITAL ALBERT EINSTEIN',
                      '🏥 HOSPITAL BENEFICÊNCIA PORTUGUESA',
                      '🏥 HOSPITAL LEFORTE',
                      '🏥 HOSPITAL SAHA',
                      '🏥 HOSPITAL PAULISTANO',
                      '🏥 HOSPITAL CRUZ AZUL DE SÃO PAULO',
                      '🏥 HOSPITAL SAMARITANO',
                      '🏥 HOSPITAL OSWALDO CRUZ',
                      '🏥 HOSPITAL A C CAMARGO'
                    ]
    redeCredenciada2 = ['🏥 HOSPITAL NOVE DE JULHO',
                      '🏥 MATERNIDADE PRO MATRE',
                      '🏥 HOSPITAL SÍRIO LIBANÊS',
                      '🏥 HOSPITAL STA MARCELINA',
                      '🏥 HOSP. E MATERN. SÃO MIGUEL',
                      '🏥 HOSPITAL VITÓRIA',
                      '🏥 HOSPITAL SÃO LUÍZ',
                      '🏥 HOSPITAL NIPO BRASILEIRO',
                      '🏥 HOSPITAL SÃO CAMILO'
                    ]

   redeCredenciada3 = ['🏥 HOSPITAL ALBERT SABIN',
                      '🏥 HOSPITAL GRAACC',
                      '🏥 HOSPITAL SANTA JOANA',
                      '🔬 LABORATÓRIOS A+',
                      '🔬 LABORATÓRIOS BIOMED',
                      '🔬 LABORATÓRIOS DELBONI AURIEMO',
                      '🔬 LABORATÓRIOS FEMME',
                      '🔬 LABORATÓRIOS FLEURY',
                      '🔬 LABORATÓRIOS LAVOISIER'
  ]
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('containerFoto') containerFoto! : ElementRef;
  @ViewChild('containerInfo1') containerInfo1!: ElementRef;
  @ViewChild('containerInfo5') containerInfo5!: ElementRef;
  @ViewChild('containerRedeCredenciada') containerRedeCredenciada!: ElementRef;
  @ViewChild('form') form!: ElementRef;

     constructor(private fb: FormBuilder,
      private services: ApiService
     ) {
      this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.pattern('^\\d{10,11}$')]],
      email: ['', [Validators.required, Validators.email]],
      produto: ['Porto']
    });
  }

  fechar() {
    this.sidenav.close();
  }

  focusContainer(opcao: any) {
    console.log(opcao)
    switch (opcao) {
      case 'HOME':
        this.containerFoto!.nativeElement.focus();
        this.containerFoto!.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      case 'DIFERENCIAIS':
        this.containerInfo1!.nativeElement.focus();
        this.containerInfo1!.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      case 'PLANO EMPRESARIAL':
        this.containerInfo5!.nativeElement.focus();
        this.containerInfo5!.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      case 'REDE CREDENCIADA':
        this.containerRedeCredenciada!.nativeElement.focus();
        this.containerRedeCredenciada!.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      case 'contato':
        this.form!.nativeElement.focus();
        this.form!.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  msgWhatsapp() {
    const phoneNumber = '5511912949772'; // Substitua pelo número desejado (DDI + DDD + Número)
    const message = encodeURIComponent('Olá, quero saber mais sobre o Porto Seguro Saúde Empresarial');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(url, '_blank');
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.services.sendData(this.formulario.value);
      alert('Dados enviados com sucesso. Em breve, algum representante entrará em contato com você.')
    } else {
      alert('Houve um erro, tente novamente');
    }
  }
}

export class Diferenciais {
  icone = '';
  titulo = '';
  descricao = '';
  imagem = '';
}
