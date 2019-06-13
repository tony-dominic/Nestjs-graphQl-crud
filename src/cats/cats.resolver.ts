import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';
import { CatInput } from './inputs/cat.input';

@Resolver('Cats')
export class CatsResolver {
  constructor(private readonly catsService: CatsService){}

  @Query(() => [CatDto])
  async cats() {
    return this.catsService.findAll();
  }

  @Query(() => CatDto)
  async cat(@Args('id') id: string) {
    return this.catsService.findById(id);
  }

  @Mutation(() => CatDto)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }

  @Mutation(() => CatDto)
  async deleteCat(@Args('id') id: string) {
    return this.catsService.delete(id);
  }

  @Mutation(() => CatDto)
  async updateCat(@Args('input') input: CatInput, @Args('id') id: string) {
    return this.catsService.update(input, id);
  }

}
