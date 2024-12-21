import { Injectable } from '@nestjs/common';
import { ComplianceCheckDto } from './compliance-check.dto';
import { WebScraperService } from '../utils/web-scraper.service';
import { OpenAIService } from '../utils/openai.service';

@Injectable()
export class ComplianceService {
  constructor(
    private readonly webScraperService: WebScraperService,
    private readonly openAIService: OpenAIService,
  ) {}

  async checkCompliance(complianceCheckDto: ComplianceCheckDto) {
    try {
      // Scrape both websites
      const [websiteContent, policyContent] = await Promise.all([
        this.webScraperService.scrapeWebpage(complianceCheckDto.websiteUrl),
        this.webScraperService.scrapeWebpage(complianceCheckDto.policyUrl),
      ]);

      // Analyze compliance using OpenAI
      const complianceResults = await this.openAIService.analyzeCompliance(
        websiteContent,
        policyContent,
      );

      return {
        status: 'success',
        timestamp: new Date().toISOString(),
        websiteUrl: complianceCheckDto.websiteUrl,
        policyUrl: complianceCheckDto.policyUrl,
        findings: complianceResults,
      };
    } catch (error) {
      throw new Error(`Compliance check failed: ${error.message}`);
    }
  }
}