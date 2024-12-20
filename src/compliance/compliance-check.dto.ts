import { IsUrl, IsNotEmpty } from 'class-validator';

export class ComplianceCheckDto {
  @IsUrl()
  @IsNotEmpty()
  websiteUrl: string;

  @IsUrl()
  @IsNotEmpty()
  policyUrl: string;
}