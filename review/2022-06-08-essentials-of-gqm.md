---
slug: essentials-of-gqm
title: GQM 从入门到精通
date: 2022-06-08
authors: jinglei
tags: [OpenMARI]
---

<!--truncate-->

 [^Basili(1992)] [^vanSolingen(2002)]

# 软件工程研究的“低配版”

GQM 最早由 Basili 提出[^Basili(1984)]，是为软件工程研究中的数据收集和分析而设计的。
实际上，我们今天所讨论的研发效能度量（及分析），可以看作软件工程数据收集和分析的“低配版”。
软件工程研究通常需要数据来评价软件开发方法和认知软件开发过程，会采用 GQM 这样系统的方法，且具体操作和实施较为科学和严谨。
实用目的下的研发效能度量，不必过度追求科学性和严谨性，但往往因为一些随意乃至混乱的做法，获得无效的数据或误导的结论。
采用 GQM 方法，可以帮助我们实行真正有意义的研发效能度量。
我们先追本溯源，看看原始版本的 GQM 是怎样的思路。

> 效率是“以正确的方式做事”，而效能是“做正确的事”。
>
> ——彼得·德鲁克《有效的管理者》

GQM 包含如下六个基本步骤，其中最费时费力的一些步骤（标记了“*”）在今天已经因为流程工具的普及而变得非常便利。
正是因为这样数据收集成本的极大降低，让研发效能度量和分析变得普遍可行和实用。
与此同时，其他 GQM 步骤侧重概念层面的思考和梳理，并不会给团队带来很大成本，却至关重要，能够保证整个过程在“做正确的事”。它们在今天的研发效能度量实践中被忽视，得不偿失。

1. 确立数据收集的目标。

2. 列出感兴趣的问题。

3. 确立数据的分类。

4. *设计和测试数据收集表格。

5. *收集和验证数据。

6. 分析数据。


# 参考阅读

[^Basili(1984)]: V. R. Basili and D. M. Weiss, "[A Methodology for Collecting Valid Software Engineering Data](https://doi.org/10.1109/TSE.1984.5010301)," in _IEEE Transactions on Software Engineering_, vol. SE-10, no. 6, pp. 728-738, Nov. 1984.

[^Basili(1992)]: V. Basili, "[Software Modeling and Measurement: The Goal/Question/Metric Paradigm](https://hdl.handle.net/1903/7538)," University of Maryland, CS-TR-2956, UMIACS-TR-92-96, September 1992.

[^vanSolingen(2002)]: van Solingen, R., (Revision), Basili, V., (Original article, 1994 ed.), Caldiera, G., (Original article, 1994 ed.) and Rombach, H.D., (Original article, 1994 ed.) (2002). Goal Question Metric (GQM) Approach. In Encyclopedia of Software Engineering, J.J. Marciniak (Ed.). https://doi.org/10.1002/0471028959.sof142