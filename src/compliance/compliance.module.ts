import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ComplianceController } from './compliance.controller';
import { ComplianceService } from './compliance.service';
import { WebScraperService } from '../utils/web-scraper.service';
import { OpenAIService } from '../utils/openai.service';


@Module({
  imports: [HttpModule],
  controllers: [ComplianceController],
  providers: [ComplianceService, WebScraperService, OpenAIService],
})
export class ComplianceModule {}