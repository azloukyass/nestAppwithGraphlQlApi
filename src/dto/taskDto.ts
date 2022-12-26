import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TaskDto {
    @Field()
    title: string;

    @Field()
    description: string;
}
