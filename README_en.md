# KARMA - Keyword Analysis of Research on ML & AI

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language：`Javascript`, `Python`, `HTML` & `CSS`

As a general report, detailed technical information is not included in this file. For details including environment configurations, requirements, directory-tree of KARMA, methods and interfaces, etc., see KARMA Reference (`KARMA Reference.md`).

## Team

- Wu Yusong `@bqsgwys` A THU sophomore majored in Electronic Engineering
- Zhang Yichi `@YC-Vertex` A THU sophomore majored in Microelectronic Engineering
- Ma Chengxiang `@mcxthuee` A THU sophomore majored in Microelectronic Engineering

## Problem Statement

In recent years, Artificial Intelligence has reached a feverish pitch. We hope to visualize the rises and falls of AIML hot topics via Analyzing AIML-related papers. Thus illustrates the ever-changing trend of AI.

## Data Sources

The database of papers is given by the organizer of the hackathon.
All the papers, amounted to 4334, are from the public database of _arXiv_, distributed in the categories including cs:AI (Artificial Intelligence), cs:CV (Computer Vision), cs:CL (Computer Linguistics), cs:LG (Machine Learing in CST) and stat:ML (Machine Learing in Statistics).
All papers are presented in PDF format.
They contains basic infomation such as the title, the authors, the institution, the date of submission, etc., as well as the main body of the paper.

The keywords are from the glossary edited by _WildML_, _Wikipedia_ and _Google Developers_. Links are shown below.

- Deep Learning Glossary - WildML: http://www.wildml.com/deep-learning-glossary/
- Glossary of AI - Wikipedia: https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence
- Machine Learning Glossary - Google Developers: https://developers.google.com/machine-learning/glossary/

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
