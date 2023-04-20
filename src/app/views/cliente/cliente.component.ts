import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    title = 'Treinamento Angular';
    recordId: number;
    mensagemSucesso: string;
    mensagemErro: string;
    clientes: Array<ClienteModel> = new Array();
    clienteSelecionado: ClienteModel;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private clienteService: ClienteService) { }

    ngOnInit() {
        this.listaClientes();

        this.route.params.subscribe((params) => {
            this.recordId = params && params.id ? params.id : 0;

            if (this.recordId > 0) {
                this.clienteService
                    .getById(this.recordId)
            }
        });
    }

    consoleButton(nomeBotao: string, id: any): void {
        if (nomeBotao === 'Novo') {
            this.router.navigate(['cliente'])
        }
        else if (nomeBotao === 'Voltar') {
            this.router.navigate(['cliente'])
        }
        else if (nomeBotao === 'Editar') {
            this.router.navigate(['cliente/', id])
            console.log('URL', this.router.navigate(['cliente/', id]))
        }
    }

    listaClientes() {
        this.clienteService.getListaClientes().subscribe(
            clientes => {
                this.clientes = clientes;
            }, err => {
            });
    }

    onDelete(cliente: ClienteModel): void {
        this.clienteSelecionado = cliente;
    }

    confirmaDelete() {
        this.clienteService.deleteClientes(this.clienteSelecionado.id)
            .subscribe(
                response => {
                    this.mensagemSucesso = 'Cliente deletado com sucesso!'
                    this.ngOnInit()
                },
                erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
            )
    }
}
