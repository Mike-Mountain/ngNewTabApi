import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiModelProperty()
  readonly userId: string;

  @ApiModelProperty()
  readonly sid: string;

  @ApiModelProperty()
  readonly createdOn: Date;

  @ApiModelProperty()
  readonly modifiedOn: Date;

  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly dueDate: Date;

  @ApiModelProperty()
  readonly complete: boolean;
}