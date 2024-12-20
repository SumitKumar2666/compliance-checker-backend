import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { ComplianceCheckDto } from './compliance-check.dto';

@Controller('compliance')
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  @Post('analyze')
  @UsePipes(new ValidationPipe())
  async checkCompliance(@Body() complianceCheckDto: ComplianceCheckDto) {
    return await this.complianceService.checkCompliance(complianceCheckDto);
  }
}