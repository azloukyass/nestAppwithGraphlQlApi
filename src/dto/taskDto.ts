import { Field, InputType } from '@nestjs/graphql';

// dto
@InputType()
export class TaskDto {
    @Field()
    title: string;

    @Field()
    description: string;
}
