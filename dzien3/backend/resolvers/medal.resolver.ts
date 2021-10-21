import { FieldResolver, Resolver, Root } from "type-graphql";
import { Medal } from "../models/medal";

@Resolver(() => Medal)
export class MedalResolver {

  @FieldResolver()
  total(@Root() medal: Medal) {
    return medal.gold + medal.silver + medal.bronze;
  }

}
