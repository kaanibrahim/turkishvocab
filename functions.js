// FOR TESTING
function displayText(text){
    const para = document.createElement("p");
    para.innerHTML = text;
    document.getElementById("results").appendChild(para);
}

// LIST OF WORD PAIRS
//words = [["apple", "elma"], ["book", "kitap"], ["car", "araba"], ["dog", "köpek"], ["house", "ev"], ["water", "su"], ["food", "yemek"], ["school", "okul"]];
words = [['bir', 'One'], ['ve', 'And'], ['olmak', 'to be'], ['bu', 'This '], ['için', 'for  '], ['o', 'he'], ['ben', 'I'], ['demek', 'means'], ['çok', 'A lot'], ['yapmak', 'to do'], ['ne', 'What'], ['gibi', 'like'], ['daha', 'more'], ['almak', 'to take  '], ['var', 'there is'], ['kendi', 'own'], ['gelmek', 'to come'], ['ile', 'with'], ['vermek', 'to give'], ['ama', 'But'], ['sonra', 'later'], ['kadar', 'much'], ['yer', 'place'], ['en', '-most'], ['insan', 'person '], ['değil', 'not'], ['her', 'each'], ['istemek', 'to want'], ['yıl', 'year'], ['çıkmak', 'to leave'], ['görmek', 'to see'], ['gün', 'day'], ['biz', 'We'], ['gitmek', 'to go'], ['iş', 'work'], ['şey', 'thing'], ['ara', 'call'], ['ki', 'that'], ['bilmek', 'to know'], ['el', 'hand'], ['zaman', 'time'], ['ya', 'either'], ['çocuk', 'child'], ['iki', 'two'], ['bakmak', 'to look '], ['çalışmak', 'to work'], ['içinde', 'inside'], ['büyük', 'big'], ['yok', 'no'], ['başlamak', 'to start'], ['yol', 'path'], ['kalmak', 'to stay'], ['neden', 'From where'], ['siz', 'you'], ['konu', 'Subject'], ['yapılmak', 'be done'], ['iyi', 'Good'], ['kadın', 'Woman'], ['ev', 'house'], ['ise', 'whereas'], ['diye', 'saying'], ['bulunmak', 'have'], ['söylemek', 'to say'], ['göz', 'eyelash'], ['gerekmek', 'need'], ['dünya', 'World'], ['baş', 'head'], ['durum', 'situation'], ['yan', 'side'], ['geçmek', 'to go past'], ['sen', 'you'], ['onlar', 'them'], ['yeni', 'new'], ['önce', 'before'], ['başka', 'Another'], ['hal', 'status'], ['orta', 'middle'], ['su', 'This'], ['girmek', 'to enter'], ['ülke', 'country'], ['yemek', 'food'], ['hiç', 'none'], ['bile', 'even    '], ['nasıl', 'How'], ['bütün', 'all'], ['karşı', 'opposite'], ['bulmak', 'to find'], ['böyle', 'like this'], ['yaşamak', 'to live'], ['düşünmek', 'to think'], ['aynı', 'same'], ['iç', 'drink'], ['ancak', 'however'], ['kişi', 'person'], ['bunlar', 'these'], ['veya', 'or '], ['ilk', 'first'], ['göre', 'according to'], ['ön', 'front'], ['son', 'last'], ['biri', 'someone'], ['şekil', 'shape'], ['önemli', 'important'], ['yüz', 'face'], ['hem', 'both'], ['göstermek', 'to show'], ['etmek', 'to do'], ['alt', 'lower'], ['getirmek', 'to bring'], ['kullanmak', 'to use'], ['çünkü', 'Because'], ['taraf', 'side'], ['şimdi', 'Now'], ['adam', 'man'], ['onun', 'his'], ['diğer', 'other'], ['artık', 'Now'], ['üzerinde', 'on'], ['ses', 'sound'], ['hep', 'always'], ['doğru', 'TRUE'], ['durmak', 'stop'], ['kız', 'girl'], ['tüm', 'all'], ['çekmek', 'to pull'], ['konuşmak', 'to talk'], ['para', 'money'], ['anlamak', 'to understand'], ['anne', 'mother'], ['az', 'little'], ['bazı', 'some'], ['baba', 'father'], ['hayat', 'life'], ['sadece', 'Only'], ['küçük', 'Small'], ['fazla', 'more'], ['bilgi', 'information'], ['an', 'moment'], ['sormak', 'to ask'], ['bunun', 'this'], ['öyle', 'like that'], ['yine', 'again'], ['sağlamak', 'to ensure'], ['sonuç', 'conclusion'], ['kullanılmak', 'to be used'], ['dış', 'external'], ['ad', 'name'], ['yani', 'well'], ['süre', 'duration'], ['dönmek', 'return'], ['açmak', 'open'], ['oturmak', 'to sit'], ['anlatmak', 'to explain'], ['bırakmak', 'to leave'], ['hemen', 'immediately'], ['saat', 'hour'], ['yaş', 'age'], ['sorun', 'problem'], ['devlet', 'state'], ['sahip', 'owner'], ['sıra', 'order '], ['yazmak', 'to write'], ['yüzde', 'percentage'], ['ay', 'month'], ['atmak', 'to throw'], ['tutmak', 'to hold'], ['bunu', 'this'], ['olay', 'event'], ['düşmek', 'to fall'], ['duymak', 'to listen'], ['söz', 'promise'], ['güzel', 'Beautiful'], ['sevmek', 'to love'], ['biraz', 'A little'], ['zor', 'difficult'], ['çıkarmak', 'subtract'], ['şu', 'This'], ['koymak', 'to put'], ['tek', 'only'], ['sistem', 'system'], ['birlikte', 'together'], ['verilmek', 'to be given'], ['kim', 'who'], ['alınmak', 'be offended'], ['genç', 'youth'], ['kapı', 'door'], ['kitap', 'book'], ['üzerine', 'over'], ['burada', 'Here'], ['gece', 'night'], ['alan', 'area'], ['birbiri', 'each other'], ['işte', 'at work'], ['beklemek', 'to wait'], ['uzun', 'LONG'], ['hiçbir', 'no'], ['bugün', 'Today'], ['dönem', 'period'], ['arkadaş', 'friend'], ['ürün', 'product'], ['aile', 'family'], ['üç', 'fly'], ['okumak', 'to read'], ['erkek', 'Male'], ['herkes', 'everyone'], ['güç', 'strength'], ['belki', 'maybe'], ['gerçek', 'real'], ['tam', 'full'], ['ilgili', 'relating to'], ['ilişki', 'relationship'], ['çevre', 'environment'], ['eski', 'old'], ['aramak', 'to call'], ['yaşam', 'life'], ['halk', 'people'], ['yakın', 'close'], ['sokak', 'street'], ['bey', 'gentleman'], ['tarih', 'history'], ['özellik', 'feature'], ['bölüm', 'section'], ['özel', 'special'], ['akıl', 'mind'], ['kimse', 'noone'], ['pek', 'much'], ['eğer', 'if'], ['gerek', 'necessary'], ['özellikle', 'especially'], ['anlam', 'meaning'], ['yüksek', 'high'], ['banka', 'bank'], ['kez', 'times'], ['ayak', 'foot'], ['taşımak', 'to carry'], ['geri', 'back'], ['toplum', 'society'], ['araç', 'vehicle'], ['madde', 'article'], ['tür', 'type'], ['karar', 'decision'], ['görülmek', 'to be seen'], ['hava', 'weather'], ['sayı', 'number'], ['farklı', 'different'], ['grup', 'group'], ['oda', 'room'], ['biçim', 'format'], ['oluşmak', 'to consist of'], ['haber', 'news'], ['Allah', 'Allah'], ['ayrıca', 'Moreover'], ['gelen', 'incoming'], ['birkaç', 'a few '], ['soru', 'question'], ['arka', 'back'], ['kazanmak', 'to win'], ['yazı', 'writing'], ['okul', 'school'], ['açık', 'open '], ['öğrenmek', 'to learn'], ['sürmek', 'to spread'], ['dil', 'language'], ['şirket', 'company '], ['kaynak', 'source'], ['bitmek', 'to end'], ['program', 'program'], ['devam etmek', 'to continue'], ['hareket', 'movement'], ['renk', 'colour'], ['açılmak', 'open'], ['hak', 'right'], ['inanmak', 'to believe'], ['çalışma', 'study'], ['açı', 'angle'], ['parça', 'piece'], ['gazete', 'newspaper'], ['oluşturmak', 'to create'], ['tabi', 'subject to'], ['değer', 'value'], ['tanımak', 'to recognise'], ['yapı', 'structure'], ['doktor', 'doctor'], ['gelir', 'income'], ['görev', 'duty'], ['amaç', 'aim'], ['bölge', 'area'], ['film', 'film'], ['üzere', 'about'], ['müşteri', 'customer'], ['zaten', 'already'], ['telefon', 'telephone'], ['eğitim', 'education'], ['deniz', 'sea'], ['ikinci', 'second'], ['kalkmak', 'to get up'], ['hatta', 'even'], ['etki', 'effect'], ['gelişmek', 'to develop'], ['geçen', 'last'], ['vücut', 'body'], ['düşünce', 'thought'], ['milyon', 'million'], ['oynamak', 'play'], ['değişmek', 'change'], ['temel', 'basis'], ['yaratmak', 'create'], ['ulaşmak', 'to reach'], ['sanmak', 'to think'], ['geçirmek', 'spend'], ['kültür', 'culture'], ['kurmak', 'to create'], ['fakat', 'but'], ['buna', 'to this'], ['resim', 'picture'], ['ışık', 'light'], ['içmek', 'to drink'], ['hanım', 'woman'], ['hizmet', 'service'], ['ihtiyaç', 'need'], ['nokta', 'point'], ['yön', 'direction'], ['evet', 'Yes'], ['oyun', 'game'], ['artmak', 'increase'], ['yeniden', 'again  '], ['işlem', 'process'], ['kısa', 'short'], ['kolay', 'easy'], ['hangi', 'Which'], ['oran', 'ratio'], ['aslında', 'Actually'], ['kabul etmek', 'to accept'], ['orada', 'there'], ['dikkat', 'attention'], ['uzak', 'far'], ['bilgisayar', 'computer'], ['gelecek', 'future'], ['görünmek', 'appear'], ['örneğin', 'for example'], ['oğul', 'son'], ['dinlemek', 'to listen'], ['uygun', 'suitable'], ['lira', 'lira'], ['üretim', 'production'], ['dakika', 'minute'], ['unutmak', 'to forget'], ['yürümek', 'to walk'], ['böylece', 'like this'], ['kötü', 'bad'], ['araba', 'car '], ['ağız', 'mouth'], ['duygu', 'feeling'], ['uygulamak', 'to apply'], ['hâlâ', 'still'], ['örnek', 'example'], ['birçok', 'A lot'], ['izlemek', 'to watch'], ['derece', 'degree'], ['mümkün', 'possible'], ['şöyle', 'Like this'], ['duvar', 'wall'], ['on', 'front'], ['sanat', 'art'], ['ana', 'main'], ['hastalık', 'illness'], ['öğrenci', 'student'], ['televizyon', 'television'], ['yöntem', 'method'], ['masa', 'table'], ['ölmek', 'to die'], ['takım', 'set'], ['üst', 'top'], ['kafa', 'head'], ['müzik', 'music'], ['ayrılmak', 'To leave'], ['enerji', 'energy'], ['üniversite', 'university'], ['spor', 'sport'], ['türlü', 'kinds'], ['can', 'life'], ['rağmen', 'despite'], ['kısım', 'part'], ['ölüm', 'death'], ['sürekli', 'continually'], ['sağlık', 'health'], ['çeşitli', 'various'], ['bundan', 'from this'], ['hissetmek', 'to feel'], ['oysa', 'whereas'], ['sabah', 'morning'], ['internet', 'Internet'], ['teknik', 'technical'], ['dışarı', 'outside'], ['merkez', 'centre'], ['ortam', 'environment'], ['yerine', 'in its place'], ['düzey', 'level'], ['köy', 'bay'], ['yönetim', 'management'], ['aşağı', 'down'], ['cevap', 'reply'], ['yatmak', 'to lie down'], ['toprak', 'soil'], ['isim', 'name'], ['akşam', 'evening'], ['araştırma', 'research'], ['götürmek', 'take away'], ['katılmak', 'to join'], ['yoksa', 'or?'], ['kurulmak', 'to be established'], ['ödemek', 'pay'], ['sanki', 'as if'], ['kan', 'blood'], ['hasta', 'sick'], ['şehir', 'city'], ['inmek', 'to get down'], ['sunmak', 'to present'], ['bilinmek', 'to be known'], ['hafta', 'week'], ['trafik', 'traffic'], ['hesap', 'bill'], ['otomobil', 'car'], ['yabancı', 'foreign'], ['davranış', 'behaviour'], ['mutfak', 'kitchen'], ['kent', 'city'], ['bazen', 'Sometimes'], ['belli', 'clear'], ['ayrı', 'separate'], ['fiyat', 'price'], ['hakkında', 'about'], ['kaldırmak', 'to pick up'], ['kol', 'arm'], ['yalnız', 'only'], ['hazırlamak', 'to prepare'], ['cam', 'pine'], ['sonunda', 'finally'], ['yavaş', 'slow'], ['gerekli', 'necessary'], ['önem', 'importance'], ['koca', 'husband'], ['yanlış', 'wrong'], ['varlık', 'presence'], ['art', 'art'], ['ilgi', 'interest'], ['sana', 'to you'], ['satış', 'sales'], ['içeri', 'in'], ['doğal', 'natural'], ['sahip olmak', 'to have'], ['ekonomik', 'economic'], ['acı', 'angle'], ['hayır', 'No'], ['korumak', 'to protect'], ['kat', 'floor'], ['ekonomi', 'economy'], ['genel', 'general'], ['belirtmek', 'to indicate'], ['fotoğraf', 'Photograph'], ['hayvan', 'animal'], ['savaş', 'war'], ['mal', 'goods'], ['saç', 'hair'], ['kaybetmek', 'to lose'], ['kalan', 'remainder'], ['değiştirmek', 'to change'], ['dört', 'four'], ['gerçekten', 'Really'], ['sayfa', 'page'], ['teknoloji', 'technology'], ['kurum', 'organisation'], ['beş', 'five'], ['sektör', 'sector'], ['geniş', 'wide'], ['kağıt', 'paper'], ['koku', 'smell'], ['sağ', 'Right'], ['sıcak', 'hot'], ['yüzyıl', 'century'], ['cadde', 'street'], ['pazar', 'Sunday'], ['sürdürmek', 'to continue'], ['kullanım', 'use'], ['sınıf', 'class'], ['aşk', 'love'], ['doğmak', 'be born'], ['ağır', 'heavy'], ['tekrar', 'again'], ['güneş', 'sun '], ['sigara', 'cigarette'], ['ağaç', 'tree'], ['kelime', 'word'], ['bina', 'building'], ['eş', 'spouse'], ['kaçmak', 'to escape'], ['parti', 'party'], ['yatak', 'bed '], ['yazar', 'writer'], ['kulak', 'ear'], ['öğretmen', 'teacher'], ['sebep', 'reason'], ['sol', 'left'], ['peki', 'Alright'], ['yağ', 'oil'], ['yüzden', "that's why"], ['anlaşılmak', 'be understood'], ['varmak', 'to arrive'], ['gülmek', 'to laugh'], ['kural', 'rule'], ['satmak', 'to sell'], ['şiir', 'poem'], ['göndermek', 'to send'], ['başarı', 'success'], ['firma', 'firm'], ['hükümet', 'government'], ['kalp', 'heart'], ['kesmek', 'to cut'], ['proje', 'project'], ['şart', 'condition'], ['hız', 'speed'], ['köşe', 'corner'], ['vurmak', 'hit'], ['model', 'model'], ['balık', 'fish'], ['piyasa', 'market'], ['görüş', 'opinion'], ['bura', 'here'], ['hazırlanmak', 'get ready'], ['miktar', 'amount'], ['birinci', 'first'], ['meydan', 'square '], ['ölçü', 'measurement'], ['seçmek', 'to choose'], ['uygulanmak', 'to be implemented'], ['bahçe', 'garden'], ['sevgi', 'love'], ['ekmek', 'bread'], ['boyunca', 'along'], ['koşmak', 'to run'], ['dolu', 'full'], ['kuruluş', 'establishment'], ['saye', 'thanks to'], ['korkmak', 'to be scared'], ['yardım', 'help'], ['karşılaşmak', 'to encounter'], ['malzeme', 'material'], ['hoş', 'pleasant'], ['köpek', 'dog'], ['ünlü', 'famous'], ['büyümek', 'grow'], ['dolaşmak', 'to wander'], ['oldukça', 'increasingly'], ['üstelik', 'besides'], ['yaşanmak', 'to be experienced'], ['beyaz', 'white'], ['istek', 'request'], ['öte', 'beyond'], ['denmek', 'to be called'], ['kardeş', 'brother'], ['çekilmek', 'withdraw'], ['nerede', 'where'], ['çalmak', 'to play'], ['izin', 'permission'], ['korku', 'fear'], ['meslek', 'job'], ['polis', 'police'], ['yalnızca', 'just'], ['açıklamak', 'to explain'], ['fikir', 'idea'], ['hızlı', 'fast'], ['pencere', 'window'], ['uğraşmak', 'to strive'], ['taş', 'stone'], ['ateş', 'fire    '], ['fark', 'difference'], ['yetmek', 'be enough'], ['çoğu', 'most'], ['kimi', 'who'], ['koşul', 'condition'], ['mahalle', 'neighbourhood'], ['mutlaka', 'definitely'], ['tane', 'unit'], ['üretmek', 'to produce'], ['üstüne', 'over'], ['dayanmak', 'to resist'], ['ince', 'thin'], ['kaç', 'how much'], ['ortak', 'partner'], ['tip', 'medicine'], ['görüntü', 'image'], ['beri', 'since'], ['ders', 'lesson'], ['başkan', 'minister'], ['karşılık', 'opposite'], ['kurtulmak', 'to be saved'], ['numara', 'number'], ['defa', 'times'], ['edilmek', 'to be'], ['batı', 'West'], ['fark etmek', 'to notice'], ['herhangi bir', 'any'], ['sinema', 'cinema'], ['değişik', 'strange'], ['hedef', 'aim'], ['uyumak', 'to sleep'], ['dost', 'friend'], ['yanmak', 'burn'], ['anlayış', 'understanding'], ['asıl', 'royal'], ['basmak', 'print'], ['kenar', 'edge'], ['kontrol', 'control'], ['çevirmek', 'turn'], ['din', 'religion'], ['güçlü', 'strong'], ['henüz', 'yet'], ['plan', 'plan'], ['beyin', 'brain'], ['elektrik', 'electric'], ['karı', 'wife'], ['üstünde', 'above'], ['et', 'meat'], ['sağlanmak', 'to be provided'], ['söylenmek', 'to grumble'], ['çizgi', 'line'], ['uç', 'fly'], ['üye', 'member'], ['cilt', 'skin'], ['ruh', 'soul'], ['sevgili', 'beloved'], ['yaklaşmak', 'approach'], ['süreç', 'period'], ['bakış', 'view'], ['bilim', 'science'], ['ileri', 'forward'], ['ifade', 'expression'], ['beden', 'body'], ['hatırlamak', 'to remember'], ['kaza', 'accident'], ['iyice', 'thoroughly'], ['dağ', 'mountain'], ['kapatmak', 'to close'], ['adım', 'my name'], ['ciddi', 'serious'], ['çözüm', 'solution'], ['etkilemek', 'to influence'], ['belediye', 'council'], ['gelişme', 'development'], ['seçim', 'vote'], ['ağlamak', 'to cry'], ['bağlı', 'connected'], ['kavram', 'concept'], ['artırmak', 'increase'], ['faaliyet', 'activity'], ['zarar', 'damage'], ['derin', 'deep'], ['salon', 'lounge'], ['çeşit', 'sort'], ['kesilmek', 'to be cut off'], ['seyretmek', 'to watch'], ['birden', 'suddenly'], ['içermek', 'to contain'], ['sayılmak', 'to be counted'], ['toplamak', 'to collect'], ['aşmak', 'exceed'], ['bağırmak', 'to shout'], ['sorumluluk', 'responsibility'], ['davranmak', 'to behave'], ['mektup', 'letter'], ['soğuk', 'cold'], ['canlı', 'live'], ['idi', 'was'], ['makine', 'machine'], ['yararlanmak', 'benefit'], ['yaşlı', 'old'], ['boş', 'empty'], ['acaba', 'I wonder?'], ['maç', 'match'], ['yönetici', 'executive'], ['getirilmek', 'to be brought'], ['metre', 'metre'], ['tutulmak', 'to be held'], ['kalite', 'quality'], ['bitki', 'herb'], ['değişiklik', 'change '], ['ilaç', 'medicine'], ['kredi', 'credit'], ['yasa', 'law'], ['başarılı', 'successful'], ['birer', 'one each'], ['imkan', 'facility'], ['ceza', 'punishment'], ['her şey', 'everything'], ['incelemek', 'to examine'], ['top', 'ball'], ['uzman', 'expert'], ['doldurmak', 'to fill'], ['kanal', 'channel'], ['mekân', 'space'], ['uymak', 'to suit'], ['yıllık', 'annual'], ['dolayısıyla', 'therefore'], ['yazılmak', 'to be written'], ['ait', 'belonging to'], ['parmak', 'finger'], ['saymak', 'to count'], ['atılmak', 'to rush'], ['belirlemek', 'to determine'], ['normal', 'normal'], ['hele', 'especially'], ['ilke', 'principle'], ['kırmızı', 'red'], ['rol', 'role'], ['şarkı', 'song'], ['eleman', 'element'], ['hazır', 'ready'], ['benzemek', 'to resemble'], ['bir şey', 'Something'], ['hoca', 'teacher'], ['boy', 'size'], ['günlük', 'daily'], ['politika', 'policy'], ['suç', 'crime'], ['niye', 'Why'], ['sahne', 'scene'], ['sokmak', 'sting'], ['adet', 'piece'], ['koltuk', 'armchair'], ['kurtarmak', 'to save'], ['sanatçı', 'artist'], ['tercih etmek', 'to prefer'], ['uzanmak', 'to lie down'], ['aşama', 'stage'], ['eklemek', 'to add'], ['orman', 'forest'], ['ayırmak', 'to separate'], ['düzen', 'order'], ['faiz', 'interest'], ['genellikle', 'Generally'], ['her zaman', 'Always'], ['hikaye', 'story'], ['hücre', 'cell'], ['ora', 'there'], ['roman', 'novel'], ['vergi', 'tax'], ['yakmak', 'burn'], ['ağabey', 'elder brother'], ['basın', 'press'], ['destek', 'support'], ['giymek', 'to wear'], ['hata', 'mistake'], ['sınır', 'border'], ['birlik', 'unity'], ['eser', 'work'], ['karşılamak', 'to meet'], ['yarı', 'half'], ['yeterli', 'sufficient'], ['birey', 'individual'], ['karanlık', 'darkness'], ['otobüs', 'bus'], ['sanayi', 'industry'], ['bebek', 'baby'], ['vatandaş', 'citizen'], ['bakan', 'minister'], ['kere', 'times'], ['millet', 'people'], ['reklam', 'advert'], ['yükselmek', 'rise'], ['boyut', 'dimension'], ['dergi', 'magazine'], ['enflasyon', 'inflation'], ['sosyal', 'social'], ['birisi', 'someone'], ['geçmiş', 'past'], ['hastahane', 'hospital'], ['olma', 'being'], ['toplantı', 'meeting'], ['gazeteci', 'journalist'], ['içerisi', 'inside'], ['inanç', 'belief'], ['nitelik', 'qualification'], ['üzeri', 'above'], ['bitirmek', 'finish'], ['gerçekleşmek', 'come true'], ['giriş', 'entrance'], ['rahat', 'comfortable'], ['toplam', 'total'], ['beraber', 'together'], ['dükkan', 'shop'], ['gizli', 'hidden'], ['benzer', 'similar'], ['deri', 'skin'], ['dönüşmek', 'turn into'], ['mücadele', 'struggle'], ['problem', 'problem'], ['servis', 'service'], ['tedavi', 'treatment'], ['yeşil', 'green'], ['bakanlık', 'ministry'], ['baskı', 'oppression'], ['tepki', 'reaction'], ['cümle', 'sentence'], ['dilemek', 'wish'], ['özgürlük', 'freedom'], ['gene', 'again'], ['kimlik', 'identity'], ['mesele', 'issue'], ['üçüncü', 'third'], ['belirlenmek', 'to be determined'], ['değerlendirmek', 'to evaluate'], ['ilginç', 'interesting'], ['sürücü', 'driver'], ['süt', 'milk'], ['yakalamak', 'to capture'], ['eşya', 'furniture'], ['uluslararası', 'international'], ['aday', 'applicant'], ['ağırlık', 'weight'], ['milyar', 'billion'], ['sağlıklı', 'healthy'], ['sıkıntı', 'problem'], ['Tanrı', 'God'], ['tavır', 'attitude'], ['toplumsal', 'social'], ['yayın', 'broadcasting'], ['dikkat etmek', 'pay attention'], ['son derece', 'extremely'], ['toplanmak', 'collect'], ['yatırım', 'investment'], ['hafif', 'light'], ['karışmak', 'interfere'], ['tehlike', 'danger'], ['vakit', 'time'], ['daire', 'apartment'], ['fırsat', 'opportunity'], ['işlemek', 'handle'], ['karıştırmak', 'to mix up'], ['katkı', 'contribution'], ['öykü', 'story'], ['tamamen', 'completely'], ['uçak', 'aeroplane'], ['yanıt', 'response'], ['doğa', 'nature'], ['evlenmek', 'to marry'], ['burun', 'nose'], ['çıkar', 'interest'], ['elbette', 'certainly'], ['işçi', 'employee'], ['işletme', 'business'], ['kısaca', 'briefly'], ['mağaza', 'shopping centre'], ['medya', 'media'], ['yüzünden', 'because'], ['artış', 'increase'], ['çıkarılmak', 'be removed'], ['kamu', 'public'], ['sigorta', 'insurance'], ['yaz', 'Summer'], ['yürek', 'heart'], ['belge', 'document'], ['çaba', 'effort'], ['her gün', 'every day'], ['ifade etmek', 'to express '], ['risk', 'risk'], ['söz etmek', 'speak of'], ['sözcük', 'word'], ['demokrasi', 'democracy'], ['tuz', 'salt'], ['cami', 'mosque'], ['çağ', 'age'], ['düşük', 'low'], ['etraf', 'surroundings'], ['hızla', 'quickly'], ['olanak', 'opportunity'], ['organ', 'organ'], ['öldürmek', 'kill'], ['öteki', 'other'], ['sene', 'year'], ['bozulmak', 'to break down'], ['ilgilenmek', 'to take care of'], ['meyve', 'fruit'], ['takılmak', 'to hang around'], ['tatlı', 'sweet'], ['bacak', 'leg'], ['değişim', 'change'], ['kanun', 'law'], ['rüzgar', 'wind'], ['cumhuriyet', 'republic'], ['geliştirmek', 'to develop'], ['tarz', 'style'], ['yedi', 'seven'], ['azalmak', 'decrease'], ['bağlamak', 'to connect'], ['cep telefonu', 'mobile phone'], ['iletişim', 'communication'], ['müdür', 'manager'], ['otel', 'hotel'], ['yayımlanmak', 'to be published'], ['zevk', 'pleasure'], ['binmek', 'to get on'], ['güvenlik', 'security'], ['hukuk', 'law'], ['kılmak', 'make'], ['modern', 'modern'], ['okur', 'reader'], ['silah', 'weapon'], ['talep', 'request'], ['yıldız', 'star'], ['yoğun', 'busy'], ['asker', 'soldier'], ['basit', 'simple'], ['denilmek', 'to be called'], ['gaz', 'gas'], ['uygulama', 'APPLICATION'], ['üretilmek', 'to be produced'], ['beyan', 'declaration'], ['besin', 'food'], ['dün', 'Yesterday'], ['görüşmek', 'to meet '], ['yaklaşık', 'approximately'], ['alışveriş', 'shopping'], ['bilinç', 'consciousness'], ['çerçeve', 'frame'], ['lazım', 'required'], ['mevcut', 'available'], ['tüketici', 'consumer'], ['uzatmak', 'to lengthen'], ['yönelik', 'aimed at'], ['at', 'horse'], ['bağlanmak', 'connect'], ['mesela', 'for example'], ['neredeyse', 'almost'], ['site', 'site'], ['yardımcı olmak', 'help'], ['abla', 'older sister'], ['çiçek', 'flower'], ['hepsi', 'all'], ['saygı', 'respect'], ['ücret', 'fee'], ['yetenek', 'talent'], ['kilo', 'kilo'], ['paylaşmak', 'to share'], ['sert', 'hard'], ['yanı sıra', 'as well as'], ['çay', 'tea'], ['gider', 'expense'], ['kesin', 'definite'], ['zengin', 'rich'], ['asla', 'never'], ['laf', 'word'], ['örgüt', 'organization'], ['ticaret', 'trade'], ['yaptırmak', 'make'], ['boyun', 'neck'], ['cihaz', 'device'], ['denge', 'balance'], ['giderek', 'increasingly'], ['sırt', 'back'], ['dolayı', 'because'], ['kahve', 'coffee'], ['kas', 'eyebrow'], ['meclis', 'council'], ['adres', 'address'], ['belirtilmek', 'to be stated'], ['paşa', 'pasha'], ['sıcaklık', 'heat'], ['tamam', 'Ok'], ['güven', 'trust'], ['marka', 'brand'], ['yaprak', 'leaf'], ['yarar', 'benefit'], ['yayılmak', 'spread'], ['akmak', 'flow'], ['çizmek', 'to draw'], ['düşünülmek', 'to be considered'], ['gönül', 'heart'], ['hayal', 'dream'], ['ilerlemek', 'to go forward'], ['şarap', 'wine'], ['yukarıda', 'above'], ['altın', 'gold'], ['düzenlemek', 'to organise'], ['satın almak', 'to buy'], ['sunulmak', 'to be presented'], ['temiz', 'clean'], ['vitamin', 'vitamin'], ['ek', 'additional'], ['geç', 'late'], ['hareket etmek', 'act'], ['yumurta', 'egg'], ['aşırı', 'extreme'], ['eylem', 'action'], ['istenmek', 'to be wanted'], ['kesim', 'cut'], ['kriz', 'crisis'], ['birim', 'unit'], ['kapanmak', 'close up'], ['', ''], ['']]


