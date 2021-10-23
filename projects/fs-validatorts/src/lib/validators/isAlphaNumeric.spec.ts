import { TestData } from "../types/TestData"
import { runtest } from "../util/test-util"
import { isAlphaNumeric, IS_ALPHA_NUMERIC_ERRORS } from "./isAlphaNumeric"

//=======================================================
//ERRORS
//=======================================================

it('should fail on invalid ignore option', () => {
    expect(isAlphaNumeric(
        '', 'en-US',
        { ignore: 1234 }).error).
        toEqual(IS_ALPHA_NUMERIC_ERRORS.INVALID_IGNORE_OPTION)
    expect(isAlphaNumeric(
        '', 'en-NOT').error).
        toEqual(IS_ALPHA_NUMERIC_ERRORS.INVALID_LOCALE)
})

const testdata: TestData[] = [
    {
        it: 'should validate alphanumeric strings',
        valid: [
            'abc123',
            'ABC11'
        ],
        invalid: [
            'abc ',
            'foo!!',
            'ÄBC',
            'FÜübar',
            'Jön',
        ]
    },
    {
        it: 'should validate alphanumeric string with ignored character',
        args: ['en-US', { ignore: /[\s/-]/g }], // ignore [space -
        valid: [
            'en-US',
            'this is a valid alphaNumeric string',
        ],
        invalid: [
            'INVALID$ AlphaNum Str',
            'hello@123',
            'abc*123',
        ]
    },
    {
        it: 'should validate defined english aliases',
        args: ['en-GB'],
        valid: [
            'abc123',
            'ABC11',
        ],
        invalid: [
            'abc ',
            'foo!!',
            'ÄBC',
            'FÜübar',
            'Jön',
        ]
    },
    {
        it: 'should validate Azerbaijani alphanumeric strings',
        args: ['az-AZ'],
        valid: [
            'Azərbaycan',
            'Bakı',
            'abc1',
            'abcç2',
            '3kərə4kərə',
        ],
        invalid: [
            '  foo1  ',
            '',
            'ab(cd)',
            'simvol@',
            'wəkil',
        ]
    },
    {
        it: 'should validate bulgarian alphanumeric strings',
        args: ['bg-BG'],
        valid: [
            'абв1',
            '4АБ5В6',
            'жаба',
            'яГоДа2',
            'йЮя',
            '123',
        ],
        invalid: [
            ' ',
            '789  ',
            'hello000',
        ]
    },
    {
        it: 'should validate czech alphanumeric strings',
        args: ['cs-CZ'],
        valid: [
            'řiť123',
            'KŮŇ11',
        ],
        invalid: [
            'řiď ',
            'blé!!',
        ]
    },
    {
        it: 'should validate slovak alphanumeric strings',
        args: ['sk-SK'],
        valid: [
            '1môj',
            '2ľúbím',
            '3mäkčeň',
            '4stĹp',
            '5vŕba',
            '6ňorimberk',
            '7ťava',
            '8žanéta',
            '9Ďábelské',
            '10ódy',
        ],
        invalid: [
            '1moj!',
            '你好世界',
            '  Привет мир  ',
        ],
    },
    {
        it: 'should validate danish alphanumeric strings',
        args: ['da-DK'],
        valid: [
            'ÆØÅ123',
            'Ære321',
            '321Øre',
            '123Åre',
        ],
        invalid: [
            'äbc123',
            'ÄBC11',
            '',
        ]
    },
    {
        it: 'should validate dutch alphanumeric strings',
        args: ['nl-NL'],
        valid: [
            'Kán123',
            'één354',
            'v4óór',
            'nú234',
            'hé54él',
        ],
        invalid: [
            '1äca ',
            'ab3cß',
            'Øre',
        ],
    },
    {
        it: 'should validate german alphanumeric strings',
        args: ['de-DE'],
        valid: [
            'äbc123',
            'ÄBC11',
        ],
        invalid: [
            'äca ',
            'föö!!',
        ],
    },
    {
        it: 'should validate hungarian alphanumeric strings',
        args: ['hu-HU'],
        valid: [
            '0árvíztűrőtükörfúrógép123',
            '0ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP123',
        ],
        invalid: [
            '1időúr!',
            'äbc1',
            '  fäö  ',
            'Heiß!',
            '',
        ],
    },
    {
        it: 'should validate portuguese alphanumeric strings',
        args: ['pt-PT'],
        valid: [
            'palíndromo',
            '2órgão',
            'qwértyúão9',
            'àäãcë4üïÄÏÜ',
        ],
        invalid: [
            '!abc',
            'Heiß',
            'Øre',
            'æøå',
            '',
        ],
    },
    {
        it: 'should validate italian alphanumeric strings',
        args: ['it-IT'],
        valid: [
            '123àéèìîóòù',
            '123correnti',
            'DEFINIZIONE321',
            'compil123azione',
            'met23ró',
            'pès56ca',
            'PÉS45CA',
            'gen45î',
        ],
        invalid: [
            'äbc123',
            'ÄBC11',
            'æøå',
            '',
        ],
    },
    {
        it: 'should validate spanish alphanumeric strings',
        args: ['es-ES'],
        valid: [
            'ábcó123',
            'ÁBCÓ11',
        ],
        invalid: [
            'äca ',
            'abcß',
            'föö!!',
        ],
    },
    {
        it: 'should validate Vietnamese alphanumeric strings',
        args: ['vi-VN'],
        valid: [
            'Thầy3',
            '3Gà',
        ],
        invalid: [
            'toang!',
            'Cậu Vàng',
        ],
    },
    {
        it: 'should validate arabic alphanumeric strings',
        args: ['ar'],
        valid: [
            'أبت123',
            'أبتَُِ١٢٣',
        ],
        invalid: [
            'äca ',
            'abcß',
            'föö!!',
        ],
    },
    {
        it: 'should validate hindi alphanumeric strings',
        args: ['hi-IN'],
        valid: [
            'अतअपनाअपनीअपनेअभीअंदरआदिआपइत्यादिइनइनकाइन्हींइन्हेंइन्होंइसइसकाइसकीइसकेइसमेंइसीइसेउनउनकाउनकीउनकेउनकोउन्हींउन्हेंउन्होंउसउसकेउसीउसेएकएवंएसऐसेऔरकईकरकरताकरतेकरनाकरनेकरेंकहतेकहाकाकाफ़ीकिकितनाकिन्हेंकिन्होंकियाकिरकिसकिसीकिसेकीकुछकुलकेकोकोईकौनकौनसागयाघरजबजहाँजाजितनाजिनजिन्हेंजिन्होंजिसजिसेजीधरजैसाजैसेजोतकतबतरहतिनतिन्हेंतिन्होंतिसतिसेतोथाथीथेदबारादियादुसरादूसरेदोद्वाराननकेनहींनानिहायतनीचेनेपरपहलेपूरापेफिरबनीबहीबहुतबादबालाबिलकुलभीभीतरमगरमानोमेमेंयदियहयहाँयहीयायिहयेरखेंरहारहेऱ्वासालिएलियेलेकिनववग़ैरहवर्गवहवहाँवहींवालेवुहवेवोसकतासकतेसबसेसभीसाथसाबुतसाभसारासेसोसंगहीहुआहुईहुएहैहैंहोहोताहोतीहोतेहोनाहोने०२३४५६७८९',
            'इन्हें४५६७८९',
        ],
        invalid: [
            'अत ०२३४५६७८९',
            ' ३४५६७८९',
            '12 ',
            ' अत ',
            'abc1',
            'abc',
            '',
        ],
    },
    {
        it: 'should validate kurdish alphanumeric strings',
        args: ['ku-IQ'],
        valid: [
            'ئؤڤگێ١٢٣',
        ],
        invalid: [
            'äca ',
            'abcß',
            'föö!!',
        ]
    },
    {
        it: 'should validate defined arabic alphanumeric strings',
        args: ['ar-SY'],
        valid: [
            'أبت123',
            'أبتَُِ١٢٣',
        ],
        invalid: [
            'abc ',
            'foo!!',
            'ÄBC',
            'FÜübar',
            'Jön',
        ]
    },
    {
        it: 'should validate norwegian alphanumeric strings',
        args: ['nb-NO'],
        valid: [
            'ÆØÅ123',
            'Ære321',
            '321Øre',
            '123Åre',
        ],
        invalid: [
            'äbc123',
            'ÄBC11',
            '',
        ]
    },
    {
        it: 'should validate polish alphanumeric strings',
        args: ['pl-PL'],
        valid: [
            'kre123ską',
            'zam21knięte',
            'zw23ykłe',
            '123',
            'prz23yjęły',
            'świ23ęty',
            'Poz1322wól',
        ],
        invalid: [
            '12řiď ',
            'blé!!',
            'föö!2!',
        ]
    },
    {
        it: 'should validate cyrillic alphanumeric strings',
        args: ['sr-RS'],
        valid: [
            'ШћжЂљЕ123',
            'ЧПСТ132ЋЏ',
        ],
        invalid: [
            'řiď ',
            'blé!!',
            'föö!!',
        ],
    },
    {
        it: 'should validate serbian latin alphanumeric strings',
        args: ['sr-RS@latin'],
        valid: [
            'ŠAabčšđćž123',
            'ŠATRO11Ćčđš',
        ],
        invalid: [
            'řiď ',
            'blé!!',
            'föö!!',
        ],
    },
    {
        it: 'should validate swedish alphanumeric strings',
        args: ['sv-SE'],
        valid: [
            'religiös13',
            'st23jäla',
            'västgöte123',
            '123Åre',
        ],
        invalid: [
            'AİıÖöÇçŞşĞğÜüZ',
            'foo!!',
            '',
        ],
    },
    {
        it: 'should validate turkish alphanumeric strings',
        args: ['tr-TR'],
        valid: [
            'AİıÖöÇçŞşĞğÜüZ123',
        ],
        invalid: [
            'AİıÖöÇçŞşĞğÜüZ ',
            'foo!!',
            'ÄBC',
        ],
    },
    {
        it: 'should validate urkrainian alphanumeric strings',
        args: ['tr-TR'],
        valid: [
            'AİıÖöÇçŞşĞğÜüZ123',
        ],
        invalid: [
            'AİıÖöÇçŞşĞğÜüZ ',
            'foo!!',
            'ÄBC',
        ],
    },
    {
        it: 'should validate urkrainian alphanumeric strings',
        args: ['uk-UA'],
        valid: [
            'АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ123',
        ],
        invalid: [
            'éeoc ',
            'foo!!',
            'ÄBC',
            'ЫыЪъЭэ',
        ],
    },
    {
        it: 'should validate greek alphanumeric strings',
        args: ['el-GR'],
        valid: [
            'αβγδεζηθικλμνξοπρςστυφχψω',
            'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
            '20θ',
            '1234568960',
        ],
        invalid: [
            '0AİıÖöÇçŞşĞğÜüZ1',
            '  AİıÖöÇçŞşĞğÜüZ  ',
            'ÄBC',
            'Heiß',
            'ЫыЪъЭэ',
            'jαckγ',
        ],
    },
    {
        it: 'should validate Hebrew alphanumeric strings',
        args: ['he'],
        valid: [
            'אבג123',
            'שלום11',
        ],
        invalid: [
            'אבג ',
            'לא!!',
            'abc',
            '  foo  ',
        ],
    },
    {
        it: 'should validate Thai alphanumeric strings',
        args: ['th-TH'],
        valid: [
            'สวัสดี ๑๒๓',
            'ยินดีต้อนรับทั้ง ๒ คน',
        ],
        invalid: [
            '1.สวัสดี',
            'ยินดีต้อนรับทั้ง 2 คน',
        ],
    },
    {
        it: 'should validate Thai alphanumeric strings',
        args: ['th-TH'],
        valid: [
            'สวัสดี ๑๒๓',
            'ยินดีต้อนรับทั้ง ๒ คน',
        ],
        invalid: [
            '1.สวัสดี',
            'ยินดีต้อนรับทั้ง 2 คน',
        ],
    },
]

test("dataset", () => {
  runtest(testdata, isAlphaNumeric)
})
