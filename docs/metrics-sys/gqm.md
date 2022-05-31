---
sidebar_label: 'GQM模型'
sidebar_position: 2
---

# GQM 模型

GQM 即 Goal/Question/Metric（目标/问题/指标）模型，是进行软件工程数据收集和度量的一个方法框架 [[Basili84](#Basili84), [Basili92](#Basili92)]。
- 在概念层，**目标**定义度量的目的（如“减少”）、度量的对象（如“需求交付”）和度量的关注点（如“延迟”）。
- 在操作层，以**问题**的形式拆解目标，刻画度量的模型及其组成，例如：“需求交付的瓶颈在哪里？”
- 在量化层，每个问题对应回答问题所需的**指标**。

:::info
GQM 解决收集哪些有效数据的问题，但数据的使用和行动等需由 MARI 方法论补充。[指标字典](/docs/metrics-dict)给出了每个指标对应 MARI 的详细描述。
:::

下面列出常见的目标及其问题和指标。

## 改进项目计划的准确性

### 有多少需求能够按计划时间交付？

- 需求按时交付率

### 有多少需求应该进一步拆解？

- 需求颗粒度

## 参考信息

- [Basili84]<a id="Basili84"></a> V. R. Basili and D. M. Weiss, "[A Methodology for Collecting Valid Software Engineering Data](https://doi.org/10.1109/TSE.1984.5010301)," in _IEEE Transactions on Software Engineering_, vol. SE-10, no. 6, pp. 728-738, Nov. 1984.
- [Basili92]<a id="Basili92"></a> V. Basili, "[Software Modeling and Measurement: The Goal/Question/Metric Paradigm](https://hdl.handle.net/1903/7538)," University of Maryland, CS-TR-2956, UMIACS-TR-92-96, September 1992.