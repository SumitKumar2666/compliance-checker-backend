import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async analyzeCompliance(websiteContent: string, policyContent: string): Promise<any> {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a compliance checker. Analyze the website content against the compliance policy and return a JSON array of findings. Each finding should include: description, severity (HIGH, MEDIUM, LOW), and recommendation."
          },
          {
            role: "user",
            content: `Policy Content: ${policyContent}\n\nWebsite Content: ${websiteContent}\n\nAnalyze the website content against the policy and identify non-compliant elements.`
          }
        ],
        response_format: { type: "json_object" }
      });

      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      throw new Error(`Failed to analyze compliance: ${error.message}`);
    }
  }
}