import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface'
import { Model } from 'mongoose';
import { CatInput } from './inputs/cat.input';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel('Cat')
    private readonly catModel: Model<Cat>,
  ) { }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return await this.catModel.findById(id).exec();
  }

  async create(catInput: CatInput): Promise<Cat> {
    const createdCat = new this.catModel(catInput);
    return await createdCat.save();
  }

  async delete(id: string): Promise<Cat> {
    return await this.catModel.findByIdAndRemove(id);
  }

  async update(catInput: CatInput, id: string): Promise<Cat> {
    return await this.catModel.findOneAndUpdate(id, catInput, { new: true });
  }
}
