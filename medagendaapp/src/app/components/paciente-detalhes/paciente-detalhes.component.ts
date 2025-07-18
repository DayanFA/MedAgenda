import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';
import { Atendimento } from '../../models/atendimento.model';
import { AtendimentoService } from '../../services/atendimento.service';
import { ProntuarioService } from '../../services/prontuario.service';
import { Prontuario } from '../../models/prontuario.model';
import { PdfServiceService } from '../../services/pdf-service.service';

@Component({
  selector: 'app-paciente-detalhes',
  standalone: false,
  templateUrl: './paciente-detalhes.component.html',
  styleUrls: ['./paciente-detalhes.component.scss'],
})
export class PacienteDetalhesComponent implements OnInit {

  paciente: Paciente = <Paciente>{};
  atendimentos: Atendimento[] = [];
  prontuarios: Prontuario[] = []; 

  constructor(
    private atendimentoService: AtendimentoService,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private prontuarioService: ProntuarioService,
    private pdfService: PdfServiceService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const pacienteId = +params['id']; // Captura o parâmetro 'id' da rota
      if (pacienteId) {
        // this.getAtendimentosPorPacienteId(pacienteId); // Chama o método para buscar os atendimentos
        this.carregarPacienteDetalhes(); // Pode ser ajustado para carregar detalhes do paciente
        // this.getAtendimentosPorPacienteId(pacienteId);
        this.getProntuarios(pacienteId); // Chama o método para buscar os prontuários
      } else {
        console.error('ID do paciente não encontrado na rota.');
      }
    });
  }

  carregarPacienteDetalhes(): void {
    this.route.params.subscribe((params) => {
      const pacienteId = +params['id']; // Captura o parâmetro 'id' da rota
      if (pacienteId) {
        this.pacienteService.getById(pacienteId).subscribe({
          next: (resposta: Paciente) => {
            this.paciente = resposta;
          },
        });
      } else {
        console.error('ID do paciente não encontrado na rota.');
      }
    });
  }

  getProntuarios(pacienteId: number): void {
    this.prontuarioService.getByPacienteId(pacienteId).subscribe({
        next: (resposta: Prontuario[]) => {
          this.prontuarios = resposta;
          console.log(this.prontuarios);
        }
    })
  }

  baixarAtestado(){
    this.pdfService.atestado().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'atestado.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  baixarPericia(){
    this.pdfService.pericia().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pericia.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  baixarExame(){
    this.pdfService.exame().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'exame.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}