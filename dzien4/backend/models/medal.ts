import { Field, ID, Int, ObjectType, registerEnumType } from "type-graphql";

@ObjectType()
export class Medal {
  @Field(() => ID)
  id: string;

  @Field(() => GameType)
  gameType: GameType;

  @Field(() => Int)
  gameCount: number;

  @Field(() => Int)
  gold: number;

  @Field(() => Int)
  silver: number;

  @Field(() => Int)
  bronze: number;

  @Field(() => Int)
  total: number;
}

export enum GameType {
  SUMMER = "SUMMER",
  WINTER = "WINTER",
}

registerEnumType(GameType, { name: "GameType" });
