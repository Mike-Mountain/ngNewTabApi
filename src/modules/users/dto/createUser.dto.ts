import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  readonly _id: string;

  @ApiModelProperty()
  readonly username: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly roles: Array<string>;
}