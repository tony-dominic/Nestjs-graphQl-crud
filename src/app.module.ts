import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    CatsModule, GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
     MongooseModule.forRoot(config.mongoURI, {  useNewUrlParser: true, useFindAndModify: true } )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 