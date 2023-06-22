import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    this.users.push({ ...createUserDto, id: this.users.length + 1 });
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    let user = this.users.filter(item => item.id == id)

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users.filter(item => {
      if (item.id == id) {
        if (updateUserDto.name)
          item.name = updateUserDto.name
        if (updateUserDto.surname)
          item.surname = updateUserDto.surname
      }

      return item
    })

    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.users = this.users.filter(item => item.id != id);

    return `This action removes a #${id} user`;
  }
}
