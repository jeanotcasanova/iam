import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { ProjectDto } from './project/dto/project.dto/project.dto';
import { ProjectEntity } from './project/entity/project.entity/project.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: '200.7.102.150',
        port: 5432,
        username: 'rcasanova',
        password: 'mogage79',
        database: 'un-scrum',
        entities: [ProjectEntity],
        // synchronize: true,
        // autoLoadEntities: true
      }
    ),
    AuthModule, 
    UsersModule, ProjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
