import {IsString, MaxLength } from 'class-validator';
import { ProjectEntity } from 'src/project/entity/project.entity/project.entity';


export class ProjectDto {

    @IsString()
    @MaxLength(50)
    id: String;

    @IsString()
    @MaxLength(50)
    name: String;

    @IsString()
    @MaxLength(50)
    description: String;

    // static fromEntity: any;

    // constructor(id: string, name: string, description: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.description = description;
    // }

    public static from(dto: Partial<ProjectDto>) {
        const it = new ProjectDto();
        it.id = dto.id;
        it.name = dto.name;
        it.description = dto.description;
        return it;
      }

    public static fromEntity(entity: ProjectEntity) {
        return this.from({
          id: entity.id,
          name: entity.name,
          description: entity.description
        });
      }

}
