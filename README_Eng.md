# KARMA - Keyword Analysis of Research on ML & AI

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language in Used：`Javascript` & `Python`

As a general report, technical reports are not included in this file. Details including environment configurations, requirements, directory-tree of KARMA, methods, interfaces , etc., see the KARMA Reference.

## Team

- Wu Yusong `@bqsgwys` A THU undergraduate majored in Electronic Engineering
- Zhang Yichi `@YC-Vertex` A THU undergraduate majored in Microelectronic Engineering
- Ma Chengxiang `@mcxthuee` A THU undergraduate majored in Microelectronic Engineering

## Problem Statement 问题陈述

近年来，人工智能相关技术极度火爆，我们希望通过分析 Artificial Intelligence & Machine Learning 相关论文的内容，将人工智能领域的关键词热度演变可视化，以达到 AI 技术趋势分析与展示的目标。

## Data Sources

The database of papers is given by the organizer of the hackathon.All of the papers ,amounted to 4334, are from the public database of _arXiv_, with the category of cs:AI(Artificial Intelligence), cs:CV(Computer Vision), cs:CL(Computer Linguistics), cs:LG(Machine Learing in CST) and stat:ML(Machine Learing in Statistics). All of those papers are formed in PDF format, containing basic infomation of the title, the authors, the institution, the submitted time, etc. Also the body of the paper is included.

The keywords are from the glossary edited by _WildML_、_Wikipedia_ and _Google Developers_.Links are shown below.

- Deep Learning Glossary - WildML: http://www.wildml.com/deep-learning-glossary/
- Glossary of AI - Wikipedia: https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence
- Machine Learning Glossary - Google Developers: https://developers.google.com/machine-learning/glossary/

## Design & Methodology 设计与方法论

**方法论**：我们希望通过最直接、有效、快速的方式获得所需信息，而非最炫技的方式。

**方案流程架构**：将问题拆分为四部分：pdf 内容的提取、关键词的提取、关键词匹配查找、数据可视化。

- PDF 内容的提取：主要提取论文的基础信息（论文编号、分类、时间）以及正文内容，使用`PyPDF2`和`pdfminer`进行数据提取，转换为文本文件以方便后续的字符数据处理。其过程中，对于无法正常打开的文件、无法识别论文基础信息的文件，分别有特殊标记处理。
- 关键词的提取：
- 关键词匹配查找：
- 数据可视化：

## Algorithm & model 算法与模型

## Result 分析结果
