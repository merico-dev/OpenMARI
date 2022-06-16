---
slug: essentials-of-gqm
title: GQM 从入门到精通
date: 2022-06-08
authors: jinglei
tags: [OpenMARI]
---

目标-问题-指标（GQM）是软件工程领域的一套系统方法，在研发效能度量实践中的作用和意义日益彰显，但目前产业界对 GQM 的应用存在两方面的误区：
一是简单从字面理解“目标”、“问题”和“指标”的概念，没有进一步认知它们的具体定义和背后的模型等**精髓**；
二是尚未充分意识到 GQM 是构建研发效能度量和改进**体系**的一种根本性方法。

我们今天可以看到关于研发效能度量的很多文章、演讲和案例。
它们虽然体现了实践中的第一手经验，但指标纷繁、模式各异，难免让人无所适从。
GQM 为我们提供了抓住本质、化繁为简的有效路径。

<!--truncate-->

## GQM 方法的基本思想和早期设计

GQM 最早由 Basili 提出[^Basili(1984)]，发表在软件工程领域权威期刊 IEEE Transactions on Software Engineering 上。
GQM 当初是为软件工程研究中的数据收集和分析而设计的。
它的基本思想是，度量一定要聚焦于清晰具体的目标，通过问题的形式将目标划归为一组可量化回答的问题，最后通过特定指标来回答这些问题，进而达成度量目标。

### 软件工程研究的“低配版”

实际上，我们今天所讨论的研发效能度量（及分析），可以看作软件工程研究领域数据收集和分析的“低配版”。
软件工程研究通常需要生产环境中的数据来评价软件开发方法和认知软件开发过程，会采用 GQM 这样系统的方法，并保证具体实施的科学性和严谨性。
实用目的下的研发效能度量，不必过度追求科学性和严谨性，但现实中往往因为一些随意乃至混乱的做法，获得无效的数据或误导的结论。
采用 GQM 方法，可以帮助我们实行真正有意义的研发效能度量。
我们先追本溯源，概览原始版本 GQM 的实施步骤。

### 步骤的意义今非昔比 {#original-gqm-steps}

> 效率是“以正确的方式做事”，而效能是“做正确的事”。
>
> ——彼得·德鲁克《有效的管理者》

GQM 包含如下六个基本步骤，其中最费时费力的一些步骤（标记了“*”）在今天已经因为流程工具的普及而变得非常便利。
正是因为这样数据收集成本的极大降低，让研发效能度量和分析变得普遍可行和实用。
与此同时，其他 GQM 步骤侧重概念层面的思考和梳理，并不会给团队带来很大成本，却至关重要，能够保证整个过程在“做正确的事”以及“以正确的方式做事”。
它们在今天的研发效能度量实践中经常被忽视，得不偿失。

1. **确立数据收集的目标**。
目标通常分为两类，一类用于评价特定的软件开发方法，另一类独立于特定软件开发方法，用于认知通用的软件开发过程。
在研发效能度量实践中，评价改进措施的有效性（如 MARI 方法[^OpenMARI]中改进后的再次度量验证）即为前者。
目标的具体定义方法参见[经典模型](#classic-gqm)或[最新的实践](#gqm-today)。

2. **列出感兴趣的问题**。

3. **确立数据的分类**。

4. ***设计和测试数据收集表格**。

5. ***收集和验证数据**。

6. **分析数据**。

## 真正理解经典 GQM {#classic-gqm}

GQM 方法提出后，经过了不断的丰富和发展，早期即应用在 NASA、惠普、普华永道、斯伦贝谢、西门子、爱立信、飞利浦、博世、戴姆勒-克莱斯勒、安联、宝洁等各行业先进企业，相关文献和引用比较丰富。
其中，Basili 在马里兰大学的技术报告[^Basili(1992)]和 2002 年与其他人合作的文章[^vanSolingen(2002)]是对经典 GQM 较为成熟和完整的阐述，推荐读者参考。
前者适合有研究背景的读者，但其表达和格式上的问题可能影响阅读和理解；后者适合行业中更广泛的读者，但其裁剪和简化也有可能误导实践之处，下面会将重点逐一指出。
本文综合这两篇和其他文献的主要内容，将 GQM 的精华进行了提炼和总结。

### 整体框架

通过 GQM 雏形的主要[实操步骤](#original-gqm-steps)，我们对该方法已经建立了初步的认知。图 1 展示了方法的整体框架。

![GQM 框架图](img/2022-06-08-gqm-paradigm.gif "GQM Diagram")

图 1   GQM 框架[^vanSolingen(2002)]

GQM 强调研发效能度量一定要以自上而下的方式定义，

### 目标


### 问题


### 指标

## GQM 的最新实践指南 {#gqm-today}

今天我们正在进入数据驱动研发效能的时代。
我们给出一份在今天应用 GQM 的最佳实践指南。
所有你需要知道的关于 GQM 的一切都在这里。

### 基本思想

### 目标

### 问题

### 指标

## 参考阅读

[^Basili(1984)]: V. R. Basili and D. M. Weiss, "[A Methodology for Collecting Valid Software Engineering Data](https://doi.org/10.1109/TSE.1984.5010301)," in _IEEE Transactions on Software Engineering_, vol. SE-10, no. 6, pp. 728-738, Nov. 1984.

[^Basili(1992)]: V. Basili, "[Software Modeling and Measurement: The Goal/Question/Metric Paradigm](https://hdl.handle.net/1903/7538)," University of Maryland, CS-TR-2956, UMIACS-TR-92-96, September 1992.

[^OpenMARI]: The OpenMARI project. https://www.openmari.dev.

[^vanSolingen(2002)]: van Solingen, R., (Revision), Basili, V., (Original article, 1994 ed.), Caldiera, G., (Original article, 1994 ed.) and Rombach, H.D., (Original article, 1994 ed.) (2002). Goal Question Metric (GQM) Approach. In Encyclopedia of Software Engineering, J.J. Marciniak (Ed.). https://doi.org/10.1002/0471028959.sof142