//FUNCTIONS
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function selectCard(cardID) {
    let card = document.getElementById(cardID);
    if (card.style.backgroundColor === "lightgray") {
        card.style.backgroundColor = "white";
    } else if (card.style.backgroundColor === "lightgreen") {
        //do nothing
    } else {
        card.style.backgroundColor = "lightgray";
    }
}

function changeCardColor(cardID, color) {
    let card = document.getElementById(cardID);
    card.style.backgroundColor = color;
}

function checkIfTwoSelected() {
    const cards = [1,2,3,4,5,6,7,8];
    let num_lightgray = 0;
    for (const cardNumber of cards) {
        let card = document.getElementById(cardNumber);
        if (card.style.backgroundColor === "lightgray") {
            num_lightgray += 1;
        }
    }
    if (num_lightgray === 2) {
        return true;
    }   
}

function arrangeWords(words) {
    //creating random indexes
    let randomIndexes = [];
    while (randomIndexes.length < 4) {
        let randomIndex = Math.floor(Math.random() * words.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }
    //selecting eight words based on random indexes
    let eightWords = [];
    for (index of randomIndexes) {
        let wordPair = words[index];
        eightWords.push(wordPair[0]);
        eightWords.push(wordPair[1]);
    }
    //shuffling eightWords
    shuffle(eightWords);

    //arranging eightWords onto cards
    const cards = [1,2,3,4,5,6,7,8];
    for (card of cards) {
        let cardElement = document.getElementById(card);
        cardElement.children[0].innerHTML = eightWords[card - 1];
        cardElement.style.backgroundColor = "white";
        cardElement.style.visibility = "visible";
    }
}

async function checkPair() {
    score = 0;
    while (true) {
        if (checkIfTwoSelected()) {
            let selectedCards = [];
            const cards = [1,2,3,4,5,6,7,8];
            for (const cardNumber of cards) {
                let card = document.getElementById(cardNumber);
                if (card.style.backgroundColor === "lightgray") {
                    selectedCards.push(cardNumber);
                }
            }
            // check if correct pair
            if ((words.some(pair => (pair[0] === document.getElementById(selectedCards[0]).children[0].innerHTML && pair[1] === document.getElementById(selectedCards[1]).children[0].innerHTML) || (pair[1] === document.getElementById(selectedCards[0]).children[0].innerHTML && pair[0] === document.getElementById(selectedCards[1]).children[0].innerHTML)))) {
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "lightgreen");
                }
                await new Promise(r => setTimeout(r, 500));
                //hide cards
                for (const cardID of selectedCards) {
                    let card = document.getElementById(cardID);
                    card.style.visibility = "hidden";
                }

            //check if incorrect pair
            } else {
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "lightcoral");
                }
                await new Promise(r => setTimeout(r, 500));
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "white");
                }

            }
        } 
        //check if all cards are hidden
        let allHidden = true;
        const cards = [1,2,3,4,5,6,7,8];
        for (const cardNumber of cards) {
            let card = document.getElementById(cardNumber);
            if (card.style.visibility !== "hidden") {
                allHidden = false;
            }
        }
        // if all cards are hidden, rearrange words
        if (allHidden) {
            arrangeWords(words);
            score += 1;
            document.querySelector("h2").innerHTML = "Score: " + score;
        }
        await new Promise(r => setTimeout(r, 1));
    }  
}
