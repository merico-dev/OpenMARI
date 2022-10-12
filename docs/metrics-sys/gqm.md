---
sidebar_label: 'GQM 体系'
sidebar_position: 1
---

# 基于 GQM 的指标体系

## GQM 框架

GQM 即 Goal/Question/Metric（目标/问题/指标），是软件工程领域进行系统化度量和分析的一个框架[^Basili(1984)] [^vanSolingen(2002)] [^Ren(2022)]，被称为研发效能度量方法的“事实标准”。
- 在概念层，**目标**定义度量的目的（如“改进”）、对象（如“需求交付”）、维度（如“速度”）以及关注的角色（如“项目经理”）。
- 在操作层，以**问题**的形式拆解目标，刻画度量的模型及其组成，例如：“需求交付延迟的瓶颈在哪里？”
- 在量化层， 每个问题对应回答问题所需的**指标**及其分析方法。

:::info
- 更多了解 GQM，请参见[《GQM 从入门到精通》](https://meri.co/gqm)。
- GQM 解决收集哪些有效数据和数据如何分析的问题，即 MARI 方法论中的“M”和“A”；而数据的使用和后续行动由 MARI 方法论中的“R”和“I”涵盖。[指标字典](/docs/metrics-dict)给出了每个指标对应 MARI 的详细描述。
:::

本章节将列出常见的目标及其问题。定义目标和问题，需要确保其实用性和规范性：

- **实用性**：GQM 框架原本为专业的软件工程分析人员设计，而我们的指标体系直接服务开发团队，需要更多从终端用户的视角进行实用化，同时支持直接可用的产品实现。
- **规范性**：传统软件过程改进咨询服务，依赖咨询专家个人的经验和水平，无法系统地在其他开发团队复刻和持续应用。我们的指标体系旨在结构化软件工程分析的过程，对基本的单元进行抽象和规范。

综上，**MARI 指标体系将 GQM 框架实用化，对分析实践进行规范化**，是开发团队实现效能洞察的最佳实践指南。

## 规范的实用目标体系

现代 GQM 框架[^Ren(2022)]定义了[目标](https://meri.co/55bb4126#modern-goal)的四个要素，我们对其具体实现做了如下几方面简化，以利于实用。

- **对象**：过程、产物、资源等对象通常都具有层级结构，比如软件作为产物包含组件、文件等，团队作为资源通常包含下一级团队。我们在定义目标时采用更高层的通用对象，而将下层对象的分析实现为数据的**下探**，而非设定新的目标。
- **维度**：虽然维度是开放集合，我们将其归纳为[认知域](cognition-domains.md)中规定的一个**推荐集**，可从中选取。这样的有限集合有利于规范化，应用统一的分析方法和专家系统等技术。
- **目的**：在实践中，了解和评价往往伴随而生，单纯刻画对象（即“了解”）而不与其他对象对比（即“评价”）无法满足用户的信息需要，所以我们将两者归并称为**认知**（know）；改进和控制都是希望通过开发过程对指标的变化做出干预，我们统称为**管理**（manage）；预测是相对独立的目的，保持一个单独的门类。
- **角色**：通常一个目标可服务多个角色，所以我们将角色视为 (对象, 维度, 目的) 三元组定义的基本目标上的一组**标签**。在效能度量产品中，用户可根据自身角色访问对应标签的目标。

综上，MARI 中的**目标**以如下的形式定义：
```
(认知|管理|预测)<对象>的<维度>，适用于{角色}
```
例如：认知项目需求的交付速度，适用于高级管理者、项目经理、开发者。

## 规范的实用问题体系

在 GQM 框架中，针对特定目标可以灵活地提出问题。这种灵活性需要专家经验才能很好地运用和把握，有时也反映个人的处理方式。但应用 MARI 的开发团队未必在 GQM 方面有特别多的经验，也不一定要成为这方面的专家。为此，我们总结了问题的基本范式。以规范化的方式提问，有助于开发团队复刻行业经验，快速有效建立 GQM 度量和分析体系。

现代 GQM 框架[^Ren(2022)]中的“[速查表](https://meri.co/55bb4126#purpose-scope)”举例说明了提问的方向。我们将这些问题具体化为如下一系列模版（question template，`QT`）。问题该如何提实质上由背后隐式的分析模型决定，所以我们结合分析模型对问题进行分类。

### 单指标基础问题

基础问题是对目标中的对像维度的直接刻画，通常可以通过单个量化指标进行回答。例如，要“认知项目的需求交付水平”，我们自然想知道做了多少需求，每个需求花了多少时间，而这两个问题分别可通过需求吞吐量和需求交付时长进行回答。

#### `QT-S`：<对象><指标>是多少？ {#QT-S}

这是最直接的提问方式，适用于简单易懂的指标，能让用户明白问题的含义。以“需求吞吐量”为例，如果开发团队都了解这个概念，那么就可以按模版直接提问；否则，可将表述转换成“项目最近两周交付的需求有多少”等。

### 单指标参照类问题

认知包含了解和评价，而`QT-S`类问题的回答是单一数值，可供“了解”，但缺乏“参照系”，无法形成高低好坏的概念或判断（即“评价”），在实际当中的可用性往往打折扣。基于实践经验，我们通常提出两类参照性问题。

#### `QT-ST`：<对象><指标><u>近期变化</u>如何？ {#QT-ST}

从时间维度看指标变化，是建立“参照系”的一类典型做法。我们可以跟自己比，看指标近期发生了怎样的变化。

#### `QT-SB`：<对象><指标><u>与<同类对象>对比</u>如何？ {#QT-SB}

与同类对象比较，是建立“参照系”的另一类典型做法。进行对比的“同类对象”可以是具体的一个集合，也可以是特定集合上抽象的统计值，如组织的基线、行业的基线等。

### 单指标统计类问题

当多个对象的指标或者一个对象在多个周期中的指标呈现在数据视图中时，这些数据点的一些统计值，如均值、离散系数等，可以辅助对数据的认知。它们是`QT-ST`和`QT-SB`基础上更进一步的问题。

#### `ST-SD`：<对象><指标>的<u><统计值></u>是多少？

为了便于开发团队理解，统计值代表的意义可以放入问题表述，例如“项目各迭代开发当量的离散系数是多少”可以转换为“项目各迭代开发当量是否稳定”。

另外，这个统计值本身也是一种指标，即<对象>**<指标>的<统计值>**$$\Rightarrow$$<对象>**<指标>**。如果它值得进一步度量和观察，可以嵌套应用单指标的`QT-ST` 和 `QT-SB`等问题。

### 单指标下探类问题

#### `QT-SS`：<u>{子对象}</u>的<指标>如何？

#### `QT-SP`：<对象><u>各部分</u>的<指标>如何？

#### `QT-SST`：<u>{子对象}</u>的<指标><u>近期变化</u>如何？

#### `QT-SPT`：<对象><u>各部分</u>的<指标><u>近期变化</u>如何？

### 多指标关联问题

#### `QT-M`：<对象>的<u>{指标}间关系</u>如何？

### 复合指标下探问题

#### `QT-CP`：<对象>的<u>{指标}</u>是多少？

---

## <font color="gray">目标与问题列表</font>

**<font size="4">_内容正在建设中，以下表格尚未按照上述规范……_</font>**

**<font size="4">_欢迎您到访[论坛](https://github.com/merico-dev/OpenMARI/discussions)留下宝贵的意见和建议！_</font>**

### <font color="gray">目标体系</font>

<iframe class="airtable-embed" src="https://airtable.com/embed/shrbADs7QBJGaZmYH?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>

### <font color="gray">问题体系</font>

<iframe class="airtable-embed" src="https://airtable.com/embed/shroL9CQ7l7Ma4tOr?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>

---

<iframe src="https://cdn.forms-content.sg-form.com/f8e94db1-f953-11ec-a969-eeeb3ac63a65" width="100%" height="650" />

---

import CopyrightNotice from '../_copyright_notice.md';

<small><CopyrightNotice /></small>

## 参考阅读

[^Basili(1984)]: V. R. Basili and D. M. Weiss, "A Methodology for Collecting Valid Software Engineering Data," in _IEEE Transactions on Software Engineering_, vol. SE-10, no. 6, pp. 728-738, Nov. 1984. https://doi.org/10.1109/TSE.1984.5010301

[^vanSolingen(2002)]: van Solingen, R., (Revision), Basili, V., (Original article, 1994 ed.), Caldiera, G., (Original article, 1994 ed.) and Rombach, H.D., (Original article, 1994 ed.) (2002). Goal Question Metric (GQM) Approach. In Encyclopedia of Software Engineering, J.J. Marciniak (Ed.). https://doi.org/10.1002/0471028959.sof142

[^Ren(2022)]: 任晶磊．GQM 从入门到精通．_研发效能评论_，2022-06-08．https://meri.co/55bb4126

