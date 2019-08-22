# KARMA - Keyword Analysis of Research on ML & AI

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language：`Javascript` & `Python`

## Team

## Problem Statement

In recent years, Artificial Intelligence has reached a feverish pitch. We hope to visualize the rises and falls of AIML hot topics via Analyzing AIML-related papers. Thus illustrates the ever-changing trend of AI.

## Data Sources

## Design & Methodology

> Less is more. &emsp; -- Ludwig Mies van der Rohe

**Methodology**: Direct, efficient and effective, rather than being grandiose.

**Design**: Our work was separated into four splits - pdf content extraction, keyword extraction, keyword matching, data visualization.

- PDF content extraction: Use `PyPDF2` and `pdfminer` module to convert pdf files into plin text, making it convinent for subsequent character data processing. Chiefly extracted main bodies of the papers and their basic info, namely its arXiv index, arXiv category info, and time of composition. During this process, for those files whose opening was failed or basic info was not avaliable, we tagged them fail and had treatments for them.
- Keyword extraction:
- Keyword matching:
- Data visualization

## Algorithm & model

## Result
