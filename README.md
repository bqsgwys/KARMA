# KARMA - Keyword Analysis of Research on ML & AI

Entry of VMW-THU-Hackathon @ Oct 2019

Topic #1: Trend analysis of AI techniques

编程语言：`Javascript` & `Python`

本文件为项目的总体报告，具体技术细节（包括环境与依赖的配置、文件目录结构、文件使用方法、函数接口等）请详见技术文档。

## Team 成员简介

- 武钰淞 @ `bqsgwys`：清华大学电子系大二在读，大腿+大佬
- 张亦弛 @ `YC-Vertex`：清华大学微纳电子系大二在读，软硬双修，软件开发经历相对较少，高中参加过许多科创hackathon
- 马呈翔 @ `mcxthuee`：清华大学微纳电子系大二在读，发展方向未定。对软件和硬件都比较感兴趣，希望能通过此次hackathon学习到更多的知识，和大佬们做朋友~

## Problem Statement 问题陈述

近年来，人工智能相关技术极度火爆，我们希望通过分析Artificial Intelligence & Machine Learning相关论文的内容，将人工智能领域的关键词热度演变可视化，以达到AI技术趋势分析与展示的目标。

## Data Sources 数据集源

论文来自主办方所给数据集，即来自于arxiv收录的cs:AI、cs:CV、cs:CL、cs:LG、stat:ML等领域的英文文献共4343篇。所有数据文件均为pdf格式，且内容均与AI&ML相关。具体包含题目、作者、学校机构、发表日期等基础信息内容，以及论文正文内容。

关键词信息来源于WildML、Wikipedia、Google Developers三个渠道，具体连接为：

- Deep Learning Glossary - WildML: http://www.wildml.com/deep-learning-glossary/
- Glossary of AI - Wikipedia: https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence
- 机器学习术语表 - Google Developers: https://developers.google.com/machine-learning/glossary/

## Design & Methodology 设计与方法论

**方法论**：我们希望通过最直接、有效、快速的方式获得所需信息，而非最炫技的方式。

**方案流程架构**：将问题拆分为四部分：pdf内容的提取、关键词的提取、关键词匹配查找、数据可视化。

- PDF内容的提取：主要提取论文的基础信息（论文编号、分类、时间）以及正文内容，使用`PyPDF2`和`pdfminer`进行数据提取，转换为文本文件以方便后续的字符数据处理。其过程中，对于无法正常打开的文件、无法识别论文基础信息的文件，分别有特殊标记处理。
- 关键词的提取：
- 关键词匹配查找：
- 数据可视化：

## Algorithm & model 算法与模型

## Result 分析结果
