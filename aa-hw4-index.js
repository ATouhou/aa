function hw4_get_img_url ( page) {
	if ( page < 1) page = 1;
	if ( page > hw4.length - 1) page = hw4.length - 1;
	cur_hw4_page = page;
	var p = page;
	var prefixed_page = p;
	if ( p < 10) prefixed_page = "0" + p;
	if ( p < 100) prefixed_page = "00" + p;
	else if ( p < 1000) prefixed_page = "0" + p;
	return "hw4/" + Math.floor(page/100) + "/hw4-" + prefixed_page + ".png";
}

var hw4=[];

hw4[0]=""
hw4[1]=""
hw4[2]=""
hw4[3]=""
hw4[4]=""
hw4[5]=""
hw4[6]=""
hw4[7]=""
hw4[8]=""
hw4[9]=""
hw4[10]=""
hw4[11]=""
hw4[12]=""
hw4[13]=""
hw4[14]="ابر"
hw4[15]="ابو"
hw4[16]="اتي"
hw4[17]="اثر"
hw4[18]="اثل"
hw4[19]="اجر"
hw4[20]="احد"
hw4[21]="اخذ"
hw4[22]="اخر"
hw4[23]="اخر"
hw4[24]="ادب"
hw4[25]="ادي"
hw4[26]="اذن"
hw4[27]="ارب"
hw4[28]="ارس"
hw4[29]="ارم"
hw4[30]="ازم"
hw4[31]="است"
hw4[32]="اسر"
hw4[33]="اسف"
hw4[34]="اسو"
hw4[35]="اصل"
hw4[36]="اصل"
hw4[37]="اف"
hw4[38]="اقر"
hw4[39]="اقط"
hw4[40]="الا"
hw4[41]="الف"
hw4[42]="الم"
hw4[43]="الي"
hw4[44]="ام"
hw4[45]="امث"
hw4[46]="امر"
hw4[47]="امريكا"
hw4[48]="امن"
hw4[49]="امنيبوس"
hw4[50]="انت"
hw4[51]="انت"
hw4[52]="انق"
hw4[53]="اه"
hw4[54]="اهل"
hw4[55]="اوح"
hw4[56]="اوق"
hw4[57]="اول"
hw4[58]="اون"
hw4[59]="اي"
hw4[60]="ايل"
hw4[61]="ب"
hw4[62]=" بار"
hw4[63]="بالرينا"
hw4[64]="بتر"
hw4[65]="بجس"
hw4[66]="بحثر"
hw4[67]="بختر"
hw4[68]="بد"
hw4[69]="بدر"
hw4[70]="بدع"
hw4[71]="بدل"
hw4[72]="بدو"
hw4[73]="بذل"
hw4[74]="برأ"
hw4[75]="بربر"
hw4[76]="برح"
hw4[77]="بردورة"
hw4[78]="برشم"
hw4[79]="برق"
hw4[80]="برك"
hw4[81]="برنامج"
hw4[82]="بري"
hw4[83]="بزق"
hw4[84]="بسط"
hw4[85]="بسكليت"
hw4[86]="بشر"
hw4[87]="بشنين"
hw4[88]="بصر"
hw4[89]="بطا"
hw4[90]="بطق"
hw4[91]="بطن"
hw4[92]="بعث"
hw4[93]="بعد"
hw4[94]="بعد"
hw4[95]="بغدد"
hw4[96]="بقر"
hw4[97]="بقي"
hw4[98]="بكر"
hw4[99]="بل"
hw4[100]="بلد"
hw4[101]="بلطي"
hw4[102]="بلغ"
hw4[103]="بلم"
hw4[104]="بلو"
hw4[105]="بن"
hw4[106]="بند"
hw4[107]="بني"
hw4[108]="بهج"
hw4[109]="بهق"
hw4[110]="بوء"
hw4[111]="بوح"
hw4[112]="بور"
hw4[113]="بوق"
hw4[114]="بول"
hw4[115]="بيت"
hw4[116]="بيض"
hw4[117]="بيض"
hw4[118]="بين"
hw4[119]="بين"
hw4[120]="تأتأ"
hw4[121]="تبع"
hw4[122]="تبع"
hw4[123]="تجر"
hw4[124]="تخم"
hw4[125]="ترس"
hw4[126]="ترك"
hw4[127]="تف"
hw4[128]="تك"
hw4[129]="تلف"
hw4[130]="تم"
hw4[131]="تنك"
hw4[132]="توق"
hw4[133]="تين"
hw4[134]="ثبت"
hw4[135]="ثبت"
hw4[136]="ثرو"
hw4[137]="ثقب"
hw4[138]="ثقل"
hw4[139]="ثلث"
hw4[140]="ثمر"
hw4[141]="ثني"
hw4[142]="ثني"
hw4[143]="ثور"
hw4[144]="جاش"
hw4[145]="جبر"
hw4[146]="جبن"
hw4[147]="جحد"
hw4[148]="جد"
hw4[149]="جدر"
hw4[150]="جدو"
hw4[151]="جذر"
hw4[152]="جر"
hw4[153]="جرب"
hw4[154]="جرح"
hw4[155]="جرذ"
hw4[156]="جرم"
hw4[157]="جري"
hw4[158]="جري"
hw4[159]="جزر"
hw4[160]="جزم"
hw4[161]="جسد"
hw4[162]="جسم"
hw4[163]="جعر"
hw4[164]="جفر"
hw4[165]="جل"
hw4[166]="جلب"
hw4[167]="جلس"
hw4[168]="جلف"
hw4[169]="جلو"
hw4[170]="جمح"
hw4[171]="جمر"
hw4[172]="جمع"
hw4[173]="جمع"
hw4[174]="جمع"
hw4[175]="جمل"
hw4[176]="جمهر"
hw4[177]="جنب"
hw4[178]="جنب"
hw4[179]="جند"
hw4[180]="جنس"
hw4[181]="جهد"
hw4[182]="جهز"
hw4[183]="جهل"
hw4[184]="جوب"
hw4[185]="جود"
hw4[186]="جور"
hw4[187]="جوز"
hw4[188]="جوف"
hw4[189]="جول"
hw4[190]="جيب"
hw4[191]="حام"
hw4[192]="حب"
hw4[193]="حبس"
hw4[194]="حبط"
hw4[195]="حت"
hw4[196]="حج"
hw4[197]="حجب"
hw4[198]="حجز"
hw4[199]="حجن"
hw4[200]="حد"
hw4[201]="حد"
hw4[202]="حدث"
hw4[203]="حدث"
hw4[204]="حدق"
hw4[205]="حذر"
hw4[206]="حر"
hw4[207]="حرب"
hw4[208]="حرج"
hw4[209]="حرس"
hw4[210]="حرص"
hw4[211]="حرف"
hw4[212]="حرق"
hw4[213]="حرك"
hw4[214]="حرم"
hw4[215]="حري"
hw4[216]="حزم"
hw4[217]="حس"
hw4[218]="حسب"
hw4[219]="حسب"
hw4[220]="حسم"
hw4[221]="حسن"
hw4[222]="حش"
hw4[223]="حشو"
hw4[224]="حصد"
hw4[225]="حصر"
hw4[226]="حصل"
hw4[227]="حضر"
hw4[228]="حضر"
hw4[229]="حضن"
hw4[230]="حطب"
hw4[231]="حظر"
hw4[232]="حفر"
hw4[233]="حفظ"
hw4[234]="حفظ"
hw4[235]="حفل"
hw4[236]="حق"
hw4[237]="حق"
hw4[238]="حق"
hw4[239]="حقل"
hw4[240]="حكر"
hw4[241]="حكم"
hw4[242]="حكم"
hw4[243]="حكم"
hw4[244]="حل"
hw4[245]="حل"
hw4[246]="حل"
hw4[247]="حلس"
hw4[248]="حلق"
hw4[249]="حلو"
hw4[250]="حم"
hw4[251]="حمد"
hw4[252]="حمش"
hw4[253]="حمل"
hw4[254]="حمل"
hw4[255]="حملق"
hw4[256]="حمي"
hw4[257]="حنش"
hw4[258]="حنو"
hw4[259]="حوج"
hw4[260]="حور"
hw4[261]="حوز"
hw4[262]="حوط"
hw4[263]="حوط"
hw4[264]="حول"
hw4[265]="حول"
hw4[266]="حول"
hw4[267]="حول"
hw4[268]="حوي"
hw4[269]="حي"
hw4[270]="حيث"
hw4[271]="حير"
hw4[272]="حين"
hw4[273]="خاكي"
hw4[274]="خبر"
hw4[275]="خبر"
hw4[276]="خبل"
hw4[277]="ختم"
hw4[278]="خدج"
hw4[279]="خدع"
hw4[280]="خدم"
hw4[281]="خرب"
hw4[282]="خرج"
hw4[283]="خرج"
hw4[284]="خرج"
hw4[285]="خرط"
hw4[286]="خرق"
hw4[287]="خرم"
hw4[288]="خزن"
hw4[289]="خزي"
hw4[290]="خسف"
hw4[291]="خشن"
hw4[292]="خص"
hw4[293]="خص"
hw4[294]="خصف"
hw4[295]="خضر"
hw4[296]="خط"
hw4[297]="خط"
hw4[298]="خطب"
hw4[299]="خطر"
hw4[300]="خطف"
hw4[301]="خف"
hw4[302]="خفت"
hw4[303]="خفض"
hw4[304]="خفي"
hw4[305]="خل"
hw4[306]="خلج"
hw4[307]="خلص"
hw4[308]="خلص"
hw4[309]="خلع"
hw4[310]="خلف"
hw4[311]="خلف"
hw4[312]="خلق"
hw4[313]="خلو"
hw4[314]="خلو"
hw4[315]="خمر"
hw4[316]="خمل"
hw4[317]="خنع"
hw4[318]="خوخ"
hw4[319]="خوف"
hw4[320]="خوي"
hw4[321]="خير"
hw4[322]="خيل"
hw4[323]="خيم"
hw4[324]="دب"
hw4[325]="دبر"
hw4[326]="دثر"
hw4[327]="دحر"
hw4[328]="دخل"
hw4[329]="دخل"
hw4[330]="در"
hw4[331]="درب"
hw4[332]="درج"
hw4[333]="درز"
hw4[334]="درس"
hw4[335]="درك"
hw4[336]="دري"
hw4[337]="دسم"
hw4[338]="دعس"
hw4[339]="دعو"
hw4[340]="دعو"
hw4[341]="دفا"
hw4[342]="دفع"
hw4[343]="دفع"
hw4[344]="دق"
hw4[345]="دق"
hw4[346]="دل"
hw4[347]="دل"
hw4[348]="دله"
hw4[349]="دمث"
hw4[350]="دمس"
hw4[351]="دمن"
hw4[352]="دنقف"
hw4[353]="دنو"
hw4[354]="دهك"
hw4[355]="دهي"
hw4[356]="دور"
hw4[357]="دور"
hw4[358]="دور"
hw4[359]="دور"
hw4[360]="دور"
hw4[361]="دول"
hw4[362]="دول"
hw4[363]="دون"
hw4[364]="دوي"
hw4[365]="دين"
hw4[366]="دين"
hw4[367]="ذب"
hw4[368]="ذخر"
hw4[369]="ذرع"
hw4[370]="ذقن"
hw4[371]="ذكر"
hw4[372]="ذل"
hw4[373]="ذم"
hw4[374]="ذهب"
hw4[375]="ذهل"
hw4[376]="ذو"
hw4[377]="ذوق"
hw4[378]="ذيع"
hw4[379]="راب"
hw4[380]="راس"
hw4[381]="راي"
hw4[382]="راي"
hw4[383]="رب"
hw4[384]="ربض"
hw4[385]="ربط"
hw4[386]="ربع"
hw4[387]="ربو"
hw4[388]="رتب"
hw4[389]="رثم"
hw4[390]="رجح"
hw4[391]="رجع"
hw4[392]="رجع"
hw4[393]="رجل"
hw4[394]="رجو"
hw4[395]="رحب"
hw4[396]="رحل"
hw4[397]="رخص"
hw4[398]="رخو"
hw4[399]="رد"
hw4[400]="ردع"
hw4[401]="ردي"
hw4[402]="رزق"
hw4[403]="رسخ"
hw4[404]="رسل"
hw4[405]="رسم"
hw4[406]="رسو"
hw4[407]="رشح"
hw4[408]="رشد"
hw4[409]="رصد"
hw4[410]="رصن"
hw4[411]="رضي"
hw4[412]="رطم"
hw4[413]="رعن"
hw4[414]="رعي"
hw4[415]="رغم"
hw4[416]="رفد"
hw4[417]="رفع"
hw4[418]="رفع"
hw4[419]="رفق"
hw4[420]="رفه"
hw4[421]="رقب"
hw4[422]="رقد"
hw4[423]="رقع"
hw4[424]="رقي"
hw4[425]="ركب"
hw4[426]="ركب"
hw4[427]="ركز"
hw4[428]="ركم"
hw4[429]="رمد"
hw4[430]="رمق"
hw4[431]="رمي"
hw4[432]="رنو"
hw4[433]="رهق"
hw4[434]="رهو"
hw4[435]="روح"
hw4[436]="روح"
hw4[437]="روح"
hw4[438]="رود"
hw4[439]="روع"
hw4[440]="روق"
hw4[441]="روي"
hw4[442]="ريب"
hw4[443]="ريع"
hw4[444]="رين"
hw4[445]="زبط"
hw4[446]="زجر"
// TODO page labeled 434 (447) missing
hw4[447]="زجر"
// TODO   ^^^
hw4[448]="زرب"
hw4[449]="زرع"
hw4[450]="زري"
hw4[451]="زعل"
hw4[452]="زف"
hw4[453]="زكرة"
hw4[454]="زلج"
hw4[455]="زم"
hw4[456]="زمل"
hw4[457]="زنا"
hw4[458]="زهد"
hw4[459]="زهق"
hw4[460]="زور"
hw4[461]="زول"
hw4[462]="زوي"
hw4[463]="زيد"
hw4[464]="زيد"
hw4[465]="زيل"
hw4[466]="سار"
hw4[467]="ساندويتش"
hw4[468]="سبا"
hw4[469]="سبخ"
hw4[470]="سبع"
hw4[471]="سبق"
hw4[472]="سبك"
hw4[473]="ست"
hw4[474]="سجد"
hw4[475]="سجل"
hw4[476]="سحب"
hw4[477]="سحر"
hw4[478]="سحن"
hw4[479]="سخف"
hw4[480]="سد"
hw4[481]="سدر"
hw4[482]="سدو"
hw4[483]="سر"
hw4[484]="سرج"
hw4[485]="سرد"
hw4[486]="سرع"
hw4[487]="سرمد"
hw4[488]="سري"
hw4[489]="سطع"
hw4[490]="سعد"
hw4[491]="سعف"
hw4[492]="سفح"
hw4[493]="سفع"
hw4[494]="سفه"
hw4[495]="سقط"
hw4[496]="سقف"
hw4[497]="سك"
hw4[498]="سكر"
hw4[499]="سكن"
hw4[500]="سكن"
hw4[501]="سلا"
hw4[502]="سلح"
hw4[503]="سلس"
hw4[504]="سلط"
hw4[505]="سلف"
hw4[506]="سلك"
hw4[507]="سلم"
hw4[508]="سلم"
hw4[509]="سلو"
hw4[510]="سم"
hw4[511]="سمح"
hw4[512]="سمر"
hw4[513]="سمع"
hw4[514]="سمق"
hw4[515]="سمن"
hw4[516]="سمي"
hw4[517]="سن"
hw4[518]="سنخ"
hw4[519]="سند"
hw4[520]="سنم"
hw4[521]="سهر"
hw4[522]="سهم"
hw4[523]="سوء"
hw4[524]="سوج"
hw4[525]="سود"
hw4[526]="سوس"
hw4[527]="سوغ"
hw4[528]="سوق"
hw4[529]="سوك"
hw4[530]="سوي"
hw4[531]="سوي"
hw4[532]="سيح"
hw4[533]="سير"
hw4[534]="سيرك"
hw4[535]="سيل"
hw4[536]="سين"
hw4[537]="شان"
hw4[538]="شاو"
hw4[539]="شبر"
hw4[540]="شبك"
hw4[541]="شبل"
hw4[542]="شبه"
hw4[543]="شتم"
hw4[544]="شجع"
hw4[545]="شح"
hw4[546]="شحن"
hw4[547]="شخص"
hw4[548]="شد"
hw4[549]="شد"
hw4[550]="شذ"
hw4[551]="شر"
hw4[552]="شرب"
hw4[553]="شرد"
hw4[554]="شرش"
hw4[555]="شرط"
hw4[556]="شرع"
hw4[557]="شرف"
hw4[558]="شرق"
hw4[559]="شرك"
hw4[560]="شره"
hw4[561]="ششم"
hw4[562]="شطر"
hw4[563]="شع"
hw4[564]="شعب"
hw4[565]="شعر"
hw4[566]="شعل"
hw4[567]="شغف"
hw4[568]="شغل"
hw4[569]="شف"
hw4[570]="شفع"
hw4[571]="شفي"
hw4[572]="شق"
hw4[573]="شقح"
hw4[574]="شك"
hw4[575]="شكل"
hw4[576]="شكل"
hw4[577]="شل"
hw4[578]="شم"
hw4[579]="شمس"
hw4[580]="شمل"
hw4[581]="شنج"
hw4[582]="شهب"
hw4[583]="شهد"
hw4[584]="شهر"
hw4[585]="شهو"
hw4[586]="شور"
hw4[587]="شور"
hw4[588]="شوف"
hw4[589]="شول"
hw4[590]="شوي"
hw4[591]="شيب"
hw4[592]="شيد"
hw4[593]="شيع"
hw4[594]="شين"
hw4[595]="صب"
hw4[596]="صبح"
hw4[597]="صبر"
hw4[598]="صبو"
hw4[599]="صح"
hw4[600]="صحب"
hw4[601]="صحف"
hw4[602]="صد"
hw4[603]="صدر"
hw4[604]="صدر"
hw4[605]="صدف"
hw4[606]="صدق"
hw4[607]="صر"
hw4[608]="صرخ"
hw4[609]="صرع"
hw4[610]="صرف"
hw4[611]="صرف"
hw4[612]="صعد"
hw4[613]="صعق"
hw4[614]="صغر"
hw4[615]="صفح"
hw4[616]="صفر"
hw4[617]="صفن"
hw4[618]="صفو"
hw4[619]="صقل"
hw4[620]="صلب"
hw4[621]="صلح"
hw4[622]="صلح"
hw4[623]="صلو"
hw4[624]="صم"
hw4[625]="صمل"
hw4[626]="صنع"
hw4[627]="صنع"
hw4[628]="صهل"
hw4[629]="صوب"
hw4[630]="صوح"
hw4[631]="صور"
hw4[632]="صوف"
hw4[633]="صون"
hw4[634]="صيد"
hw4[635]="صيف"
hw4[636]="ضبط"
hw4[637]="ضجر"
hw4[638]="ضحك"
hw4[639]="ضخم"
hw4[640]="ضر"
hw4[641]="ضرب"
hw4[642]="ضرب"
hw4[643]="ضرب"
hw4[644]="ضرو"
hw4[645]="ضعف"
hw4[646]="ضفر"
hw4[647]="ضلع"
hw4[648]="ضمد"
hw4[649]="ضمن"
hw4[650]="ضهد"
hw4[651]="ضوي"
hw4[652]="ضيف"
hw4[653]="ضيق"
hw4[654]="طاب"
hw4[655]="طب"
hw4[656]="طبع"
hw4[657]="طبق"
hw4[658]="طبق"
hw4[659]="طحل"
hw4[660]="طرا"
hw4[661]="طرح"
hw4[662]="طرد"
hw4[663]="طرش"
hw4[664]="طرف"
hw4[665]="طرق"
hw4[666]="طرو"
hw4[667]="طعن"
hw4[668]="طفا"
hw4[669]="طفل"
hw4[670]="طل"
hw4[671]="طلب"
hw4[672]="طلع"
hw4[673]="طلع"
hw4[674]="طلق"
hw4[675]="طلق"
hw4[676]="طم"
hw4[677]="طمس"
hw4[678]="طن"
hw4[679]="طهر"
hw4[680]="طوح"
hw4[681]="طوع"
hw4[682]="طوع"
hw4[683]="طوف"
hw4[684]="طوق"
hw4[685]="طول"
hw4[686]="طوي"
hw4[687]="طوي"
hw4[688]="طير"
hw4[689]="طير"
hw4[690]="طين"
hw4[691]="ظفر"
hw4[692]="ظل"
hw4[693]="ظن"
hw4[694]="ظهر"
hw4[695]="ظهر"
hw4[696]="عبا"
hw4[697]="عبد"
hw4[698]="عبر"
hw4[699]="عبر"
hw4[700]="عتب"
hw4[701]="عتم"
hw4[702]="عثو"
hw4[703]="عجب"
hw4[704]="عجل"
hw4[705]="عجم"
hw4[706]="عد"
hw4[707]="عد"
hw4[708]="عدل"
hw4[709]="عدل"
hw4[710]="عدم"
hw4[711]="عدو"
hw4[712]="عدو"
hw4[713]="عذر"
hw4[714]="عرب"
hw4[715]="عربس"
hw4[716]="عرش"
hw4[717]="عرض"
hw4[718]="عرض"
hw4[719]="عرض"
hw4[720]="عرف"
hw4[721]="عرف"
hw4[722]="عرق"
hw4[723]="عرم"
hw4[724]="عز"
hw4[725]="عزر"
hw4[726]="عزل"
hw4[727]="عزو"
hw4[728]="عسف"
hw4[729]="عش"
hw4[730]="عشر"
hw4[731]="عشو"
hw4[732]="عصر"
hw4[733]="عصف"
hw4[734]="عصو"
hw4[735]="عض"
hw4[736]="عضو"
hw4[737]="عطف"
hw4[738]="عطف"
hw4[739]="عطل"
hw4[740]="عظل"
hw4[741]="عظم"
hw4[742]="عفر"
hw4[743]="عفو"
hw4[744]="عقب"
hw4[745]="عقب"
hw4[746]="عقد"
hw4[747]="عقد"
hw4[748]="عقف"
hw4[749]="عقل"
hw4[750]="عكر"
hw4[751]="عكف"
hw4[752]="عل"
hw4[753]="علق"
hw4[754]="علق"
hw4[755]="علم"
hw4[756]="علم"
hw4[757]="علم"
hw4[758]="علو"
hw4[759]="علي"
hw4[760]="علي"
hw4[761]="علي"
hw4[762]="عم"
hw4[763]="عمد"
hw4[764]="عمد"
hw4[765]="عمر"
hw4[766]="عمل"
hw4[767]="عمل"
hw4[768]="عمل"
hw4[769]="عمي"
hw4[770]="عن"
hw4[771]="عند"
hw4[772]="عنصل"
hw4[773]="عنو"
hw4[774]="عني"
hw4[775]="عهد"
hw4[776]="عهر"
hw4[777]="عود"
hw4[778]="عود"
hw4[779]="عود"
hw4[780]="عور"
hw4[781]="عوص"
hw4[782]="عول"
hw4[783]="عون"
hw4[784]="عوه"
hw4[785]="عيب"
hw4[786]="عير"
hw4[787]="عيف"
hw4[788]="عين"
hw4[789]="غاز"
hw4[790]="غبش"
hw4[791]="غثي"
hw4[792]="غدو"
hw4[793]="غر"
hw4[794]="غرب"
hw4[795]="غرب"
hw4[796]="غرس"
hw4[797]="غرف"
hw4[798]="غرم"
hw4[799]="غزل"
hw4[800]="غسل"
hw4[801]="غشم"
hw4[802]="غصب"
hw4[803]="غضب"
hw4[804]="غطرس"
hw4[805]="غفر"
hw4[806]="غفل"
hw4[807]="غل"
hw4[808]="غلب"
hw4[809]="غلغل"
hw4[810]="غلم"
hw4[811]="غم"
hw4[812]="غمر"
hw4[813]="غمض"
hw4[814]="غنم"
hw4[815]="غني"
hw4[816]="غور"
hw4[817]="غول"
hw4[818]="غيب"
hw4[819]="غير"
hw4[820]="غيض"
hw4[821]="فاة"
hw4[822]="فال"
hw4[823]="فتح"
hw4[824]="فتح"
hw4[825]="فتفت"
hw4[826]="فتل"
hw4[827]="فتو"
hw4[828]="فجر"
hw4[829]="فحش"
hw4[830]="فحم"
hw4[831]="فخر"
hw4[832]="فدي"
hw4[833]="فرا"
hw4[834]="فرح"
hw4[835]="فرد"
hw4[836]="فرزن"
hw4[837]="فرش"
hw4[838]="فرض"
hw4[839]="فرع"
hw4[840]="فرغ"
hw4[841]="فرق"
hw4[842]="فرق"
hw4[843]="فرم"
hw4[844]="فري"
hw4[845]="فسح"
hw4[846]="فسد"
hw4[847]="فسل"
hw4[848]="فص"
hw4[849]="فصل"
hw4[850]="فصل"
hw4[851]="فضح"
hw4[852]="فضل"
hw4[853]="فضل"
hw4[854]="فطر"
hw4[855]="فظع"
hw4[856]="فعل"
hw4[857]="فقد"
hw4[858]="فقع"
hw4[859]="فك"
hw4[860]="فكه"
hw4[861]="فلت"
hw4[862]="فلسف"
hw4[863]="فلك"
hw4[864]="فن"
hw4[865]="فنط"
hw4[866]="فهم"
hw4[867]="فوت"
hw4[868]="فود"
hw4[869]="فوض"
hw4[870]="فوق"
hw4[871]="في"
hw4[872]="فيد"
hw4[873]="فيض"
hw4[874]="فينا"
hw4[875]="قانون"
hw4[876]="قبر"
hw4[877]="قبض"
hw4[878]="قبل"
hw4[879]="قبل"
hw4[880]="قبل"
hw4[881]="قبو"
hw4[882]="قتل"
hw4[883]="قحط"
hw4[884]="قدح"
hw4[885]="قدر"
hw4[886]="قدر"
hw4[887]="قدم"
hw4[888]="قدم"
hw4[889]="قدم"
hw4[890]="قدو"
hw4[891]="قذف"
hw4[892]="قر"
hw4[893]="قر"
hw4[894]="قرب"
hw4[895]="قرب"
hw4[896]="قرح"
hw4[897]="قرص"
hw4[898]="قرط"
hw4[899]="قرع"
hw4[900]="قرقر"
hw4[901]="قرن"
hw4[902]="قرن"
hw4[903]="قزع"
hw4[904]="قسطل"
hw4[905]="قسم"
hw4[906]="قش"
hw4[907]="قشعم"
hw4[908]="قص"
hw4[909]="قصد"
hw4[910]="قصر"
hw4[911]="قصر"
hw4[912]="قصف"
hw4[913]="قصو"
hw4[914]="قضب"
hw4[915]="قضي"
hw4[916]="قضي"
hw4[917]="قطر"
hw4[918]="قطع"
hw4[919]="قطع"
hw4[920]="قطع"
hw4[921]="قطع"
hw4[922]="قطع"
hw4[923]="قطن"
hw4[924]="قعد"
hw4[925]="قعس"
hw4[926]="قفص"
hw4[927]="قل"
hw4[928]="قل"
hw4[929]="قلب"
hw4[930]="قلب"
hw4[931]="قلد"
hw4[932]="قلع"
hw4[933]="قلقل"
hw4[934]="قلو"
hw4[935]="قمر"
hw4[936]="قمص"
hw4[937]="قن"
hw4[938]="قند"
hw4[939]="قنطر"
hw4[940]="قنو"
hw4[941]="قهوة"
hw4[942]="قود"
hw4[943]="قوس"
hw4[944]="قول"
hw4[945]="قولنج"
hw4[946]="قوم"
hw4[947]="قوم"
hw4[948]="قوم"
hw4[949]="قوم"
hw4[950]="قوي"
hw4[951]="قيء"
hw4[952]="قير"
hw4[953]="قيس"
hw4[954]="قيل"
hw4[955]="ك"
hw4[956]="كاد"
hw4[957]="كالون"
hw4[958]="كب"
hw4[959]="كبر"
hw4[960]="كبر"
hw4[961]="كبس"
hw4[962]="كت"
hw4[963]="كتب"
hw4[964]="كتف"
hw4[965]="كتن"
hw4[966]="كثر"
hw4[967]="كحل"
hw4[968]="كدر"
hw4[969]="كذب"
hw4[970]="كرب"
hw4[971]="كرث"
hw4[972]="كرس"
hw4[973]="كركر"
hw4[974]="كرم"
hw4[975]="كره"
hw4[976]="كري"
hw4[977]="كريم"
hw4[978]="كستاك"
hw4[979]="كسر"
hw4[980]="كسر"
hw4[981]="كسو"
hw4[982]="كشف"
hw4[983]="كشف"
hw4[984]="كظم"
hw4[985]="كف"
hw4[986]="كفا"
hw4[987]="كفر"
hw4[988]="كفهر"
hw4[989]="كل"
hw4[990]="كلاء"
hw4[991]="كلس"
hw4[992]="كلف"
hw4[993]="كلم"
hw4[994]="كم"
hw4[995]="كمخ"
hw4[996]="كمل"
hw4[997]="كمن"
hw4[998]="كنب"
hw4[999]="كنش"
hw4[1000]="كنو"
hw4[1001]="كهن"
hw4[1002]="كوثل"
hw4[1003]="كوريا"
hw4[1004]="كولومبيا"
hw4[1005]="كون"
hw4[1006]="كون"
hw4[1007]="كيد"
hw4[1008]="كيف"
hw4[1009]="كين"
hw4[1010]="ل"
hw4[1011]="لا"
hw4[1012]="لاك"
hw4[1013]="لام"
hw4[1014]="لبخ"
hw4[1015]="لبس"
hw4[1016]="لبق"
hw4[1017]="لبن"
hw4[1018]="لج"
hw4[1019]="لجن"
hw4[1020]="لحظ"
hw4[1021]="لحق"
hw4[1022]="لحم"
hw4[1023]="لخص"
hw4[1024]="لدي"
hw4[1025]="لزب"
hw4[1026]="لزم"
hw4[1027]="لزم"
hw4[1028]="لص"
hw4[1029]="لطس"
hw4[1030]="لطم"
hw4[1031]="لعب"
hw4[1032]="لغز"
hw4[1033]="لف"
hw4[1034]="لف"
hw4[1035]="لفح"
hw4[1036]="لفو"
hw4[1037]="لقف"
hw4[1038]="لقي"
hw4[1039]="لقي"
hw4[1040]="لكم"
hw4[1041]="لما"
hw4[1042]="لمس"
hw4[1043]="لمع"
hw4[1044]="لهج"
hw4[1045]="لهو"
hw4[1046]="لوث"
hw4[1047]="لوح"
hw4[1048]="لوف"
hw4[1049]="لون"
hw4[1050]="لوي"
hw4[1051]="ليس"
hw4[1052]="ليل"
hw4[1053]="ليي"
hw4[1054]="ما"
hw4[1055]="ماظة"
hw4[1056]="ماي"
hw4[1057]="متك"
hw4[1058]="مثل"
hw4[1059]="مثل"
hw4[1060]="مج"
hw4[1061]="مجن"
hw4[1062]="محل"
hw4[1063]="مخض"
hw4[1064]="مد"
hw4[1065]="مد"
hw4[1066]="مدر"
hw4[1067]="مذ"
hw4[1068]="مر"
hw4[1069]="مر"
hw4[1070]="مرح"
hw4[1071]="مرس"
hw4[1072]="مرع"
hw4[1073]="مرن"
hw4[1074]="مزج"
hw4[1075]="مس"
hw4[1076]="مسح"
hw4[1077]="مسك"
hw4[1078]="مسك"
hw4[1079]="مشح"
hw4[1080]="مشو"
hw4[1081]="مصر"
hw4[1082]="مضي"
hw4[1083]="مط"
hw4[1084]="مطو"
hw4[1085]="معك"
hw4[1086]="مغط"
hw4[1087]="مكدم"
hw4[1088]="مكن"
hw4[1089]="مل"
hw4[1090]="ملا"
hw4[1091]="ملح"
hw4[1092]="ملط"
hw4[1093]="ملك"
hw4[1094]="ملك"
hw4[1095]="ملو"
hw4[1096]="من"
hw4[1097]="من"
hw4[1098]="منطر"
hw4[1099]="منع"
hw4[1100]="منو"
hw4[1101]="مهر"
hw4[1102]="مهن"
hw4[1103]="موج"
hw4[1104]="موريكي"
hw4[1105]="مول"
hw4[1106]="موه"
hw4[1107]="مير"
hw4[1108]="ميز"
hw4[1109]="ميكروب"
hw4[1110]="ميل"
hw4[1111]="نأي"
hw4[1112]="نبت"
hw4[1113]="نبذ"
hw4[1114]="نبض"
hw4[1115]="نبل"
hw4[1116]="نبه"
hw4[1117]="نتج"
hw4[1118]="نتج"
hw4[1119]="نجد"
hw4[1120]="نجز"
hw4[1121]="نجم"
hw4[1122]="نجو"
hw4[1123]="نحس"
hw4[1124]="نحو"
hw4[1125]="نحو"
hw4[1126]="نخع"
hw4[1127]="ندب"
hw4[1128]="ندر"
hw4[1129]="ندو"
hw4[1130]="نذر"
hw4[1131]="نزح"
hw4[1132]="نزع"
hw4[1133]="نزف"
hw4[1134]="نزل"
hw4[1135]="نزل"
hw4[1136]="نزل"
hw4[1137]="نسب"
hw4[1138]="نسب"
hw4[1139]="نسج"
hw4[1140]="نسف"
hw4[1141]="نسل"
hw4[1142]="نسي"
hw4[1143]="نشأ"
hw4[1144]="نشر"
hw4[1145]="نشط"
hw4[1146]="نشف"
hw4[1147]="نص"
hw4[1148]="نصب"
hw4[1149]="نصح"
hw4[1150]="نصع"
hw4[1151]="نصل"
hw4[1152]="نضد"
hw4[1153]="نط"
hw4[1154]="نطق"
hw4[1155]="نطق"
hw4[1156]="نظر"
hw4[1157]="نظر"
hw4[1158]="نظف"
hw4[1159]="نظم"
hw4[1160]="نعر"
hw4[1161]="نعم"
hw4[1162]="نعنع"
hw4[1163]="نفث"
hw4[1164]="نفخ"
hw4[1165]="نفذ"
hw4[1166]="نفر"
hw4[1167]="نفس"
hw4[1168]="نفش"
hw4[1169]="نفع"
hw4[1170]="نفل"
hw4[1171]="نق"
hw4[1172]="نقد"
hw4[1173]="نقر"
hw4[1174]="نقص"
hw4[1175]="نقض"
hw4[1176]="نقض"
hw4[1177]="نقل"
hw4[1178]="نقل"
hw4[1179]="نقل"
hw4[1180]="نقي"
hw4[1181]="نكد"
hw4[1182]="نكر"
hw4[1183]="نكف"
hw4[1184]="نمر"
hw4[1185]="نمق"
hw4[1186]="نمي"
hw4[1187]="نهج"
hw4[1188]="نهز"
hw4[1189]="نهك"
hw4[1190]="نهو"
hw4[1191]="نهو"
hw4[1192]="نوب"
hw4[1193]="نوب"
hw4[1194]="نور"
hw4[1195]="نور"
hw4[1196]="نوط"
hw4[1197]="نوف"
hw4[1198]="نول"
hw4[1199]="نون"
hw4[1200]="نيا"
hw4[1201]="نيل"
hw4[1202]="هانذا"
hw4[1203]="هبش"
hw4[1204]="هبي"
hw4[1205]="هتك"
hw4[1206]="هجر"
hw4[1207]="هجم"
hw4[1208]="هجو"
hw4[1209]="هدب"
hw4[1210]="هدف"
hw4[1211]="هدي"
hw4[1212]="هذب"
hw4[1213]="هرأ"
hw4[1214]="هرطق"
hw4[1215]="هز"
hw4[1216]="هزر"
hw4[1217]="هش"
hw4[1218]="هطل"
hw4[1219]="هكل"
hw4[1220]="هلب"
hw4[1221]="هلك"
hw4[1222]="هم"
hw4[1223]="هما"
hw4[1224]="همش"
hw4[1225]="هنا"
hw4[1226]="هندس"
hw4[1227]="هوت"
hw4[1228]="هوس"
hw4[1229]="هول"
hw4[1230]="هون"
hw4[1231]="هوي"
hw4[1232]="هيا"
hw4[1233]="هيب"
hw4[1234]="هيروين"
hw4[1235]="هيل"
hw4[1236]="و"
hw4[1237]="وبئ"
hw4[1238]="وتد"
hw4[1239]="وتي"
hw4[1240]="وثق"
hw4[1241]="وجب"
hw4[1242]="وجد"
hw4[1243]="وجز"
hw4[1244]="وجم"
hw4[1245]="وجه"
hw4[1246]="وجه"
hw4[1247]="وجه"
hw4[1248]="وحد"
hw4[1249]="وحش"
hw4[1250]="وحي"
hw4[1251]="وخي"
hw4[1252]="ودع"
hw4[1253]="ودي"
hw4[1254]="ورد"
hw4[1255]="ورد"
hw4[1256]="ورع"
hw4[1257]="ورم"
hw4[1258]="وزب"
hw4[1259]="وزع"
hw4[1260]="وزن"
hw4[1261]="وسخ"
hw4[1262]="وسط"
hw4[1263]="وسع"
hw4[1264]="وسع"
hw4[1265]="وسم"
hw4[1266]="وسوس"
hw4[1267]="وشم"
hw4[1268]="وصف"
hw4[1269]="وصل"
hw4[1270]="وصل"
hw4[1271]="وصي"
hw4[1272]="وضا"
hw4[1273]="وضع"
hw4[1274]="وضع"
hw4[1275]="وطا"
hw4[1276]="وطش"
hw4[1277]="وظب"
hw4[1278]="وعد"
hw4[1279]="وعس"
hw4[1280]="وعي"
hw4[1281]="وفر"
hw4[1282]="وفز"
hw4[1283]="وفق"
hw4[1284]="وفي"
hw4[1285]="وفي"
hw4[1286]="وقت"
hw4[1287]="وقر"
hw4[1288]="وقع"
hw4[1289]="وقع"
hw4[1290]="وقع"
hw4[1291]="وقف"
hw4[1292]="وقف"
hw4[1293]="وقوق"
hw4[1294]="وكب"
hw4[1295]="وكل"
hw4[1296]="وكل"
hw4[1297]="ولد"
hw4[1298]="ولد"
hw4[1299]="وله"
hw4[1300]="ولي"
hw4[1301]="ولي"
hw4[1302]="وندل"
hw4[1303]="وهد"
hw4[1304]="وهم"
hw4[1305]="ويل"
hw4[1306]="يبس"
hw4[1307]="يد"
hw4[1308]="يسر"
hw4[1309]="يعقوب"
hw4[1310]="يم"
hw4[1311]="ينع"
hw4[1312]="يوم"
hw4[1313]="يونيو"
/*
hw4[1314]=""
hw4[1315]=""
hw4[1316]=""
*/