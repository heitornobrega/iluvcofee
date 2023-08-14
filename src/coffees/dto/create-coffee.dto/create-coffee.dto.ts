import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: "It's the name of a Coffee" })
  @IsString()
  readonly name: string;
  @ApiProperty({ description: "It's the coffee brand" })
  @IsString()
  readonly brand: string;
  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}
