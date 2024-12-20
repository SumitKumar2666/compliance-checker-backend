import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as cheerio from 'cheerio';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WebScraperService {
  constructor(private readonly httpService: HttpService) {}

  async scrapeWebpage(url: string): Promise<string> {
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const $ = cheerio.load(response.data);
      
      // Remove script tags, style tags, and comments
      $('script').remove();
      $('style').remove();
      $('header').remove();
      $('footer').remove();
      $('nav').remove();
      
      // Get text content
      return $('body').text().replace(/\s+/g, ' ').trim();
    } catch (error) {
      throw new Error(`Failed to scrape webpage: ${error.message}`);
    }
  }
}
