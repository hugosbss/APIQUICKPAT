import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { FuncionariosArmazenados } from "../funcionario.dm";
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private clsFuncionariosArmazenados;
    constructor(clsFuncionariosArmazenados: FuncionariosArmazenados);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcaoValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;
