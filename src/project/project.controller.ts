import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './dto/project.dto/project.dto';


@Controller('project')
export class ProjectController {

    constructor(private projectService: ProjectService){ }

    @Get()
    get(): Promise<ProjectDto[]> {
        // return 'sl';
        return this.projectService.find();
    }

}
