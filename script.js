// Sample JSON data (replace this with your actual data)
const userData = [
    {"National ID":"30602072602239","username":"احمد اشرف عيسي","Usercode":"1310202400624","password":"30602072602239"},{"National ID":"30605142601137","username":"ابو بكر عبد الناصر عبد الحكم","Usercode":"1310202400625","password":"30605142601137"},{"National ID":"30603052600295","username":"اسامه الانصاري احمد محمد","Usercode":"1310202400626","password":"30603052600295"},{"National ID":"30610012633251","username":"مصطفي احمد عبد العاطي","Usercode":"1310202400627","password":"30610012633251"},{"National ID":"30609032603555","username":"زياد احمد كامل بكر","Usercode":"1310202400628","password":"30609032603555"},{"National ID":"30609152600886","username":"رنا جمال فرج الله","Usercode":"1310202400629","password":"30609152600886"},{"National ID":"30607172603129","username":"هبي طارق طلعت حرب","Usercode":"1310202400630","password":"30607172603129"},{"National ID":"30604262600375","username":"عمر احمد خلف فتحي","Usercode":"1310202400631","password":"30604262600375"},{"National ID":"30511282600128","username":"اروي حسني محمد السيد","Usercode":"1310202400632","password":"30511282600128"},{"National ID":"30609172602613","username":"فيلوباتير جرجس شحاته","Usercode":"1310202400555","password":"30609172602613"},{"National ID":"30606292600038","username":"انتوني ايمن انيس","Usercode":"1310202400551","password":"30606292600038"},{"National ID":"30510152605695","username":"عبد الرحمن علي السيد سليمان","Usercode":"1310202400519","password":"30510152605695"},{"National ID":"30605252601183","username":"فاطمه احمد علي يوسف","Usercode":"fatma ahmed","password":"30605252601183"},{"National ID":"30605072601479","username":"محمد حسين  محمد الصغير","Usercode":"1310202400556","password":"30605072601479"},{"National ID":"30611012603901","username":"مريم محمد احمد عبد العال","Usercode":"1310202400520","password":"30611012603901"},{"National ID":"30607182600624","username":"ابرار احمد خيري فهمي","Usercode":"1310202400565","password":"30607182600624"},{"National ID":"30605152600031","username":"ابراهيم عبداللاه رزق محمد عبدالرحيم","Usercode":"1310202400508","password":"30605152600031"},{"National ID":"30605012617619","username":"احمد السيد عثمان همام","Usercode":"1310202400513","password":"30605012617619"},{"National ID":"30603212604233","username":"احمد الضبع احمد اسماعيل","Usercode":"1310202400579","password":"30603212604233"},{"National ID":"30607012620299","username":"احمد ايمن محمد  ثابت","Usercode":"1310202400577","password":"30607012620299"},{"National ID":"30609022600035","username":"احمد بهاء الدين محمد","Usercode":"1310202400502","password":"30609022600035"},{"National ID":"30609092600172","username":"احمد طارق ثابت حلمي","Usercode":"AhmedTarek","password":"30609092600172"},{"National ID":"30602042602439","username":"احمد عبد العال احمد الديب","Usercode":"1310202400516","password":"30602042602439"},{"National ID":"30604242600816","username":"احمد مروان احمد محمد","Usercode":"1310202400527","password":"30604242600816"},{"National ID":"30703182600151","username":"ادهم جابر السيد احمد خلف","Usercode":"1310202400489","password":"30703182600151"},{"National ID":"30608012600375","username":"اسامه مسلم عبد الحميد","Usercode":"1310202400539","password":"30608012600375"},{"National ID":"30511162600728","username":"اميره ناصر محمد عبداللاه","Usercode":"1310202400478","password":"30511162600728"},{"National ID":"30608052600041","username":"ايفانا ايمن شوقي متي","Usercode":"1310202400497","password":"30608052600041"},{"National ID":"30608122602624","username":"ايه احمد العارف عبدالمعبود","Usercode":"1310202400564","password":"30608122602624"},{"National ID":"30510252600747","username":"ايه احمد عبدالغني عبدالكريم الشريف","Usercode":"1310202400471","password":"30510252600747"},{"National ID":"30609042602344","username":"بسنت السيد احمد يونس","Usercode":"1310202400559","password":"30609042602344"},{"National ID":"30603170202318","username":"بيتر صبري صباح لقيه","Usercode":"1310202400498","password":"30603170202318"},{"National ID":"30605252600357","username":"توماس الهامي ادوارد","Usercode":"1310202400552","password":"30605252600357"},{"National ID":"30511062603673","username":"توماس جرجس بخيت فخري","Usercode":"1310202400486","password":"30511062603673"},{"National ID":"30506092600837","username":"توماس عصام عطيه عبد الملاك","Usercode":"1310202400547","password":"30506092600837"},{"National ID":"30606202600441","username":"جومانا علي محمد مجدي ثابت","Usercode":"1310202400553","password":"30606202600441"},{"National ID":"30612152600089","username":"جومانا عماد مهني ميلاد","Usercode":"1310202400500","password":"30612152600089"},{"National ID":"30607102600122","username":"جومانه حاتم عبد الله محمد","Usercode":"1310202400534","password":"30607102600122"},{"National ID":"30605252600446","username":"جيسي باهر عياد راغب","Usercode":"1310202400538","password":"30605252600446"},{"National ID":"30604032601712","username":"حاتم مصطفي كامل احمد","Usercode":"1310202400549","password":"30604032601712"},{"National ID":"30511272601207","username":"حبيبه ياسر احمد حسين","Usercode":"1310202400578","password":"30511272601207"},{"National ID":"30611122601661","username":"حلا احمد تغيان غازي","Usercode":"1310202400514","password":"30611122601661"},{"National ID":"30702102602969","username":"حلا خالد جمال الدين عبد الله","Usercode":"1310202400540","password":"30702102602969"},{"National ID":"30606062600926","username":"حنين احمد السيد احمد","Usercode":"1310202400560","password":"30606062600926"},{"National ID":"30606062602791","username":"خالد محمد عبده محمد","Usercode":"1310202400584","password":"30606062602791"},{"National ID":"30512012605752","username":"خالد وليد محمود معروف","Usercode":"1310202400543","password":"30512012605752"},{"National ID":"30606282600315","username":"ذياد مصطفي كمال محمود","Usercode":"1310202400580","password":"30606282600315"},{"National ID":"30607012600301","username":"رزان محمد صبري عبدالموجود","Usercode":"Razan Mohamed","password":"30607012600301"},{"National ID":"30612012600542","username":"روان شعبان ابوحمادي محمد","Usercode":"1310202400467","password":"30612012600542"},{"National ID":"30608302600689","username":"ريتاج شحاته محمد السيد","Usercode":"1310202400470","password":"30608302600689"},{"National ID":"30701012608848","username":"ريهام محمد نصرالدين ثابت","Usercode":"1310202400475","password":"30701012608848"},{"National ID":"30610012635858","username":"زياد علاء ابراهيم  محمد","Usercode":"1310202400512","password":"30610012635858"},{"National ID":"30609272602734","username":"زياد وائل صبري حمدان حسن","Usercode":"1310202400509","password":"30609272602734"},{"National ID":"30608012621305","username":"ساره  هاني محمود","Usercode":"1310202400582","password":"30608012621305"},{"National ID":"30606122600122","username":"ساره ابراهيم رزق محمد عبدالرحيم","Usercode":"1310202400476","password":"30606122600122"},{"National ID":"30603072601166","username":"ساندي عزت اميل فرنسيس","Usercode":"1310202400576","password":"30603072601166"},{"National ID":"30702258800183","username":"سلمي احمد صالح شاكر","Usercode":"1310202400477","password":"30702258800183"},{"National ID":"30604302600942","username":"سلمي ايمن احمد ابو اليزيد","Usercode":"1310202400550","password":"30604302600942"},{"National ID":"30604062600907","username":"سلمي علي عبد الرؤف محمود","Usercode":"1310202400525","password":"30604062600907"},{"National ID":"30604052601905","username":"سلمي قدري ادريس عبداللاه نصر","Usercode":"1310202400483","password":"30604052601905"},{"National ID":"30609092600091","username":"شادي باسم ميلاد سدره","Usercode":"1310202400499","password":"30609092600091"},{"National ID":"30602022601363","username":"شهد حامد حماده احمد","Usercode":"1310202400537","password":"30602022601363"},{"National ID":"30609012600746","username":"شهد مصطفي محمد السيد","Usercode":"1310202400464","password":"30609012600746"},{"National ID":"30608232602123","username":"شهد هشام بدري","Usercode":"1310202400529","password":"30608232602123"},{"National ID":"30602262600496","username":"صلاح محمد صلاح حامد","Usercode":"1310202400530","password":"30602262600496"},{"National ID":"30611272600035","username":"طاهر محمود السيد","Usercode":"1310202400526","password":"30611272600035"},{"National ID":"30603012610891","username":"عبد الرحمن ايمن عبد الرحمن","Usercode":"1310202400521","password":"30603012610891"},{"National ID":"30607262600196","username":"عبد الله ضاحي عبد الله","Usercode":"1310202400542","password":"30607262600196"},{"National ID":"30510162602414","username":"عبد الله محمد احمد السيد","Usercode":"1310202400557","password":"30510162602414"},{"National ID":"30609302603412","username":"علي احمد محمد اسماعيل ثابت الشريف","Usercode":"1310202400506","password":"30609302603412"},{"National ID":"30609162605045","username":"علياء عبدالعظيم محمد احمد","Usercode":"1310202400463","password":"30609162605045"},{"National ID":"30609202600335","username":"عمر محمود عبد الجواد صادق","Usercode":"1310202400536","password":"30609202600335"},{"National ID":"30609152600185","username":"فينان محمد خلاف عبداللاه محمد","Usercode":"1310202400473","password":"30609152600185"},{"National ID":"30604232601105","username":"كاتي فايز ذكي لوقا","Usercode":"1310202400481","password":"30604232601105"},{"National ID":"30606062602686","username":"كارول وصفي فوزي تاوضرس","Usercode":"1310202400574","password":"30606062602686"},{"National ID":"30610012621377","username":"كريم طارق محمود احمد","Usercode":"1310202400554","password":"30610012621377"},{"National ID":"30602122602235","username":"كريم عاصم السيد محمود","Usercode":"1310202400507","password":"30602122602235"},{"National ID":"30604082600377","username":"كريم محمد عبدالجواد محمد رضوان","Usercode":"1310202400504","password":"30604082600377"},{"National ID":"30602182600274","username":"كريم محمد عزت صادق","Usercode":"1310202400535","password":"30602182600274"},{"National ID":"30607162602671","username":"كيرلس عطا صدقي حكييم","Usercode":"1310202400545","password":"30607162602671"},{"National ID":"30607052600045","username":"لجين خالد اسماعيل عبد الرحيم","Usercode":"1310202400523","password":"30607052600045"},{"National ID":"30604162601021","username":"لجين صلاح عبد الراضي","Usercode":"1310202400575","password":"30604162601021"},{"National ID":"30603152602228","username":"مارسيل الصباح مسعود  توفيق","Usercode":"1310202400544","password":"30603152602228"},{"National ID":"30609302600146","username":"مارينا ايمن اليشع سبحه تاوضروس","Usercode":"1310202400472","password":"30609302600146"},{"National ID":"30606062600535","username":"محمد احمد محمد محمود","Usercode":"1310202400558","password":"30606062600535"},{"National ID":"30612012600577","username":"محمد ادهم محمد حمدان","Usercode":"1310202400501","password":"30612012600577"},{"National ID":"30608092600036","username":"محمد حسام صبري خلف","Usercode":"1310202400524","password":"30608092600036"},{"National ID":"30705232602056","username":"محمد حسين محمد احمد احمد الجرادي","Usercode":"1310202400581","password":"30705232602056"},{"National ID":"30602042604253","username":"محمد سعيد حافظ عبد الرحمن","Usercode":"1310202400528","password":"30602042604253"},{"National ID":"30609012616472","username":"محمد عزت خلف احمد حسانين","Usercode":"1310202400494","password":"30609012616472"},{"National ID":"30603012610115","username":"محمد فؤاد ابراهيم سليمان عبدالغني","Usercode":"1310202400484","password":"30603012610115"},{"National ID":"30609232602014","username":"محمد فتحي فاضل محمد","Usercode":"1310202400518","password":"30609232602014"},{"National ID":"30607012619878","username":"محمد قدري نور الدين","Usercode":"1310202400533","password":"30607012619878"},{"National ID":"30605202600054","username":"محمد ممدوح السمري عايد السيد","Usercode":"1310202400503","password":"30605202600054"},{"National ID":"30510222603199","username":"محمد ناصر علي محمد","Usercode":"1310202400496","password":"30510222603199"},{"National ID":"30608022600055","username":"محمد هشام محمود هاشم","Usercode":"1310202400492","password":"30608022600055"},{"National ID":"30703032600374","username":"محمود بركات مصطفي نورالدين","Usercode":"1310202400490","password":"30703032600374"},{"National ID":"30608152606918","username":"محمود هاشم محمود هاشم","Usercode":"1310202400562","password":"30608152606918"},{"National ID":"30703172600218","username":"مروان جمال القط هاشم","Usercode":"mrwan elkoot","password":"30703172600218"},{"National ID":"30605192600069","username":"مريم احمد سليم يوسف","Usercode":"1310202400466","password":"30605192600069"},{"National ID":"30604152601643","username":"مريم اشرف فتحي علي","Usercode":"1310202400532","password":"30604152601643"},{"National ID":"30511302600901","username":"مريم باهي حريص رزق","Usercode":"1310202400469","password":"30511302600901"},{"National ID":"30602202600748","username":"مريم محمود صابر احمد يوسف","Usercode":"1310202400480","password":"30602202600748"},{"National ID":"30512152604179","username":"مصطفي محمود عطيه محمد","Usercode":"1310202400485","password":"30512152604179"},{"National ID":"30607052602978","username":"مصطفي محمود محمد طاهر","Usercode":"1310202400548","password":"30607052602978"},{"National ID":"30603012609303","username":"منار الصباح محمد عبد العزيز","Usercode":"1310202400515","password":"30603012609303"},{"National ID":"30609302604303","username":"منار جمال رمزي جبره تكلا","Usercode":"1310202400511","password":"30609302604303"},{"National ID":"30703092600497","username":"مينا عماد عجيب باسيلي","Usercode":"1310202400517","password":"30703092600497"},{"National ID":"30609012614445","username":"ندي رمضان فؤاد","Usercode":"1310202400522","password":"30609012614445"},{"National ID":"30510292602386","username":"ندي عصام بكري","Usercode":"1310202400583","password":"30510292602386"},{"National ID":"30609012612787","username":"نهال احمد محمد عليان","Usercode":"1310202400563","password":"30609012612787"},{"National ID":"30702122601462","username":"نور حمزه ابوعلم محمود","Usercode":"1310202400465","password":"30702122601462"},{"National ID":"30606182600202","username":"نور عصام حسني رضوان علي","Usercode":"nour esam","password":"30606182600202"},{"National ID":"30608082600089","username":"نور محمد محمود ابراهيم محمد","Usercode":"1310202400482","password":"30608082600089"},{"National ID":"30504132600425","username":"هنا رأفت كمال محمد","Usercode":"1310202400541","password":"30504132600425"},{"National ID":"30603262600883","username":"هنا زكريا عبدالموجود محمد حسن","Usercode":"1310202400468","password":"30603262600883"},{"National ID":"30606012605641","username":"يارا عاصم عبدالهادي حمدون علي","Usercode":"1310202400479","password":"30606012605641"},{"National ID":"30605258800463","username":"يارا محمد خضير محمد محمود","Usercode":"1310202400474","password":"30605258800463"},{"National ID":"30512242601373","username":"يوسف احمد محمد فاروق احمد طه","Usercode":"1310202400487","password":"30512242601373"},{"National ID":"30604142601211","username":"يوسف اسامه العربي حسن","Usercode":"1310202400495","password":"30604142601211"},{"National ID":"30601012623532","username":"يوسف عبد المسيح عطوان","Usercode":"1310202400546","password":"30601012623532"},{"National ID":"27501252600036","username":"يوسف محمد جمال محمود","Usercode":"1310202400491","password":"27501252600036"},{"National ID":"30606192600332","username":"يوسف محمد حماد محمد جادالكريم","Usercode":"1310202400488","password":"30606192600332"}
];

function retrieveInfo() {
    const id = document.getElementById('nationalID').value;
    const resultBody = document.getElementById('resultBody');
    
    // Clear previous results
    resultBody.innerHTML = '';

    const user = userData.find(user => user["National ID"] === id);

    if (user) {
        // Create a new row and populate it with user data
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.Usercode}</td>
            <td>${user.password}</td>
        `;
        resultBody.appendChild(row);
    } else {
        // Show message if no user is found
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="3">رقم البطاقة غير صحيح</td>';
        resultBody.appendChild(row);
    }
}
