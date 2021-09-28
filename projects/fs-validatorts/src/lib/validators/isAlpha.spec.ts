import { isAlpha } from './isAlpha'

it('should return true', () => {

    let targets = ['abc', 'ABC', 'FoObar']
    targets.forEach((target) => {
        expect(isAlpha(target)).toBeTruthy()
    })
})

it('should return false', () => {

    let targets = [
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'FÜübar',
        'Jön',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target)).toBeFalsy()
    })
})

it('should validate bulgarian alpha strings', () => {

    let targets = [
        'абв',
        'АБВ',
        'жаба',
        'яГоДа',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, 'bg-BG')).toBeTruthy()
    })

    targets = [
        'abc1',
        '  foo  ',
        '',
        'ЁЧПС',
        '_аз_обичам_обувки_',
        'ехо!',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, 'bg-BG')).toBeFalsy()
    })
})

it('should validate czech alpha strings', () => {

    let targets = [
        'žluťoučký',
        'KŮŇ',
        'Pěl',
        'Ďábelské',
        'ódy',
      ]
    targets.forEach((target) => {
        expect(isAlpha(target, 'cs-CZ')).toBeTruthy()
    })

    targets = [
        'abc1',
        '  foo  ',
        '',
        'ЁЧПС',
        '_аз_обичам_обувки_',
        'ехо!',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, 'cs-CZ')).toBeFalsy()
    })
})

