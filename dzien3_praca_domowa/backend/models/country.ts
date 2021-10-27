import { Field, ID, Int, ObjectType } from "type-graphql";
import { Medal } from "./medal";

@ObjectType()
export class Country {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field(() => Medal, { nullable: true })
  summerMedals: Medal;

  @Field(() => Medal, { nullable: true })
  winterMedals: Medal;

  @Field(() => Int)
  totalMedals: number;
}
