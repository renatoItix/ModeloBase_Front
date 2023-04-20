import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

    cliente: ClienteModel;
    dataNow = new Date();
    dataAtual: string;

    form: FormGroup;
    recordId: number = 0;
    clientes: ClienteModel[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private clienteService: ClienteService

    ) {
        this.form = formBuilder.group({
            nome: ['', [Validators.required, Validators.minLength(3)]],
            cpf: ['', [Validators.required, Validators.minLength(11)]],
            id: [],
            dataCadastro: [],
            observacao: [],

        });

        this.form.controls.id.disable();
        // this.form.controls.dataCadastro.disable();
        
        // Formata data - dd/MM/yyyy
        const ano = this.dataNow.getFullYear();
        const mes = this.dataNow.getMonth();
        const dia = this.dataNow.getDate();
        this.dataAtual = dia.toString().concat('/').concat(mes.toString().concat('/').concat(ano.toString()));

    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.recordId = params && params.id ? params.id : 0;

            if (this.recordId > 0) {
                this.clienteService
                    .getById(this.recordId)
                    .subscribe((cliente) => this.form.patchValue(cliente));
            }
        });
    }

    onVoltar(): void {
        this.router.navigate(['cliente']);
    }

    onSave(): void {
        const cliente = this.form.getRawValue();
        if (this.recordId > 0) {
            this.clienteService.putCliente(this.recordId, cliente).subscribe((value) => {
                this.clientes.push(cliente);
            });
        }
        else {
            cliente.dataCadastro = this.dataAtual;
            this.clienteService.postCliente(cliente).subscribe((value) => {
                this.clientes.push(cliente);

                // Limpa os campos do formulario
                this.form.reset();
                this.router.navigate(['cliente']);
            });
        }
    }
}
