import { Field, InputType } from '@nestjs/graphql';

// Dto task 
@InputType()
export class TaskDto {
    @Field()
    title: string;

    @Field()
    description: string;
}
