import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'project'})
export class ProjectEntity {

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    name: String;

    @Column()
    description: String;
}
