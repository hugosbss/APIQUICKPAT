import { Module } from '@nestjs/common';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { PatrimonioModule } from './patrimonio/patrimonio.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [FuncionarioModule,UsuarioModule,PatrimonioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
