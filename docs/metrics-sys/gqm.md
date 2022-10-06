---
sidebar_label: 'GQM 体系'
sidebar_position: 1
---

# 基于 GQM 的指标体系

## GQM 框架

GQM 即 Goal/Question/Metric（目标/问题/指标），是软件工程领域进行系统化度量和分析的一个框架[^Basili(1984)] [^vanSolingen(2002)] [^Ren(2022)]，被称为研发效能度量方法的“事实标准”。
- 在概念层，**目标**定义度量的目的（如“改进”）、对象（如“需求交付”）、维度（如“速度”）以及关注的角色（如“项目经理”）。
- 在操作层，以**问题**的形式拆解目标，刻画度量的模型及其组成，例如：“需求交付延迟的瓶颈在哪里？”
- 在量化层，每个问题对应回答问题所需的**指标**及其分析方法。

:::info
- 更多了解 GQM，请参见[《GQM 从入门到精通》](https://meri.co/gqm)。
- GQM 解决收集哪些有效数据和数据如何分析的问题，即 MARI 方法论中的“M”和“A”；而数据的使用和后续行动由 MARI 方法论中的“R”和“I”涵盖。[指标字典](/docs/metrics-dict)给出了每个指标对应 MARI 的详细描述。
:::

本章节将列出常见的目标及其问题。定义目标和问题，需要确保其实用性和规范性：

- **实用性**：GQM 框架原本为专业的软件工程分析人员设计，而我们的指标体系直接服务开发团队，需要更多从终端用户的视角进行实用化，同时支持直接可用的产品实现。
- **规范性**：传统软件过程改进咨询服务，依赖咨询专家个人的经验和水平，无法系统地在其他开发团队复刻和持续应用。我们的指标体系旨在结构化软件工程分析的过程，对基本的单元进行抽象和规范。

综上，**MARI 指标体系将 GQM 框架实用化，对分析实践进行规范化**，是开发团队实现效能洞察的最佳实践指南。

## 实用规范的目标体系

现代 GQM 框架[^Ren(2022)]定义了[目标](https://meri.co/55bb4126#modern-goal)的四个要素，我们对其具体实现做了如下几方面简化，以利于实用。

- 对象：过程、产物、资源等对象通常都具有层级结构，比如软件作为产物包含组件、文件等，团队作为资源通常包含下一级团队。我们在定义目标时采用更高层的通用对象，而将下层对象的分析实现为数据的**下钻**，而非设定新的目标。
- 维度：虽然维度是开放集合，我们将其归纳为[认知域](cognition-domains.md)中规定的一个**推荐集**，可从中选取。这样的有限集合有利于规范化，应用统一的分析方法和专家系统等技术。
- 目的：在实践中，了解和评价往往伴随而生，单纯刻画对象（即“了解”）而不与其他对象对比（即“评价”）无法满足用户的信息需要，所以我们将两者归并称为**认知**（know）；改进和控制都是希望通过开发过程对指标的变化做出干预，我们统称为**管理**（manage）；预测是相对独立的目的，保持一个单独的门类。
- 角色：通常一个目标可服务多个角色，所以我们将角色视为基本目标定义上的一组标签。

## 实用规范的问题体系

---

**<font size="4">_内容正在建设中，目标和问题的粒度会更细，涵盖范围会更深广。_</font>**

**<font size="4">_特别欢迎您到访[论坛](https://github.com/merico-dev/OpenMARI/discussions)留下宝贵的意见和建议！_</font>**

## 目标体系

<iframe class="airtable-embed" src="https://airtable.com/embed/shrbADs7QBJGaZmYH?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>

## 问题体系

<iframe class="airtable-embed" src="https://airtable.com/embed/shroL9CQ7l7Ma4tOr?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>

---

<iframe src="https://cdn.forms-content.sg-form.com/f8e94db1-f953-11ec-a969-eeeb3ac63a65" width="100%" height="650" />

## 参考阅读

[^Basili(1984)]: V. R. Basili and D. M. Weiss, "A Methodology for Collecting Valid Software Engineering Data," in _IEEE Transactions on Software Engineering_, vol. SE-10, no. 6, pp. 728-738, Nov. 1984. https://doi.org/10.1109/TSE.1984.5010301

[^vanSolingen(2002)]: van Solingen, R., (Revision), Basili, V., (Original article, 1994 ed.), Caldiera, G., (Original article, 1994 ed.) and Rombach, H.D., (Original article, 1994 ed.) (2002). Goal Question Metric (GQM) Approach. In Encyclopedia of Software Engineering, J.J. Marciniak (Ed.). https://doi.org/10.1002/0471028959.sof142

[^Ren(2022)]: 任晶磊．GQM 从入门到精通．_研发效能评论_，2022-06-08．https://meri.co/55bb4126