it('should validate slovak alpha strings', () => {

    const args = 'sk-SK'

    let targets = [
        'môj',
        'ľúbím',
        'mäkčeň',
        'stĹp',
        'vŕba',
        'ňorimberk',
        'ťava',
        'žanéta',
        'Ďábelské',
        'ódy',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '1moj',
        '你好世界',
        '  Привет мир  ',
        'مرحبا العا ',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate danish alpha strings', () => {

    const args = 'da-DK'

    let targets =  [
        'aøå',
        'Ære',
        'Øre',
        'Åre',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'äbc123',
        'ÄBC11',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate dutch alpha strings', () => {
    const args = 'nl-NL'

    let targets = [
        'Kán',
        'één',
        'vóór',
        'nú',
        'héél',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'äca ',
        'abcß',
        'Øre',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate dutch alpha strings', () => {
    const args = 'de-DE'

    let targets =  [
        'äbc',
        'ÄBC',
        'FöÖbär',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'äbc1',
        '  föö  ',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate german alpha strings', () => {
    const args = 'de-DE'

    let targets =  [
        'äbc',
        'ÄBC',
        'FöÖbär',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'äbc1',
        '  föö  ',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate hungarian alpha strings', () => {
    const args = 'hu-HU'

    let targets =  [
        'árvíztűrőtükörfúrógép',
        'ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'äbc1',
        '  fäö  ',
        'Heiß',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate portuguese alpha strings', () => {
    const args = 'pt-PT'

    let targets =  [
        'palíndromo',
        'órgão',
        'qwértyúão',
        'àäãcëüïÄÏÜ',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '12abc',
        'Heiß',
        'Øre',
        'æøå',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate italien alpha strings', () => {
    const args = 'it-IT'

    let targets =  [
        'àéèìîóòù',
        'correnti',
        'DEFINIZIONE',
        'compilazione',
        'metró',
        'pèsca',
        'PÉSCA',
        'genî',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'äbc123',
        'ÄBC11',
        'æøå',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate arabic alpha strings', () => {
    const args = 'ar'

    let targets =  [
        'أبت',
        'اَبِتَثّجً',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '١٢٣أبت',
        '١٢٣',
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'FÜübar',
        'Jön',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate farsi alpha strings', () => {
    const args = 'fa-IR'

    let targets =  [
        'پدر',
        'مادر',
        'برادر',
        'خواهر',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'فارسی۱۲۳',
        '۱۶۴',
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'FÜübar',
        'Jön',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate kurdish alpha strings', () => {
    const args = 'ku-IQ'

    let targets = [
        'ئؤڤگێ',
        'کوردستان',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'ئؤڤگێ١٢٣',
        '١٢٣',
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'FÜübar',
        'Jön',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate norwegian alpha strings', () => {
    const args = 'nb-NO'

    let targets = [
        'aøå',
        'Ære',
        'Øre',
        'Åre',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'ئؤڤگێ١٢٣',
        '١٢٣',
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'FÜübar',
        'Jön',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate polish alpha strings', () => {
    const args = 'pl-PL'

    let targets = [
        'kreską',
        'zamknięte',
        'zwykłe',
        'kropką',
        'przyjęły',
        'święty',
        'Pozwól',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '12řiď ',
        'blé!!',
        'föö!2!',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate serbian alpha strings', () => {
    const args = 'sr-RS'

    let targets = [
        'ШћжЂљЕ',
        'ЧПСТЋЏ',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'řiď ',
        'blé33!!',
        'föö!!',
    ]  
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate serbian latin alpha strings', () => {
    const args = 'sr-RS@latin'

    let targets = [
        'ŠAabčšđćž',
        'ŠATROĆčđš',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets =  [
        '12řiď ',
        'blé!!',
        'föö!2!',
    ] 
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate spanish alpha strings', () => {
    const args = 'es-ES'

    let targets = [
        'ábcó',
        'ÁBCÓ',
        'dormís',
        'volvés',
        'español',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'äca ',
        'abcß',
        'föö!!',
    ] 
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate swedish alpha strings', () => {
    const args = 'sv-SE'

    let targets = [
        'religiös',
        'stjäla',
        'västgöte',
        'Åre',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'AİıÖöÇçŞşĞğÜüZ',
        'religiös23',
        '',
    ] 
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})
it('should validate swedish alpha strings', () => {
    const args = 'sv-SE'

    let targets = [
        'religiös',
        'stjäla',
        'västgöte',
        'Åre',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'AİıÖöÇçŞşĞğÜüZ',
        'religiös23',
        '',
    ] 
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate defined arabic locales alpha strings', () => {
    const args = 'ar-SY'

    let targets = [
        'أبت',
        'اَبِتَثّجً',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '١٢٣أبت',
        '١٢٣',
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'FÜübar',
        'Jön',
        'Heiß',
    ] 
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate defined turkish alpha strings', () => {
    const args = 'tr-TR'

    let targets = [
        'AİıÖöÇçŞşĞğÜüZ'
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '0AİıÖöÇçŞşĞğÜüZ1',
        '  AİıÖöÇçŞşĞğÜüZ  ',
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'Heiß',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate defined urkrainian alpha strings', () => {
    const args = 'uk-UA'

    let targets = [
        'АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '0AİıÖöÇçŞşĞğÜüZ1',
        '  AİıÖöÇçŞşĞğÜüZ  ',
        'abc1',
        '  foo  ',
        '',
        'ÄBC',
        'Heiß',
        'ЫыЪъЭэ',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate defined greek alpha strings', () => {
    const args = 'el-GR'

    let targets = [
        'αβγδεζηθικλμνξοπρςστυφχψω',
        'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
        'άέήίΰϊϋόύώ',
        'ΆΈΉΊΪΫΎΏ',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        '0AİıÖöÇçŞşĞğÜüZ1',
        '  AİıÖöÇçŞşĞğÜüZ  ',
        'ÄBC',
        'Heiß',
        'ЫыЪъЭэ',
        '120',
        'jαckγ',
    ]    
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate defined Hebrew alpha strings', () => {
    const args = 'he'

    let targets = [
        'בדיקה',
        'שלום',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'בדיקה123',
        '  foo  ',
        'abc1',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should validate defined Hebrew alpha strings', () => {
    const args = 'he'

    let targets = [
        'בדיקה',
        'שלום',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeTruthy()
    })

    targets = [
        'בדיקה123',
        '  foo  ',
        'abc1',
        '',
    ]
    targets.forEach((target) => {
        expect(isAlpha(target, args)).toBeFalsy()
    })
})

it('should error on invalid locale', () => {
    const args = 'is-NOT'

    let targets = [
        'abc',
        'ABC',
    ]
    targets.forEach((target) => {
        expect(()=>{isAlpha(target, args)}).toThrow()
    })
})

