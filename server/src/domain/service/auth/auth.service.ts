import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Customer } from '../../models/customer.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  protected logger: Logger = new Logger(AuthService.name);

  constructor(private readonly jwtService: JwtService) {}

  public async decode(token: string): Promise<any> {
    return this.jwtService.decode(token, null);
  }

  public async generateToken(
    payload: Omit<Customer, 'password'>,
  ): Promise<string> {
    return this.jwtService.signAsync({ ...payload });
  }

  public isPasswordValid(password: string, employeePassword: string): boolean {
    return bcrypt.compareSync(password, employeePassword);
  }

  public encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(12);

    return bcrypt.hashSync(password, salt);
  }

  public async verify(token: string): Promise<Customer> {
    return this.jwtService.verifyAsync<Customer>(token);
  }
}
