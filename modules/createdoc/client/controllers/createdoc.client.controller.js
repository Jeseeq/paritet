'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope','$stateParams', '$http','$location','Authentication','documentData', '$log', '$uibModal',
  function ($scope, $stateParams, $http, $location, Authentication, documentData, $log, $uibModal) {

    $scope.documentId = $stateParams.documentId;
    $scope.documentPreview ='<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><html><head>	<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">	<title>До найменування суду</title>	<meta name=\"generator\" content=\"LibreOffice 4.2.3.3 (Linux)\">	<meta name=\"author\" content=\"313\">	<meta name=\"created\" content=\"20151222;142300000000000\">	<meta name=\"changedby\" content=\"jeseeq \">	<meta name=\"changed\" content=\"20151223;14902279772803\">	<meta name=\"AppVersion\" content=\"14.0000\">	<meta name=\"Company\" content=\"11\">	<meta name=\"DocSecurity\" content=\"0\">	<meta name=\"HyperlinksChanged\" content=\"false\">	<meta name=\"LinksUpToDate\" content=\"false\">	<meta name=\"ScaleCrop\" content=\"false\">	<meta name=\"ShareDoc\" content=\"false\">	<style type=\"text/css\">	<!--		@page { margin-left: 3cm; margin-right: 1.5cm; margin-top: 0.64cm; margin-bottom: 2cm }		p { margin-bottom: 0.25cm; direction: ltr; font-size: 12pt; line-height: 120%; text-align: left; widows: 2; orphans: 2 }		td p { margin-bottom: 0cm; direction: ltr; font-size: 12pt; text-align: left; widows: 2; orphans: 2 }		a:link { so-language: zxx }	-->	</style></head><body lang=\"ru-RU\" dir=\"ltr\"><table width=\"528\" cellpadding=\"4\" cellspacing=\"0\" style=\"page-break-before: auto\">	<col width=\"131\">	<col width=\"101\">	<col width=\"271\">	<tr valign=\"top\">		<td width=\"131\" style=\"border: none; padding: 0cm\">			<p align=\"right\"><br>			</p>		</td>		<td width=\"101\" style=\"border: none; padding: 0cm\">			<p align=\"right\"><br>			</p>		</td>		<td width=\"271\" style=\"border: none; padding: 0cm\">			<p style=\"margin-bottom: 0cm\"><span lang=\"uk-UA\">До </span><font color=\"#0000ff\"><span lang=\"uk-UA\">найменування			суду</span></font></p>			<p><font color=\"#0000ff\"><span lang=\"uk-UA\">адреса суду</span></font></p>		</td>	</tr>	<tr valign=\"top\">		<td width=\"131\" style=\"border: none; padding: 0cm\">			<p align=\"right\" style=\"widows: 2; orphans: 2\"><br>			</p>		</td>		<td width=\"101\" style=\"border: none; padding: 0cm\">			<p align=\"right\" style=\"widows: 2; orphans: 2\"><span lang=\"uk-UA\">Позивач:			</span>			</p>		</td>		<td width=\"271\" style=\"border: none; padding: 0cm\">			<p style=\"margin-bottom: 0cm\"><font color=\"#0000ff\"><span lang=\"uk-UA\">прізвище-ім’я-по			батькові</span></font></p>			<p style=\"margin-bottom: 0cm\"><span lang=\"uk-UA\">адреса			проживання (перебування): </span><font color=\"#0000ff\"><span lang=\"uk-UA\">індекс,</span></font></p>			<p style=\"margin-bottom: 0cm\"><font color=\"#0000ff\"><span lang=\"uk-UA\">адреса			з форми,</span></font></p>			<p style=\"margin-bottom: 0cm\"><span lang=\"uk-UA\">телефон:			</span><font color=\"#0000ff\"><span lang=\"uk-UA\">номер			телефону,</span></font></p>			<p><span lang=\"uk-UA\">електрона адреса: </span><font color=\"#0000ff\"><span lang=\"uk-UA\">електрона			адреса</span></font></p>		</td>	</tr>	<tr valign=\"top\">		<td width=\"131\" style=\"border: none; padding: 0cm\">			<p align=\"right\"><br>			</p>		</td>		<td width=\"101\" style=\"border: none; padding: 0cm\">			<p align=\"right\"><span lang=\"uk-UA\">Представник			Позивача: </span>			</p>		</td>		<td width=\"271\" style=\"border: none; padding: 0cm\">			<p style=\"margin-bottom: 0cm\"><font color=\"#0000ff\"><span lang=\"uk-UA\">прізвище			ім’я по батькові</span></font></p>			<p style=\"margin-bottom: 0cm\"><span lang=\"uk-UA\">адреса			проживання (перебування): </span><font color=\"#0000ff\"><span lang=\"uk-UA\">індекс,</span></font></p>			<p style=\"margin-bottom: 0cm\"><font color=\"#0000ff\"><span lang=\"uk-UA\">адреса			з форми,</span></font></p>			<p style=\"margin-bottom: 0cm\"><font color=\"#0000ff\"><span lang=\"uk-UA\">телефон:			номер телефону,</span></font></p>			<p><span lang=\"uk-UA\">електрона адреса: </span><font color=\"#0000ff\"><span lang=\"uk-UA\">електрона			адреса</span></font></p>		</td>	</tr>	<tr valign=\"top\">		<td width=\"131\" style=\"border: none; padding: 0cm\">			<p align=\"right\"><br>			</p>		</td>		<td width=\"101\" style=\"border: none; padding: 0cm\">			<p align=\"right\"><span lang=\"uk-UA\">Відповідач:</span></p>		</td>		<td width=\"271\" style=\"border: none; padding: 0cm\">			<p style=\"margin-bottom: 0cm\"><font color=\"#0000ff\"><span lang=\"uk-UA\">найменування			відповідача</span></font></p>			<p style=\"margin-bottom: 0cm\"><span lang=\"uk-UA\">адреса:			і</span><font color=\"#0000ff\"><span lang=\"uk-UA\">ндекс,			адреса з форми,</span></font></p>			<p style=\"margin-bottom: 0cm\"><span lang=\"uk-UA\">телефон:</span><font color=\"#0000ff\"><span lang=\"uk-UA\">			номер телефону,</span></font></p>			<p><span lang=\"uk-UA\">електрона адреса: </span><font color=\"#0000ff\"><span lang=\"uk-UA\">електрона			адреса</span></font></p>		</td>	</tr>	<tr valign=\"top\">		<td width=\"131\" style=\"border: none; padding: 0cm\">			<p><br>			</p>		</td>		<td width=\"101\" style=\"border: none; padding: 0cm\">			<p><br>			</p>		</td>		<td width=\"271\" style=\"border: none; padding: 0cm\">			<p><span lang=\"uk-UA\">Ціна позову: _____ грн. ___			коп.</span></p>		</td>	</tr></table><p style=\"margin-bottom: 0cm; line-height: 100%\"><br></p><p lang=\"uk-UA\" style=\"margin-left: 6.35cm; margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p align=\"center\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\"><span lang=\"uk-UA\"><b>ПОЗОВНА</b></span></font><span lang=\"uk-UA\"><b>ЗАЯВА</b></span></p><p align=\"center\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">про </span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>стягненнязаробітної плати</i></span></font></p><p lang=\"uk-UA\" align=\"center\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#000000\"><span lang=\"uk-UA\">Позов подаєтьсяза зареєстрованим</span></font><font color=\"#0000ff\"><span lang=\"uk-UA\"><i></i></span></font><font color=\"#0000ff\"><span lang=\"uk-UA\">місцемпроживання (перебування) Позивача.</span></font></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\">                                                            </font><font color=\"#0000ff\"><span lang=\"uk-UA\">місцезнаходженнямВідповідача.</span></font></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\"><span lang=\"uk-UA\">Судовий збір несплачується на підставі п.1 ч.1 ст.5 ЗаконуУкраїни «Про судовий збір».</span></font></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\"> </font></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\"><i>	</i></span><span lang=\"uk-UA\">Позивач,</span><span lang=\"uk-UA\"><i></i></span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>ПІБ</i></span></font><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>Позивача</i></span></font><span lang=\"uk-UA\">,працю</span><font color=\"#0000ff\"><span lang=\"uk-UA\">вав/ю</span></font><span lang=\"uk-UA\">за </span><font color=\"#0000ff\"><span lang=\"uk-UA\">(усним)</span></font><span lang=\"uk-UA\">трудовим договором </span><font color=\"#0000ff\"><span lang=\"uk-UA\">(контрактом)</span></font><span lang=\"uk-UA\">у </span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>найменуваннявідповідача (у родовому відмінку)</i></span></font><span lang=\"uk-UA\"><i></i></span><span lang=\"uk-UA\">на посаді </span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>посада(у родовому відмінку) або виконував/юроботу обумовлену договором або </i></span></font><font color=\"#0000ff\"><i>”</i></font><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>інше</i></span></font><font color=\"#0000ff\"><i>”</i></font><span lang=\"uk-UA\"><i></i></span><span lang=\"uk-UA\">в період з </span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>датапочатку</i></span></font><span lang=\"uk-UA\"><i> (</i></span><span lang=\"uk-UA\">по</span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>датакінця,якщо розірвано</i></span></font><span lang=\"uk-UA\"><i>.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">	</span><font color=\"#0000ff\"><span lang=\"uk-UA\">(якщорозірвано)</span></font><span lang=\"uk-UA\">Трудовийдоговір припинено (розірвано) з </span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>датакінця</i></span></font><span lang=\"uk-UA\"><i> у порядку</i></span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>п.ч.ст.</i></span></font><span lang=\"uk-UA\"><i></i></span><span lang=\"uk-UA\">КЗпП України</span><span lang=\"uk-UA\"><i></i></span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>фраза зістатті КЗпП</i></span></font><font color=\"#000000\"><span lang=\"uk-UA\">.</span></font></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#000000\"><span lang=\"uk-UA\">	За умовамидоговору … </span></font><font color=\"#000000\"><span lang=\"uk-UA\"><i>проумови оплати праці (подумати!)</i></span></font></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">	Станом на дату звернення доСуду Відповідач має заборгованість повиплаті заробітної плати перед Позивачем,яка складається з наступного:</span></p><p lang=\"uk-UA\" align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p lang=\"uk-UA\" align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p lang=\"uk-UA\" align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\"><i>Рассматривать 2 варианта:недоплата и полностью невиплата!!!!</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">1.1. Должностной оклад в размере</span><span lang=\"uk-UA\"><i>Размер оклада </i></span><span lang=\"uk-UA\">(Размердолжностного оклада прописью) руб.;</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">1.2.  Доплаты, причитающиеся всвязи с выполнением еверхурочной </span><span lang=\"uk-UA\"><i>работыДни работы </i></span><span lang=\"uk-UA\">в количестве</span><span lang=\"uk-UA\"><i>Кол-во часов </i></span><span lang=\"uk-UA\">ч.,в размере </span><span lang=\"uk-UA\"><i>Размер доплаты</i></span><span lang=\"uk-UA\">(Размер доплаты прописью)руб. (ст. 149. 152 ТК РФ);</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">1.3.    Компенсационные выплатыпо расходам, которые были понесены вовремя служебной командировки (на которыеправа Работника установлены ст. 168 ТКРФ), с </span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">по</span><span lang=\"uk-UA\"><i>Дата г., </i></span><span lang=\"uk-UA\">вобщем размере Размер командировочных(Размер командировочных) руб., а именно:</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">- Расходы на проезд в размере</span><span lang=\"uk-UA\"><i>Размер возмещениярасходов </i></span><span lang=\"uk-UA\">(Размервозмещения прописью) руб.;</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">-  Расходы по найму жилогопомещения в размере </span><span lang=\"uk-UA\"><i>Размервозмещения расходов </i></span><span lang=\"uk-UA\">(Размервозмещения расходов прописью) руб.;</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Итого общая сумма задолженностиОтветчика перед Истцом составляет Суммаобщей задолженности (Суммапрописью)руб.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">В соответствии со ст. 140 ТК РФпри прекращении трудового договора вдень увольнения Работника производитсявыплата всех сумм, причитающихсяРаботнику от Работодателя, однако натекущий момент такой выплаты непоследовало.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">В соответствии со ст. 236 ТКРФ: </span><span lang=\"uk-UA\"><i>просрочка выплатыполагающихся Работнику денежных суммналагает на Работодателя обязательствовыплатить их с уплатой процентов вразмере не ниже одной трехсотойдействующей в это время ставкирефинансирования Центрального банкаРоссийской Федерации от невыплаченныхв срок сумм за каждый день задержкиначиная со следующего дня послеустановленного срока выплаты по деньфактического расчета включительно.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Соответственно, сумма процентоврассчитывается по формуле:</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">_,</span><font face=\"Arial, serif\"><span lang=\"uk-UA\">                                                       </span></font><span lang=\"uk-UA\">Ставка</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Сумма задолженности, *   ,</span><font face=\"Arial, serif\"><span lang=\"uk-UA\">         </span></font><span lang=\"uk-UA\">,</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\"><i>-.</i></span><font face=\"Arial, serif\"><span lang=\"uk-UA\"><i>                      </i></span></font><span lang=\"uk-UA\"><i>\     </i></span><span lang=\"uk-UA\">рефинансирования</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Доля от ставки р е финансиров ания</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><sub><span lang=\"uk-UA\">ж</span></sub><span lang=\"uk-UA\"> Количестводней просрочки, дней</span></p><p lang=\"uk-UA\" align=\"justify\" style=\"margin-bottom: 0cm; line-height: 100%\"><br></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Размер суммы задолженности- Сумма общей задолженности руб. Ставкарефинансирования ЦБ РФ </span><span lang=\"uk-UA\"><i>наДата выппатыт. </i></span><span lang=\"uk-UA\">- 8,25% Доляот ставки рефинансирования - 1/300</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Количество   дней  просрочки  -   </span><span lang=\"uk-UA\"><i>Количество   дней просрочки   </i></span><span lang=\"uk-UA\">дней   (с  </span><span lang=\"uk-UA\"><i>Дата   выппатыт.   </i></span><span lang=\"uk-UA\">по  </span><span lang=\"uk-UA\"><i>Дата подписаниям)</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Итого сумма процентовсоставляет Подсчитанная сумма(Подсчитанная сумма прописью) руб.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Позиция Истца подтверждаетсяследующими доказательствами:</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">1.    Справка о тарифной ставке(окладе) и среднем заработке истца </span><span lang=\"uk-UA\"><i>№Номер </i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">2.   Положение о премировании№Л£ </span><span lang=\"uk-UA\"><i>положения </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">3.   Приказ об увольнении </span><span lang=\"uk-UA\"><i>№Номер </i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">4.   Приказ о приеме на работу№Л£ от </span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">5.   Приказ о премировании №А&amp;</span><span lang=\"uk-UA\"><i>приказа </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">6.   Приказ о возмещенииРаботнику расходов №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">7.   Приказ о замене дополнительногоотпуска компенсацией №А&amp; </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">8.   Приказ о замене частиотпуска компенсацией №А&amp; </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">9.    Приказ о направленииРаботника в командировку </span><span lang=\"uk-UA\"><i>№Номер </i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Датаг.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">10.   Приказ о предоставленииотпуска Работнику №Л£ от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">11.   Приказ о привлечении ксверхурочной работе №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">12.   Приказ о привлеченииРаботника к работе в выходные и праздничныедни №Л£ </span><span lang=\"uk-UA\"><i>приказа </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">13.    Приказ о сокращениичисленности или штата №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">14.   Приказ об отзыве из отпуска№.№ </span><span lang=\"uk-UA\"><i>приказа </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">15.   Приказ о б установленииР аб отнику над б авки № </span><span lang=\"uk-UA\"><i>№приказа  </i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">16.   Расчетный листок </span><span lang=\"uk-UA\"><i>№№листа </i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">17.   Выписка с расчетного(зарплатного) счета Работника №Л£</span><span lang=\"uk-UA\"><i>выписки </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">18.    Справка из бухгалтериио начислении (не начислении) выплат впользу истца </span><span lang=\"uk-UA\"><i>№ Номер</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">19.   Должностная инструкция.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">2 0.</span><font face=\"Arial, serif\"><span lang=\"uk-UA\">  </span></font><span lang=\"uk-UA\">Выписка из труд овой кии жки.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">21.  Заявление о замене частиежегодного отпуска денежной компенсациейот </span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">22.  Заявление о заменедополнительного отпуска денежнойкомпенсацией от </span><span lang=\"uk-UA\"><i>Да таг.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">23.  Заявление о согласии напривлечение к ев ерхур очной работе от</span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">24.  Заявление о согласии напривлечение к работе в выходной илипраздничный день от </span><span lang=\"uk-UA\"><i>Датаг.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\"><i>25.  </i></span><span lang=\"uk-UA\">Заявлениео согласии на отзыв из отпуска от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">26.   Представление о поощренииРаботника от </span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">27.   Табель расчета рабочеговремени и оплаты труда от </span><span lang=\"uk-UA\"><i>Дата г. 2 </i></span><span lang=\"uk-UA\">8.</span><font face=\"Arial, serif\"><span lang=\"uk-UA\">  </span></font><span lang=\"uk-UA\">Коллективный д оговор от </span><span lang=\"uk-UA\"><i>Дата </i></span><span lang=\"uk-UA\">г.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">30.  Договор о материальнойответственности Работника №Л£ от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">31.  Уведомление о привлечениик работе в выходной (нерабочий праздничный)день Работника от </span><span lang=\"uk-UA\"><i>Датаг.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">32.  Уведомление о расторжениитрудового договора от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">33.  Уведомление о сокращениидолжности Работника от </span><span lang=\"uk-UA\"><i>Датаг.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">34.  Уведомление о привлечениик ев ерхур очной работе от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">35.   Больничный лист от </span><span lang=\"uk-UA\"><i>Дата г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">36.   Письменные консультацииспециалиста от </span><span lang=\"uk-UA\"><i>Да та г.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">37.    Аудиозапись </span><span lang=\"uk-UA\"><i>№Номер аудиозаписи </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата аудиозаписит.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">38.   Видеозапись </span><span lang=\"uk-UA\"><i>№Номер видеозаписи </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата видеозаписит.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">39.   </span><span lang=\"uk-UA\"><i>Наименованиесудебного постановления, </i></span><span lang=\"uk-UA\">принятое</span><span lang=\"uk-UA\"><i>Наименование суда </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.по делу </span><span lang=\"uk-UA\"><i>№ Номер дела.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">40.    </span><span lang=\"uk-UA\"><i>Наименованиесудебного постановления, </i></span><span lang=\"uk-UA\">принятое</span><span lang=\"uk-UA\"><i>Наименование суда </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да таг.</i></span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">41.   Медицинское заключениеот </span><span lang=\"uk-UA\"><i>Дата </i></span><span lang=\"uk-UA\">г.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">42.   </span><span lang=\"uk-UA\"><i>Ин ые доказа тел ь ства</i></span><span lang=\"uk-UA\">.</span></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Орган, который вправерассматривать индивидуальные трудовыеспори возникшие у Ответчика, не былсоздан.</span></p><p lang=\"uk-UA\" align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p align=\"justify\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">	Враховуючи викладене, напідставі </span><font color=\"#0000ff\"><span lang=\"uk-UA\">ст.ст.</span></font><span lang=\"uk-UA\">КЗпП України, </span><font color=\"#0000ff\"><span lang=\"uk-UA\">ст.ст.</span></font><span lang=\"uk-UA\">ЦПК України,</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">					</span><span lang=\"uk-UA\"><b>прошу Суд:</b></span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">1. Стягнути з Відповідача накористь Позивача загальну сумузаборгованості по виплаті заробітноїплати у розмірі </span><font color=\"#0000ff\"><span lang=\"uk-UA\">ХХХ(гривні прописом)</span></font><span lang=\"uk-UA\"> </span><font color=\"#0000ff\"><span lang=\"uk-UA\">грн.ХХ коп.</span></font><span lang=\"uk-UA\">, у тому числі:</span></p><ol>	<ol>		<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">		<span lang=\"uk-UA\">заборгованість по заробітної		платі за </span><font color=\"#0000ff\"><span lang=\"uk-UA\">період		або перелік місяців</span></font><span lang=\"uk-UA\">,		у розмірі __________;</span></p>		<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">		<span lang=\"uk-UA\">заборгованість за роботу в		надурочний час _______; 106</span></p>		<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">		<span lang=\"uk-UA\">заборгованість за роботу у		святкові та неробочі дні; 107</span></p>		<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">		<span lang=\"uk-UA\">заборгованість за роботу у		нічний час _______; 108</span></p>		<li><p lang=\"uk-UA\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">		</p>		<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">		<span lang=\"uk-UA\">лдл</span></p>		<li><p lang=\"uk-UA\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">		</p>	</ol></ol><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">2      Взыскать   проценты,  предусмотренные   ст.   236   ТК   РФ   за     просрочку  выплаты  полагающихсяРаботнику денежных сумм в размереПодсчитанная сумма (Подсчитанная суммапрописью) руб.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">ВСТАВИТИ ПОСИЛАННЯ НА ДОДАТКИ</span></p><p lang=\"uk-UA\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p lang=\"uk-UA\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">Додатки:</span></p><ol>	<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">	<span lang=\"uk-UA\">копія трудової книжки	Позивача;</span></p>	<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">	<span lang=\"uk-UA\">копія трудового договору	(контракту);</span></p>	<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">	<span lang=\"uk-UA\">копія наказу </span><font color=\"#0000ff\"><span lang=\"uk-UA\">№	ХХ</span></font><span lang=\"uk-UA\"> від </span><font color=\"#0000ff\"><span lang=\"uk-UA\">дата</span></font><span lang=\"uk-UA\">	про прийняття на роботу;</span></p>	<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">	<span lang=\"uk-UA\">копія наказу </span><font color=\"#0000ff\"><span lang=\"uk-UA\">№	ХХ</span></font><span lang=\"uk-UA\"> від </span><font color=\"#0000ff\"><span lang=\"uk-UA\">дата</span></font><span lang=\"uk-UA\">	про розірвання трудового договору	(звільнення);</span></p>	<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">	<span lang=\"uk-UA\">копія довідки про доходи за	оспорюваний період;</span></p>	<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">	<span lang=\"uk-UA\">копія довідки про середню	заробітну плату;</span></p>	<li><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">	<span lang=\"uk-UA\">копія табелю обліку робочого	часу (глянуть, как називаеться!)</span></p></ol><p lang=\"uk-UA\" style=\"margin-left: 0.32cm; margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">2.    Справка о тарифной ставке(окладе) и среднем заработке истца №Л£от </span><span lang=\"uk-UA\"><i>Дата т. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">3.    Копия положения опремировании №Л£ </span><span lang=\"uk-UA\"><i>положения</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Датат. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">4.    Копия приказа о премировании№А&amp; </span><span lang=\"uk-UA\"><i>приказа </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата т. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">5.   Копия приказа об увольнении</span><span lang=\"uk-UA\"><i>№ Номер </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата т. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">6.   Копия приказа о приеме наработу №Л£ от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">7.   Копия приказа о возмещенииРаботнику расходов №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">8.   Копия приказа о заменедополнительного отпуска компенсацией№А&amp; </span><span lang=\"uk-UA\"><i>приказа </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">9.   Копия приказа о заменечасти отпуска компенсацией №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">10.   Копия приказа о направленииРаботника в командировку </span><span lang=\"uk-UA\"><i>№Номер </i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Датаг. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">11.   Копия приказа о предоставленииотпуска Работнику №Л£ от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">12.   Копия приказа о привлечениик сверхурочной работе №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">13.   Копия приказа о привлеченииРаботника к работе в выходные и праздничныедни №Л£ </span><span lang=\"uk-UA\"><i>приказа  </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">14.   Копия приказа о сокращениичисленности или штата №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г. в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">15.   Копия приказа об отзывеиз отпуска №Л£ </span><span lang=\"uk-UA\"><i>приказа</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Датат. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">16.   Копия приказа об установленииРаботнику надбавки №Л&amp; </span><span lang=\"uk-UA\"><i>приказа </i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г. в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">17.   Копия расчетного листка№Л£ </span><span lang=\"uk-UA\"><i>листа </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">18.   Копия выписки с расчетного(зарплатного) счета Работника №Л£</span><span lang=\"uk-UA\"><i>выписки </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">19.   Копия справки из бухгалтериио начислении (не начислении) выплат впользу истца </span><span lang=\"uk-UA\"><i>№ Номер</i></span><span lang=\"uk-UA\">от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">20.   Копия должностной инструкциив 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">21.   Копия выписки из труд овой кии жки</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">22.   Копия заявления о заменечасти ежегодного отпуска денежнойкомпенсацией от </span><span lang=\"uk-UA\"><i>Да таг. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">23.    Копия заявления о заменедополнительного отпуска денежнойкомпенсацией от </span><span lang=\"uk-UA\"><i>Да таг. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">24.   Копия заявления о согласиина привлечение к ев ерхур очной работеот </span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">25.   Копия заявления о согласиина привлечение к работе в выходной илипраздничный день от </span><span lang=\"uk-UA\"><i>Датаг. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">26.   Копия заявления о согласиина отзыв из отпуска от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">27.   Копия представления опоощрении Работника от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">28.   Копия табеля расчетарабочего времени и оплаты труда от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">29.   Копия коллективногодоговора от </span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">30.   Копия трудового договора№ </span><span lang=\"uk-UA\"><i>Номер  </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата </i></span><span lang=\"uk-UA\">г.в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">31.   Копия договора о материальнойответственности Работника №Л£от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">32.   Копия уведомления опривлечении к работе в выходной (нерабочийпраздничный) день Работника от </span><span lang=\"uk-UA\"><i>Датат. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">33.   Копия уведомления орасторжении трудового договора от </span><span lang=\"uk-UA\"><i>Датат. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">34.   Копия уведомления осокращении должности Работника от </span><span lang=\"uk-UA\"><i>Датаг. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">35.   Копия уведомления опривлечении к сверхурочной работе от</span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">36.   Копия Больничного листаот </span><span lang=\"uk-UA\"><i>Да та г. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">37.    Копия Письменныеконсультации специалиста от </span><span lang=\"uk-UA\"><i>Дата г. </i></span><span lang=\"uk-UA\">в 2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">38.   Копия Аудиозапись </span><span lang=\"uk-UA\"><i>№Номер аудиозаписи </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата аудиозаписит. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">39.    Копия Видеозапись </span><span lang=\"uk-UA\"><i>№Номер видеозаписи </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата видеозаписит. </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">40.    Копия </span><span lang=\"uk-UA\"><i>Наименованиесудебного постановления, </i></span><span lang=\"uk-UA\">принятое</span><span lang=\"uk-UA\"><i>Наименование суда </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.по делу </span><span lang=\"uk-UA\"><i>№ Номер дела </i></span><span lang=\"uk-UA\">в2 экз.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">41.    Копия </span><span lang=\"uk-UA\"><i>Наименованиесудебного постановления, </i></span><span lang=\"uk-UA\">принятое</span><span lang=\"uk-UA\"><i>Наименование суда </i></span><span lang=\"uk-UA\">от</span><span lang=\"uk-UA\"><i>Дата</i></span><span lang=\"uk-UA\">г.в 2 экз</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">42.   Копия медицинскогозаключения от </span><span lang=\"uk-UA\"><i>Да таг. </i></span><span lang=\"uk-UA\">в2 экз. 4 3.  </span><span lang=\"uk-UA\"><i>Ин ые дока зател ь ства</i></span><span lang=\"uk-UA\">.</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\">№№<span lang=\"uk-UA\">. Довіреністьчи інший документ, що підтверджуєповноваження Представника (якщо є   </span></font></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\">          <span lang=\"uk-UA\">Представник).</span></font></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\">№№<span lang=\"uk-UA\">. Оригіналквитанції про сплату судового збору(якщо сплачувався судовий збір);</span></font></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\">№№<span lang=\"uk-UA\">. Копія позовноїзаяви для Відповідача. </span></font></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\">            </font><font color=\"#000000\"><span lang=\"uk-UA\"><i>КопіїДодатків до Позовної заяви для сторониВідповідача не надаються на підставіч. 2  	ст.120 ЦПК України.</i></span></font></p><p lang=\"uk-UA\" style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><br></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>«___»</i></span></font><span lang=\"uk-UA\"><i></i></span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>_____________</i></span></font><span lang=\"uk-UA\"><i> 20</i></span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>__ </i></span></font><span lang=\"uk-UA\"><i></i></span><span lang=\"uk-UA\"><i>р.</i></span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\"><span lang=\"uk-UA\">						</span></p><p style=\"margin-bottom: 0cm; background: #ffffff; line-height: 100%\">                                                                                     <font color=\"#0000ff\"><span lang=\"uk-UA\">Х.Х.Ххххххххххх</span></font><span lang=\"uk-UA\"> </span><font color=\"#0000ff\"><span lang=\"uk-UA\"><i>Прізвищета ініціали 										  Позивача  абоПредставника</i></span></font></p><p style=\"margin-bottom: 0cm; line-height: 100%\"><br></p></body></html>';
    $scope.place = {};
    $scope.data = documentData;
    $scope.authentication = Authentication;
    $scope.person = {
      first_name: Authentication.user.firstName || '',
      last_name: Authentication.user.lastName || ''
    };

    $scope.$watchCollection(function(){return $scope.person;}, function() {
      var promise;
      var endpoint = '/api/documentpreview/' + $scope.documentId;
      promise = $http.post(endpoint, $scope.person);
      promise.then(function(response) {
        $scope.documentPreview = response.data;
      });
    });


    //Accordion open on heading
    $scope.isOpen = true;

    //Modal open function
    $scope.openModal = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: function ($http, $scope, $uibModalInstance, data, person, Company, Authentication) {


          //Header title select
          $scope.personType = function(){
            if (data.questions[0].selected === '1') return 'юридичну особу';
            else if (data.questions[0].selected === '2') return 'фізичну особу - підприємця';
            else if (data.questions[0].selected === '3') return 'фізичну особу';
          };

          //create company on save(modal)
          $scope.create = function () {


            var company = new Company({
              user: Authentication.user,
              name: person.name,
              city: person.city,
              department: person.department,
              region: person.region,
              street: person.street,
              house: person.house,
              block: person.block,
              apartment: person.apartment,
              zip: person.zip,
              phone: person.phone,
              email: person.email,
              code_edrp : person.code_edrp
            });

            // Redirect after save
            company.$save(function (response) {

            }, function (errorResponse) {
              $scope.error = errorResponse.data.message;
            });
          };


          //Modal window close functions
          $scope.close = function () {
            $scope.create();
            $uibModalInstance.dismiss('cancel');
          };
          $scope.cancelAndReset = function(){
            vm.options.resetModel();
            $uibModalInstance.dismiss('cancel');
          };

          var vm = this;
          //pass injected data
          vm.person = person;
          vm.data = data;

          // Formly fields
          vm.YurPersonFields = [
            {
              key: 'last_name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Прізвище',
                placeholder: 'Введіть прізвище',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },
            {
              key: 'first_name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Ім`я',
                placeholder: 'Введіть ім`я',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },

            {
              key: 'second_name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'По-батькові',
                placeholder: '',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },
            {
              key: 'name',
              type: 'horizontalTypeaheadInputIcon',
              templateOptions: {
                label: 'Найменування відповідача',
                placeholder: 'Найменування відповідача',
                required: true,
                options: [],
                PopOverTemplate: '\'modules/createdoc/client/views/popoverTemplate.html\''
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              },
              controller: /* @ngInject */ function($scope) {

                $scope.close = function(){
                  $scope.popoverflag = false;
                };
                $scope.onSelect = function($item, $model, $label){
                  $scope.model.apartment = $item.apartment;
                  $scope.model.block = $item.block;
                  $scope.model.city = $item.city;
                  $scope.model.department = $item.department;
                  $scope.model.street = $item.street;
                  $scope.model.email = $item.email;
                  $scope.model.house = $item.house;
                  $scope.model.name = $item.name;
                  $scope.model.phone = $item.phone;
                  $scope.model.region = $item.region;
                  $scope.model.zip = $item.zip;
                  $scope.model.code_edrp = $item.code_edrp;
                };

                var promise;
                var endpoint = '/api/company';
                promise = $http.get(endpoint);
                return promise.then(function(response) {
                  $scope.to.options = response.data;
                  //$scope.model =
                });
              }
            },
            {
              key: 'code_edrp',
              type: 'horizontalMaskedInput',
              templateOptions: {
                label: 'Код ЄДРПОУ',
                placeholder: 'Введіть код ЄДРПОУ Відповідача (8 цифр)',
                required: true,
                mask: '99999999'
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              }
            },
            {
              "className": "section-label",
              "template": "<hr class='devider devider-db'/>"
            },
            {
              "className": "section-label2",
              "template": "<div class='heading'>Адреса Відповідача</div>"
            },
            {
              "className": "row padding-1px",
              "fieldGroup": [
                {
                  "className": "input col col-4",
                  "type": "input",
                  "key": "city",
                  "templateOptions": {
                    label: "Місто",
                    "placeholder": "Місто",
                    required: true
                  }
                },
                {
                  "className": "select col col-4",
                  "type": "select",
                  "key": "department",
                  "templateOptions": {
                    label: "Область",
                    "valueProp": "value",
                    "labelProp": "name",
                    "placeholder": "Область",
                    options: [
                      { name: 'Вінницька', value: 'Вінницька' },
                      { name: 'Волинська', value: 'Волинська' },
                      { name: 'Дніпропетровська', value: 'Дніпропетровська' },
                      { name: 'Донецька', value: 'Донецька' },
                      { name: 'Житомирська', value: 'Житомирська' },
                      { name: 'Закарпатська', value: 'Закарпатська' },
                      { name: 'Запорізька', value: 'Запорізька' },
                      { name: 'Івано-Франківська', value: 'Івано-Франківська' },
                      { name: 'Київська', value: 'Київська' },
                      { name: 'Кіровоградська', value: 'Кіровоградська' },
                      { name: 'Луганська', value: 'Луганська' },
                      { name: 'Львівська', value: 'Львівська' },
                      { name: 'Миколаївська', value: 'Миколаївська' },
                      { name: 'Одеська', value: 'Одеська' },
                      { name: 'Полтавська', value: 'Полтавська' },
                      { name: 'Рівненська', value: 'Рівненська' },
                      { name: 'Сумська', value: 'Сумська' },
                      { name: 'Тернопільська', value: 'Тернопільська' },
                      { name: 'Харківська', value: 'Харківська' },
                      { name: 'Херсонська', value: 'Херсонська' },
                      { name: 'Хмельницька', value: 'Хмельницька' },
                      { name: 'Черкаська', value: 'Черкаська' },
                      { name: 'Чернівецька', value: 'Чернівецька' },
                      { name: 'Чернігівська', value: 'Чернігівська' }
                    ]

                  },
                  "expressionProperties": {
                    "templateOptions.disabled": "vm.person.city == 'Київ'"
                  }
                },
                {
                  "className": "input col col-4",
                  "type": "input",
                  "key": "region",
                  "templateOptions": {
                    label: "Район",
                    placeholder: "Район"
                  }
                },

                {
                  "className": "input col col-6",
                  "type": "input",
                  "key": "street",
                  "templateOptions": {
                    "placeholder": "Вулиця",
                    required: true
                  }
                },
                {
                  "className": "input col col-2",
                  "type": "input",
                  "key": "house",
                  "templateOptions": {
                    "placeholder": "№ буд"
                  }
                },
                {
                  "className": "input col col-2",
                  "type": "input",
                  "key": "block",
                  "templateOptions": {
                    "placeholder": "Корпус"
                  }
                },
                {
                  "className": "input col col-2",
                  "type": "input",
                  "key": "apartment",
                  "templateOptions": {
                    "placeholder": "Квартира"
                  }
                },


                {
                  "className": "input col col-2 col-xs-offset-10",
                  "type": "ZipInput",
                  "key": "zip",
                  "templateOptions": {
                    label : "Індекс",
                    mask: '99999'
                  }
                }
              ]
            },
            {
              "template": "<hr class='devider devider-db' />"
            },
            {
              key: 'IPN',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'ІПН відповідача',
                placeholder: 'ІПН відповідача',   //10 числовых символов
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },
            {
              key: 'phone',
              type: 'horizontalMaskedInput',
              templateOptions: {
                label: 'Телефон',
                mask: '(999) 999-99-99'
              }
            },

            {
              "type": "horizontalInput",
              "key": "email",
              "templateOptions": {
                label: 'Email',
                "placeholder": "example@gmail.com",
                "type": "email",
                "maxlength": 20,
                "minlength": 6
              }
            }
          ];
        },
        controllerAs: 'vm',
        size: 'md',
        backdrop : "static",
        //resolve data inject
        resolve: {
          data: function () {
            return $scope.data;
          },
          person :function(){
            return $scope.person;
          }
        }
      });

      modalInstance.result.then(function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }
  ]);

