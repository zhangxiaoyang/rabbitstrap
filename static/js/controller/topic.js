'use strict';
// Last modifed by zhangxiaoyang(2016/2/8)

/**
 * TopicController
 */
app.controller('TopicController', function($scope) {
  $scope.courses = [
    {'name': '数据结构', 'location': ['清华大学', '计算机系', '计算机专业', '数据结构'], 'time': '昨天 11:20'},
    {'name': '数据结构与算法', 'location': ['清华大学', '计算机系', '计算机专业', '数据结构与算法'], 'time': '前天 11:00'},
    {'name': 'C++程序设计', 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '11月5日 9:00'},
    {'name': '计算机组成原理', 'location': ['清华大学', '计算机系', '计算机专业', '计算机组成原理'], 'time': '11月5日 3:00'},
    {'name': '计算机网络', 'location': ['清华大学', '计算机系', '计算机专业', '计算机网络'], 'time': '11月5日 3:00'},
    {'name': '组合数学', 'location': ['清华大学', '计算机系', '计算机专业', '组合数学'], 'time': '11月5日 3:00'},
    {'name': 'C++程序设计', 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '11月5日 3:00'},
    {'name': '计算机组成原理', 'location': ['清华大学', '计算机系', '计算机专业', '计算机组成原理'], 'time': '11月5日 3:00'},
    {'name': '计算机网络', 'location': ['清华大学', '计算机系', '计算机专业', '计算机网络'], 'time': '11月5日 3:00'},
    {'name': '组合数学', 'location': ['清华大学', '计算机系', '计算机专业', '组合数学'], 'time': '2011年11月5日 3:00'},
  ];
  $scope.activities = [
    {'type': 'question', 'from': '小明', 'to': '如何快速复习C++', 'desc': ' 甄士隐梦幻识通灵 贾雨村风尘怀闺秀 此开卷第一回也。作者自云:因曾历过一番梦幻之后,故将真事隐去,而借"通灵"之说,撰此<<石头记>>一书也。故曰"甄士隐"云云。但书中所记何事何人?自又云:"今风尘碌碌, 一事无成,忽念及当日所有之女子,一一细考较去,觉其行止见识,皆出于我之上。何我堂堂须眉,诚不若彼裙钗哉?实愧则有余,悔又无益之大无可如何之日也!当此,则自欲将已往所赖天恩祖德,锦衣纨э之时,饫甘餍肥之日,背父兄教育之恩,负师友规谈之德, 以至今日一技无成,半生潦倒之罪,编述一集,以告天下人:我之罪固不免, 然闺阁中本自历历有人,万不可因我之不肖,自护己短,一并使其泯灭也。虽今日之茅椽蓬牖, 瓦灶绳床,其晨夕风露,阶柳庭花,亦未有妨我之襟怀笔墨者。虽我未学, 下笔无文,又何妨用假语村言,敷演出一段故事来,亦可使闺阁昭传,复可悦世之目,破人愁闷,不亦宜乎?"故曰"贾雨村"云云。 此回中凡用"梦"用"幻"等字,是提醒阅者眼目,亦是此书立意本旨。 列位看官:你道此书从何而来?说起根由虽近荒唐,细按则深有趣味。待在下将此来历注明,方使阅者了然不惑。 原来女娲氏炼石补天之时,于大荒山无稽崖练成高经十二丈,方经二十四丈顽石三万六千五百零一块。 娲皇氏只用了三万六千五百块,只单单剩了一块未用,便弃在此山青埂峰下。谁知此石自经煅炼之后,灵性已通,因见众石俱得补天,独自己无材不堪入选,遂自怨自叹,日夜悲号惭愧。 一日, 正当嗟悼之际,俄见一僧一道远远而来,生得骨格不凡,丰神迥异,说说笑笑来至峰下, 坐于石边高谈快论。先是说些云山雾海神仙玄幻之事,后便说到红尘中荣华富贵。此石听了,不觉打动凡心,也想要到人间去享一享这荣华富贵,但自恨粗蠢,不得已,便口吐人言,向那僧道说道:"大师,弟子蠢物,不能见礼了。适闻二位谈那人世间荣耀繁华,心切慕之。弟子质虽粗蠢,性却稍通,况见二师仙形道体,定非凡品,必有补天济世之材,利物济人之德。如蒙发一点慈心,携带弟子得入红尘,在那富贵场中, 温柔乡里受享几年,自当永佩洪恩,万劫不忘也。"二仙师听毕,齐憨笑道:"善哉,善哉!那红尘中有却有些乐事,但不能永远依恃,况又有`美中不足,好事多魔八个字紧相连属, 瞬息间则又乐极悲生,人非物换,究竟是到头一梦,万境归空,倒不如不去的好。"这石凡心已炽,那里听得进这话去,乃复苦求再四。二仙知不可强制,乃叹道:"此亦静极怂级?无中生有之数也。既如此,我们便携你去受享受享,只是到不得意时,切莫后悔。 "石道:"自然,自然。"那僧又道:"若说你性灵,却又如此质蠢,并更无奇贵之处。如此也只好踮脚而已。也罢,我如今大施佛法助你助,待劫终之日,复还本质,以了此案。 你道好否?"石头听了,感谢不尽。那僧便念咒书符,大展幻术,将一块大石登时变成一块鲜明莹洁的美玉, 且又缩成扇坠大小的可佩可拿。那僧托于掌上', 'poster': null, 'weight': 100, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '2小时前'},
    {'type': 'answer', 'from': '小明', 'to': '如何快速复习C++', 'desc': ' 甄士隐梦幻识通灵 贾雨村风尘怀闺秀 此开卷第一回也。作者自云:因曾历过一番梦幻之后,故将真事隐去,而借"通灵"之说,撰此<<石头记>>一书也。故曰"甄士隐"云云。但书中所记何事何人?自又云:"今风尘碌碌, 一事无成,忽念及当日所有之女子,一一细考较去,觉其行止见识,皆出于我之上。何我堂堂须眉,诚不若彼裙钗哉?实愧则有余,悔又无益之大无可如何之日也!当此,则自欲将已往所赖天恩祖德,锦衣纨э之时,饫甘餍肥之日,背父兄教育之恩,负师友规谈之德, 以至今日一技无成,半生潦倒之罪,编述一集,以告天下人:我之罪固不免, 然闺阁中本自历历有人,万不可因我之不肖,自护己短,一并使其泯灭也。虽今日之茅椽蓬牖, 瓦灶绳床,其晨夕风露,阶柳庭花,亦未有妨我之襟怀笔墨者。虽我未学, 下笔无文,又何妨用假语村言,敷演出一段故事来,亦可使闺阁昭传,复可悦世之目,破人愁闷,不亦宜乎?"故曰"贾雨村"云云。 此回中凡用"梦"用"幻"等字,是提醒阅者眼目,亦是此书立意本旨。 列位看官:你道此书从何而来?说起根由虽近荒唐,细按则深有趣味。待在下将此来历注明,方使阅者了然不惑。 原来女娲氏炼石补天之时,于大荒山无稽崖练成高经十二丈,方经二十四丈顽石三万六千五百零一块。 娲皇氏只用了三万六千五百块,只单单剩了一块未用,便弃在此山青埂峰下。谁知此石自经煅炼之后,灵性已通,因见众石俱得补天,独自己无材不堪入选,遂自怨自叹,日夜悲号惭愧。 一日, 正当嗟悼之际,俄见一僧一道远远而来,生得骨格不凡,丰神迥异,说说笑笑来至峰下, 坐于石边高谈快论。先是说些云山雾海神仙玄幻之事,后便说到红尘中荣华富贵。此石听了,不觉打动凡心,也想要到人间去享一享这荣华富贵,但自恨粗蠢,不得已,便口吐人言,向那僧道说道:"大师,弟子蠢物,不能见礼了。适闻二位谈那人世间荣耀繁华,心切慕之。弟子质虽粗蠢,性却稍通,况见二师仙形道体,定非凡品,必有补天济世之材,利物济人之德。如蒙发一点慈心,携带弟子得入红尘,在那富贵场中, 温柔乡里受享几年,自当永佩洪恩,万劫不忘也。"二仙师听毕,齐憨笑道:"善哉,善哉!那红尘中有却有些乐事,但不能永远依恃,况又有`美中不足,好事多魔八个字紧相连属, 瞬息间则又乐极悲生,人非物换,究竟是到头一梦,万境归空,倒不如不去的好。"这石凡心已炽,那里听得进这话去,乃复苦求再四。二仙知不可强制,乃叹道:"此亦静极怂级?无中生有之数也。既如此,我们便携你去受享受享,只是到不得意时,切莫后悔。 "石道:"自然,自然。"那僧又道:"若说你性灵,却又如此质蠢,并更无奇贵之处。如此也只好踮脚而已。也罢,我如今大施佛法助你助,待劫终之日,复还本质,以了此案。 你道好否?"石头听了,感谢不尽。那僧便念咒书符,大展幻术,将一块大石登时变成一块鲜明莹洁的美玉, 且又缩成扇坠大小的可佩可拿。那僧托于掌上', 'poster': 'http://ww4.sinaimg.cn/large/659dc7b4jw1e96tf7pynej20u00gvwii.jpg', 'weight': 20, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '昨天 12:23'},
    {'type': 'upload', 'from': '小明', 'to': 'C++程序设计.pdf', 'desc': '很有用的复习资料', 'weight': 3, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '11月12日 23:12'},
  ];
  $scope.answers = [
    {'type': 'answer', 'from': '小明', 'to': '如何快速复习C++', 'desc': ' 甄士隐梦幻识通灵 贾雨村风尘怀闺秀 此开卷第一回也。作者自云:因曾历过一番梦幻之后,故将真事隐去,而借"通灵"之说,撰此<<石头记>>一书也。故曰"甄士隐"云云。但书中所记何事何人?自又云:"今风尘碌碌, 一事无成,忽念及当日所有之女子,一一细考较去,觉其行止见识,皆出于我之上。何我堂堂须眉,诚不若彼裙钗哉?实愧则有余,悔又无益之大无可如何之日也!当此,则自欲将已往所赖天恩祖德,锦衣纨э之时,饫甘餍肥之日,背父兄教育之恩,负师友规谈之德, 以至今日一技无成,半生潦倒之罪,编述一集,以告天下人:我之罪固不免, 然闺阁中本自历历有人,万不可因我之不肖,自护己短,一并使其泯灭也。虽今日之茅椽蓬牖, 瓦灶绳床,其晨夕风露,阶柳庭花,亦未有妨我之襟怀笔墨者。虽我未学, 下笔无文,又何妨用假语村言,敷演出一段故事来,亦可使闺阁昭传,复可悦世之目,破人愁闷,不亦宜乎?"故曰"贾雨村"云云。 此回中凡用"梦"用"幻"等字,是提醒阅者眼目,亦是此书立意本旨。 列位看官:你道此书从何而来?说起根由虽近荒唐,细按则深有趣味。待在下将此来历注明,方使阅者了然不惑。 原来女娲氏炼石补天之时,于大荒山无稽崖练成高经十二丈,方经二十四丈顽石三万六千五百零一块。 娲皇氏只用了三万六千五百块,只单单剩了一块未用,便弃在此山青埂峰下。谁知此石自经煅炼之后,灵性已通,因见众石俱得补天,独自己无材不堪入选,遂自怨自叹,日夜悲号惭愧。 一日, 正当嗟悼之际,俄见一僧一道远远而来,生得骨格不凡,丰神迥异,说说笑笑来至峰下, 坐于石边高谈快论。先是说些云山雾海神仙玄幻之事,后便说到红尘中荣华富贵。此石听了,不觉打动凡心,也想要到人间去享一享这荣华富贵,但自恨粗蠢,不得已,便口吐人言,向那僧道说道:"大师,弟子蠢物,不能见礼了。适闻二位谈那人世间荣耀繁华,心切慕之。弟子质虽粗蠢,性却稍通,况见二师仙形道体,定非凡品,必有补天济世之材,利物济人之德。如蒙发一点慈心,携带弟子得入红尘,在那富贵场中, 温柔乡里受享几年,自当永佩洪恩,万劫不忘也。"二仙师听毕,齐憨笑道:"善哉,善哉!那红尘中有却有些乐事,但不能永远依恃,况又有`美中不足,好事多魔八个字紧相连属, 瞬息间则又乐极悲生,人非物换,究竟是到头一梦,万境归空,倒不如不去的好。"这石凡心已炽,那里听得进这话去,乃复苦求再四。二仙知不可强制,乃叹道:"此亦静极怂级?无中生有之数也。既如此,我们便携你去受享受享,只是到不得意时,切莫后悔。 "石道:"自然,自然。"那僧又道:"若说你性灵,却又如此质蠢,并更无奇贵之处。如此也只好踮脚而已。也罢,我如今大施佛法助你助,待劫终之日,复还本质,以了此案。 你道好否?"石头听了,感谢不尽。那僧便念咒书符,大展幻术,将一块大石登时变成一块鲜明莹洁的美玉, 且又缩成扇坠大小的可佩可拿。那僧托于掌上', 'poster': 'http://ww4.sinaimg.cn/large/659dc7b4jw1e96tf7pynej20u00gvwii.jpg', 'weight': 20, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '昨天 12:23'},
    {'type': 'answer', 'from': '小明', 'to': '如何快速复习C++', 'desc': ' 甄士隐梦幻识通灵 贾雨村风尘怀闺秀 此开卷第一回也。作者自云:因曾历过一番梦幻之后,故将真事隐去,而借"通灵"之说,撰此<<石头记>>一书也。故曰"甄士隐"云云。但书中所记何事何人?自又云:"今风尘碌碌, 一事无成,忽念及当日所有之女子,一一细考较去,觉其行止见识,皆出于我之上。何我堂堂须眉,诚不若彼裙钗哉?实愧则有余,悔又无益之大无可如何之日也!当此,则自欲将已往所赖天恩祖德,锦衣纨э之时,饫甘餍肥之日,背父兄教育之恩,负师友规谈之德, 以至今日一技无成,半生潦倒之罪,编述一集,以告天下人:我之罪固不免, 然闺阁中本自历历有人,万不可因我之不肖,自护己短,一并使其泯灭也。虽今日之茅椽蓬牖, 瓦灶绳床,其晨夕风露,阶柳庭花,亦未有妨我之襟怀笔墨者。虽我未学, 下笔无文,又何妨用假语村言,敷演出一段故事来,亦可使闺阁昭传,复可悦世之目,破人愁闷,不亦宜乎?"故曰"贾雨村"云云。 此回中凡用"梦"用"幻"等字,是提醒阅者眼目,亦是此书立意本旨。 列位看官:你道此书从何而来?说起根由虽近荒唐,细按则深有趣味。待在下将此来历注明,方使阅者了然不惑。 原来女娲氏炼石补天之时,于大荒山无稽崖练成高经十二丈,方经二十四丈顽石三万六千五百零一块。 娲皇氏只用了三万六千五百块,只单单剩了一块未用,便弃在此山青埂峰下。谁知此石自经煅炼之后,灵性已通,因见众石俱得补天,独自己无材不堪入选,遂自怨自叹,日夜悲号惭愧。 一日, 正当嗟悼之际,俄见一僧一道远远而来,生得骨格不凡,丰神迥异,说说笑笑来至峰下, 坐于石边高谈快论。先是说些云山雾海神仙玄幻之事,后便说到红尘中荣华富贵。此石听了,不觉打动凡心,也想要到人间去享一享这荣华富贵,但自恨粗蠢,不得已,便口吐人言,向那僧道说道:"大师,弟子蠢物,不能见礼了。适闻二位谈那人世间荣耀繁华,心切慕之。弟子质虽粗蠢,性却稍通,况见二师仙形道体,定非凡品,必有补天济世之材,利物济人之德。如蒙发一点慈心,携带弟子得入红尘,在那富贵场中, 温柔乡里受享几年,自当永佩洪恩,万劫不忘也。"二仙师听毕,齐憨笑道:"善哉,善哉!那红尘中有却有些乐事,但不能永远依恃,况又有`美中不足,好事多魔八个字紧相连属, 瞬息间则又乐极悲生,人非物换,究竟是到头一梦,万境归空,倒不如不去的好。"这石凡心已炽,那里听得进这话去,乃复苦求再四。二仙知不可强制,乃叹道:"此亦静极怂级?无中生有之数也。既如此,我们便携你去受享受享,只是到不得意时,切莫后悔。 "石道:"自然,自然。"那僧又道:"若说你性灵,却又如此质蠢,并更无奇贵之处。如此也只好踮脚而已。也罢,我如今大施佛法助你助,待劫终之日,复还本质,以了此案。 你道好否?"石头听了,感谢不尽。那僧便念咒书符,大展幻术,将一块大石登时变成一块鲜明莹洁的美玉, 且又缩成扇坠大小的可佩可拿。那僧托于掌上', 'poster': 'http://ww4.sinaimg.cn/large/659dc7b4jw1e96tf7pynej20u00gvwii.jpg', 'weight': 20, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '昨天 12:23'},
    {'type': 'answer', 'from': '小明', 'to': '如何快速复习C++', 'desc': ' 甄士隐梦幻识通灵 贾雨村风尘怀闺秀 此开卷第一回也。作者自云:因曾历过一番梦幻之后,故将真事隐去,而借"通灵"之说,撰此<<石头记>>一书也。故曰"甄士隐"云云。但书中所记何事何人?自又云:"今风尘碌碌, 一事无成,忽念及当日所有之女子,一一细考较去,觉其行止见识,皆出于我之上。何我堂堂须眉,诚不若彼裙钗哉?实愧则有余,悔又无益之大无可如何之日也!当此,则自欲将已往所赖天恩祖德,锦衣纨э之时,饫甘餍肥之日,背父兄教育之恩,负师友规谈之德, 以至今日一技无成,半生潦倒之罪,编述一集,以告天下人:我之罪固不免, 然闺阁中本自历历有人,万不可因我之不肖,自护己短,一并使其泯灭也。虽今日之茅椽蓬牖, 瓦灶绳床,其晨夕风露,阶柳庭花,亦未有妨我之襟怀笔墨者。虽我未学, 下笔无文,又何妨用假语村言,敷演出一段故事来,亦可使闺阁昭传,复可悦世之目,破人愁闷,不亦宜乎?"故曰"贾雨村"云云。 此回中凡用"梦"用"幻"等字,是提醒阅者眼目,亦是此书立意本旨。 列位看官:你道此书从何而来?说起根由虽近荒唐,细按则深有趣味。待在下将此来历注明,方使阅者了然不惑。 原来女娲氏炼石补天之时,于大荒山无稽崖练成高经十二丈,方经二十四丈顽石三万六千五百零一块。 娲皇氏只用了三万六千五百块,只单单剩了一块未用,便弃在此山青埂峰下。谁知此石自经煅炼之后,灵性已通,因见众石俱得补天,独自己无材不堪入选,遂自怨自叹,日夜悲号惭愧。 一日, 正当嗟悼之际,俄见一僧一道远远而来,生得骨格不凡,丰神迥异,说说笑笑来至峰下, 坐于石边高谈快论。先是说些云山雾海神仙玄幻之事,后便说到红尘中荣华富贵。此石听了,不觉打动凡心,也想要到人间去享一享这荣华富贵,但自恨粗蠢,不得已,便口吐人言,向那僧道说道:"大师,弟子蠢物,不能见礼了。适闻二位谈那人世间荣耀繁华,心切慕之。弟子质虽粗蠢,性却稍通,况见二师仙形道体,定非凡品,必有补天济世之材,利物济人之德。如蒙发一点慈心,携带弟子得入红尘,在那富贵场中, 温柔乡里受享几年,自当永佩洪恩,万劫不忘也。"二仙师听毕,齐憨笑道:"善哉,善哉!那红尘中有却有些乐事,但不能永远依恃,况又有`美中不足,好事多魔八个字紧相连属, 瞬息间则又乐极悲生,人非物换,究竟是到头一梦,万境归空,倒不如不去的好。"这石凡心已炽,那里听得进这话去,乃复苦求再四。二仙知不可强制,乃叹道:"此亦静极怂级?无中生有之数也。既如此,我们便携你去受享受享,只是到不得意时,切莫后悔。 "石道:"自然,自然。"那僧又道:"若说你性灵,却又如此质蠢,并更无奇贵之处。如此也只好踮脚而已。也罢,我如今大施佛法助你助,待劫终之日,复还本质,以了此案。 你道好否?"石头听了,感谢不尽。那僧便念咒书符,大展幻术,将一块大石登时变成一块鲜明莹洁的美玉, 且又缩成扇坠大小的可佩可拿。那僧托于掌上', 'poster': 'http://ww4.sinaimg.cn/large/659dc7b4jw1e96tf7pynej20u00gvwii.jpg', 'weight': 20, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '昨天 12:23'},
    {'type': 'answer', 'from': '小明', 'to': '如何快速复习C++', 'desc': ' 甄士隐梦幻识通灵 贾雨村风尘怀闺秀 此开卷第一回也。作者自云:因曾历过一番梦幻之后,故将真事隐去,而借"通灵"之说,撰此<<石头记>>一书也。故曰"甄士隐"云云。但书中所记何事何人?自又云:"今风尘碌碌, 一事无成,忽念及当日所有之女子,一一细考较去,觉其行止见识,皆出于我之上。何我堂堂须眉,诚不若彼裙钗哉?实愧则有余,悔又无益之大无可如何之日也!当此,则自欲将已往所赖天恩祖德,锦衣纨э之时,饫甘餍肥之日,背父兄教育之恩,负师友规谈之德, 以至今日一技无成,半生潦倒之罪,编述一集,以告天下人:我之罪固不免, 然闺阁中本自历历有人,万不可因我之不肖,自护己短,一并使其泯灭也。虽今日之茅椽蓬牖, 瓦灶绳床,其晨夕风露,阶柳庭花,亦未有妨我之襟怀笔墨者。虽我未学, 下笔无文,又何妨用假语村言,敷演出一段故事来,亦可使闺阁昭传,复可悦世之目,破人愁闷,不亦宜乎?"故曰"贾雨村"云云。 此回中凡用"梦"用"幻"等字,是提醒阅者眼目,亦是此书立意本旨。 列位看官:你道此书从何而来?说起根由虽近荒唐,细按则深有趣味。待在下将此来历注明,方使阅者了然不惑。 原来女娲氏炼石补天之时,于大荒山无稽崖练成高经十二丈,方经二十四丈顽石三万六千五百零一块。 娲皇氏只用了三万六千五百块,只单单剩了一块未用,便弃在此山青埂峰下。谁知此石自经煅炼之后,灵性已通,因见众石俱得补天,独自己无材不堪入选,遂自怨自叹,日夜悲号惭愧。 一日, 正当嗟悼之际,俄见一僧一道远远而来,生得骨格不凡,丰神迥异,说说笑笑来至峰下, 坐于石边高谈快论。先是说些云山雾海神仙玄幻之事,后便说到红尘中荣华富贵。此石听了,不觉打动凡心,也想要到人间去享一享这荣华富贵,但自恨粗蠢,不得已,便口吐人言,向那僧道说道:"大师,弟子蠢物,不能见礼了。适闻二位谈那人世间荣耀繁华,心切慕之。弟子质虽粗蠢,性却稍通,况见二师仙形道体,定非凡品,必有补天济世之材,利物济人之德。如蒙发一点慈心,携带弟子得入红尘,在那富贵场中, 温柔乡里受享几年,自当永佩洪恩,万劫不忘也。"二仙师听毕,齐憨笑道:"善哉,善哉!那红尘中有却有些乐事,但不能永远依恃,况又有`美中不足,好事多魔八个字紧相连属, 瞬息间则又乐极悲生,人非物换,究竟是到头一梦,万境归空,倒不如不去的好。"这石凡心已炽,那里听得进这话去,乃复苦求再四。二仙知不可强制,乃叹道:"此亦静极怂级?无中生有之数也。既如此,我们便携你去受享受享,只是到不得意时,切莫后悔。 "石道:"自然,自然。"那僧又道:"若说你性灵,却又如此质蠢,并更无奇贵之处。如此也只好踮脚而已。也罢,我如今大施佛法助你助,待劫终之日,复还本质,以了此案。 你道好否?"石头听了,感谢不尽。那僧便念咒书符,大展幻术,将一块大石登时变成一块鲜明莹洁的美玉, 且又缩成扇坠大小的可佩可拿。那僧托于掌上', 'poster': 'http://ww4.sinaimg.cn/large/659dc7b4jw1e96tf7pynej20u00gvwii.jpg', 'weight': 20, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '昨天 12:23'},
    {'type': 'answer', 'from': '小明', 'to': '如何快速复习C++', 'desc': ' 甄士隐梦幻识通灵 贾雨村风尘怀闺秀 此开卷第一回也。作者自云:因曾历过一番梦幻之后,故将真事隐去,而借"通灵"之说,撰此<<石头记>>一书也。故曰"甄士隐"云云。但书中所记何事何人?自又云:"今风尘碌碌, 一事无成,忽念及当日所有之女子,一一细考较去,觉其行止见识,皆出于我之上。何我堂堂须眉,诚不若彼裙钗哉?实愧则有余,悔又无益之大无可如何之日也!当此,则自欲将已往所赖天恩祖德,锦衣纨э之时,饫甘餍肥之日,背父兄教育之恩,负师友规谈之德, 以至今日一技无成,半生潦倒之罪,编述一集,以告天下人:我之罪固不免, 然闺阁中本自历历有人,万不可因我之不肖,自护己短,一并使其泯灭也。虽今日之茅椽蓬牖, 瓦灶绳床,其晨夕风露,阶柳庭花,亦未有妨我之襟怀笔墨者。虽我未学, 下笔无文,又何妨用假语村言,敷演出一段故事来,亦可使闺阁昭传,复可悦世之目,破人愁闷,不亦宜乎?"故曰"贾雨村"云云。 此回中凡用"梦"用"幻"等字,是提醒阅者眼目,亦是此书立意本旨。 列位看官:你道此书从何而来?说起根由虽近荒唐,细按则深有趣味。待在下将此来历注明,方使阅者了然不惑。 原来女娲氏炼石补天之时,于大荒山无稽崖练成高经十二丈,方经二十四丈顽石三万六千五百零一块。 娲皇氏只用了三万六千五百块,只单单剩了一块未用,便弃在此山青埂峰下。谁知此石自经煅炼之后,灵性已通,因见众石俱得补天,独自己无材不堪入选,遂自怨自叹,日夜悲号惭愧。 一日, 正当嗟悼之际,俄见一僧一道远远而来,生得骨格不凡,丰神迥异,说说笑笑来至峰下, 坐于石边高谈快论。先是说些云山雾海神仙玄幻之事,后便说到红尘中荣华富贵。此石听了,不觉打动凡心,也想要到人间去享一享这荣华富贵,但自恨粗蠢,不得已,便口吐人言,向那僧道说道:"大师,弟子蠢物,不能见礼了。适闻二位谈那人世间荣耀繁华,心切慕之。弟子质虽粗蠢,性却稍通,况见二师仙形道体,定非凡品,必有补天济世之材,利物济人之德。如蒙发一点慈心,携带弟子得入红尘,在那富贵场中, 温柔乡里受享几年,自当永佩洪恩,万劫不忘也。"二仙师听毕,齐憨笑道:"善哉,善哉!那红尘中有却有些乐事,但不能永远依恃,况又有`美中不足,好事多魔八个字紧相连属, 瞬息间则又乐极悲生,人非物换,究竟是到头一梦,万境归空,倒不如不去的好。"这石凡心已炽,那里听得进这话去,乃复苦求再四。二仙知不可强制,乃叹道:"此亦静极怂级?无中生有之数也。既如此,我们便携你去受享受享,只是到不得意时,切莫后悔。 "石道:"自然,自然。"那僧又道:"若说你性灵,却又如此质蠢,并更无奇贵之处。如此也只好踮脚而已。也罢,我如今大施佛法助你助,待劫终之日,复还本质,以了此案。 你道好否?"石头听了,感谢不尽。那僧便念咒书符,大展幻术,将一块大石登时变成一块鲜明莹洁的美玉, 且又缩成扇坠大小的可佩可拿。那僧托于掌上', 'poster': 'http://ww4.sinaimg.cn/large/659dc7b4jw1e96tf7pynej20u00gvwii.jpg', 'weight': 20, 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '昨天 12:23'},
  ];
});
