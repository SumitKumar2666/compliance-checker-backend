import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ComplianceController } from './compliance.controller';
import { ComplianceService } from './compliance.service';

@Module({
  imports: [HttpModule],
  controllers: [ComplianceController],
  providers: [ComplianceService],
})
export class ComplianceModule {}