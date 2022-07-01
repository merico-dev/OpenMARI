---
sidebar_label: 'GQM模型'
sidebar_position: 2
---

## GQM 模型

GQM 即 Goal/Question/Metric（目标/问题/指标），是软件工程领域进行系统化度量和分析的一个框架[^Basili(1984)] [^vanSolingen(2002)] [^Ren(2022)]，被称为研发效能度量方法的“事实标准”。
- 在概念层，**目标**定义度量的目的（如“改进”）、对象（如“需求交付”）、维度（如“速度”）以及关注的角色（如“项目经理”）。
- 在操作层，以**问题**的形式拆解目标，刻画度量的模型及其组成，例如：“需求交付的瓶颈在哪里？”
- 在量化层，每个问题对应回答问题所需的**指标**及其分析方法。

:::info
- 更多了解 GQM，请参见[《GQM 从入门到精通》](https://meri.co/gqm)。
- GQM 解决收集哪些有效数据和数据如何分析的问题，而数据的使用和后续行动则需由 MARI 方法其他部分补充。[指标字典](/docs/metrics-dict)给出了每个指标对应 MARI 的详细描述。
:::

下面列出常见的目标及其问题和指标。

## 目标体系

<iframe class="airtable-embed" src="https://airtable.com/embed/shrbADs7QBJGaZmYH?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>

## 问题体系

<iframe class="airtable-embed" src="https://airtable.com/embed/shroL9CQ7l7Ma4tOr?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>

## 参考阅读

[^Basili(1984)]: V. R. Basili and D. M. Weiss, "A Methodology for Collecting Valid Software Engineering Data," in _IEEE Transactions on Software Engineering_, vol. SE-10, no. 6, pp. 728-738, Nov. 1984. https://doi.org/10.1109/TSE.1984.5010301

[^vanSolingen(2002)]: van Solingen, R., (Revision), Basili, V., (Original article, 1994 ed.), Caldiera, G., (Original article, 1994 ed.) and Rombach, H.D., (Original article, 1994 ed.) (2002). Goal Question Metric (GQM) Approach. In Encyclopedia of Software Engineering, J.J. Marciniak (Ed.). https://doi.org/10.1002/0471028959.sof142

[^Ren(2022)]: 任晶磊．GQM 从入门到精通．_研发效能评论_，2022-06-08．https://meri.co/55bb4126