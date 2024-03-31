import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto/project.dto/project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './entity/project.entity/project.entity';
import { Repository } from 'typeorm';

// export type Project = any;

@Injectable()
export class ProjectService {

    constructor(@InjectRepository(ProjectEntity) private projectRepository: Repository<ProjectEntity>){}

    //projects: ProjectDto[] = [];

    async find(): Promise<ProjectDto[]> {
        const projects: ProjectEntity[] = await this.projectRepository.find();
        return projects.map((projectEntity) => ProjectDto.fromEntity(projectEntity))
    }
}
