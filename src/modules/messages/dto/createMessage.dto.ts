import { ApiModelProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiModelProperty()
  readonly userId: string;

  @ApiModelProperty()
  readonly origin: string;

  @ApiModelProperty()
  readonly message: any;

  @ApiModelProperty()
  readonly error: boolean;

  @ApiModelProperty()
  readonly toDisplay: boolean;

  @ApiModelProperty()
  readonly operationType: string;

  @ApiModelProperty()
  readonly time: Date;

  @ApiModelProperty()
  readonly response: any;
}