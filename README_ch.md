# KARMA - Keyword Analysis of Research on ML & AI

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

编程语言：`Javascript`, `Python`, `HTML` & `CSS`

本文件为项目的总体报告，具体技术细节（包括环境与依赖的配置、文件目录结构、文件使用方法、函数接口等）请**详见技术文档（[`KARM_Reference.md`](KARMA_Reference.md)）。**

## Team 成员简介

- 武钰淞 @ `bqsgwys`：清华大学电子系大二在读，大腿+大佬
- 张亦弛 @ `YC-Vertex`：清华大学微纳电子系大二在读，软硬双修，软件开发经历相对较少，高中参加过许多科创hackathon
- 马呈翔 @ `mcxthuee`：清华大学微纳电子系大二在读，发展方向未定。对软件和硬件都比较感兴趣，希望能通过此次hackathon学习到更多的知识，和大佬们做朋友~

## Problem Statement 问题陈述

近年来，人工智能相关技术极度火爆，我们希望通过分析Artificial Intelligence & Machine Learning相关论文的内容，将人工智能领域的关键词热度演变可视化，以达到AI技术趋势分析与展示的目标。

## Data Sources 数据集源

论文来自主办方所给数据集，即来自于*arXiv*收录的cs:AI、cs:CV、cs:CL、cs:LG、stat:ML等领域的英文文献共4343篇。所有数据文件均为pdf格式，且内容均与AI&ML相关。具体包含题目、作者、学校机构、发表日期等基础信息内容，以及论文正文内容。

关键词信息来源于WildML、Wikipedia、Google Developers三个渠道，具体连接为：

- Deep Learning Glossary - WildML: http://www.wildml.com/deep-learning-glossary/
- Glossary of AI - Wikipedia: https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence
- 机器学习术语表 - Google Developers: https://developers.google.com/machine-learning/glossary/

## Design & Methodology 设计与方法论

> Less is more. &emsp; -- Ludwig Mies van der Rohe

**方法论**：我们希望通过最直接、有效、快速的方式获得所需信息，而非最炫技的方式。

**方案流程架构**：将问题拆分为四部分：pdf内容的提取、关键词的提取、关键词匹配查找、数据可视化。

- PDF内容的提取：主要提取论文的基础信息（论文编号、分类、时间）以及正文内容，使用`PyPDF2`和`pdfminer`进行数据提取，转换为文本文件以方便后续的字符数据处理。其过程中，对于无法正常打开的文件、无法识别论文基础信息的文件，分别有特殊标记处理。
- 错误文件数据的处理：鉴于所有文件均来源于*arXiv*，我们直接从*arXiv*官网自动提取出损坏文件相关的信息和内容。
- 关键词的词典的建立：我们使用了一些小技巧（包括正则表达式匹配和网络爬虫）从权威性的网站（包括Wikipedia和Google Developers）上抓取下来了许多AIML关键词，并写入到json文件中。然后对于其中的普通和非AIML专有词汇（例如algorithm, node）进行了自动和手动的筛出，形成最终的json关键词词典。
- 关键词匹配查找：鉴于pdf提取步骤产生的纯文本文件中有许多无效、无意义的字符，我们为其准备了一套数据清理解决方案，可以消除掉其中的空格、换行，以及无意义字符（由pdf中的图片等产生而来），最终得到可以用于关键词匹配查找的最简文档。下一步，对关键词字典中的每个关键词，在每个文件中进行正则匹配，获取关键词在论文中出现的次数。
- 数据可视化：选择使用网页，因为它需要更少的依赖配置，具有很好的跨平台兼容性，并且对于处理json数据的表现很好。值得一提的是，Material Design等优秀的网页界面设计的开源资源，也是我们选择网页开发的一大原因。

## Algorithm & Model 算法与模型

## Result 分析结果

### AIML热词趋势分析

目标数据集中提取的关键词信息表现出了很强的一致性：从2019年5月至2019年8月，绝大多数关键词词频表现出了线性上升的趋势。

对于所给的论文数据集，关键词匹配结果的代表性很好：除了无法获取内容的错误文件外，其余论文的利用率为100%，即每篇论文中都至少提取出了一个关键词。

### 项目解决方案的自我评估

- [x] **目标完成度**：完成了要求中的所有任务。由于所给数据集中论文的时间分布极度密集，所以没有很好地体现出在长时间轴上的关键词热度变化，算是一个小遗憾。
- [x] **使用难易度**：除了pdf2txt的部分需要手动操作外，其余部分做到了傻瓜式的一键操作，十分用户友好。
- [ ] **运行效率**：对于4000+个文件的处理和提取速度较慢，基本没有做相关的优化。项目进展到后期考虑过将内容从pdf读取后直接进行关键词匹配，而非存储为txt再进行读取，不过由于时间进度的考量没有做进一步的修改和优化。
- [x] **异常处理**：包含一些对于异常文件的甄别和对可修复错误的补救工作，但是有时需要人工操作，自动化程度并不完全。
- [x] **兼容性**：使用HTML&CSS、JavaScript、Python等跨平台兼容性较好的语言，并且尽量减少用户配置的复杂程度。