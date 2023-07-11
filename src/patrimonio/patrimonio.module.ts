import { Module } from "@nestjs/common";
import { PatrimonioController } from "./patrimonio.controller";
import { PatrimoniosArmazenados } from "./patrimonio.dm";



@Module({
    controllers:[PatrimonioController],
    providers:[PatrimoniosArmazenados]
})
export class PatrimonioModule{
}