const colorsJson = {
    mainColors: {
        red: {
            hex: '#f44336',
            name: 'Red',
            alternates: {
                a50: '#FFEBEE',
                a100: '#FFCDD2',
                a200: '#EF9A9A',
                a300: '#E57373',
                a400: '#EF5350',
                a500: '#F44336',
                a600: '#E53935',
                a700: '#D32F2F',
                a800: '#C62828',
                a900: '#B71C1C',
            },
        },
        pink: {
            hex: '#E91E63',
            name: 'Pink',
            alternates: {
                a50: '#FCE4EC',
                a100: '#F8BBD0',
                a200: '#F48FB1',
                a300: '#F06292',
                a400: '#EC407A',
                a500: '#E91E63',
                a600: '#D81B60',
                a700: '#C2185B',
                a800: '#AD1457',
                a900: '#880E4F',
            },
        },
        purple: {
            hex: '#9C27B0',
            name: 'Purple',
            alternates: {
                a50: '#F3E5F5',
                a100: '#E1BEE7',
                a200: '#CE93D8',
                a300: '#BA68C8',
                a400: '#AB47BC',
                a500: '#9C27B0',
                a600: '#8E24AA',
                a700: '#7B1FA2',
                a800: '#6A1B9A',
                a900: '#4A148C',
            },
        },
        deepPurple: {
            hex: '#673AB7',
            name: 'Deep Purple',
            alternates: {
                a50: '#EDE7F6',
                a100: '#D1C4E9',
                a200: '#B39DDB',
                a300: '#9575CD',
                a400: '#7E57C2',
                a500: '#673AB7',
                a600: '#5E35B1',
                a700: '#512DA8',
                a800: '#4527A0',
                a900: '#311B92',
            },
        },
        indigo: {
            hex: '#3F51B5',
            name: 'Indigo',
            alternates: {
                a50: '#E8EAF6',
                a100: '#C5CAE9',
                a200: '#9FA8DA',
                a300: '#7986CB',
                a400: '#5C6BC0',
                a500: '#3F51B5',
                a600: '#3949AB',
                a700: '#303F9F',
                a800: '#283593',
                a900: '#1A237E',
            },
        },
        blue: {
            hex: '#2196F3',
            name: 'Blue',
            alternates: {
                a50: '#E3F2FD',
                a100: '#BBDEFB',
                a200: '#90CAF9',
                a300: '#64B5F6',
                a400: '#42A5F5',
                a500: '#2196F3',
                a600: '#1E88E5',
                a700: '#1976D2',
                a800: '#1565C0',
                a900: '#0D47A1',
            },
        },
        lightBlue: {
            hex: '#03A9F4',
            name: 'Light Blue',
            alternates: {
                a50: '#E1F5FE',
                a100: '#B3E5FC',
                a200: '#81D4FA',
                a300: '#4FC3F7',
                a400: '#29B6F6',
                a500: '#03A9F4',
                a600: '#039BE5',
                a700: '#0288D1',
                a800: '#0277BD',
                a900: '#01579B',
            },
        },
        cyan: {
            hex: '#00BCD4',
            name: 'Cyan',
            alternates: {
                a50: '#E0F7FA',
                a100: '#B2EBF2',
                a200: '#80DEEA',
                a300: '#4DD0E1',
                a400: '#26C6DA',
                a500: '#00BCD4',
                a600: '#00ACC1',
                a700: '#0097A7',
                a800: '#00838F',
                a900: '#006064',
            },
        },
        teal: {
            hex: '#009688',
            name: 'Teal',
            alternates: {
                a50: '#E0F2F1',
                a100: '#B2DFDB',
                a200: '#80CBC4',
                a300: '#4DB6AC',
                a400: '#26A69A',
                a500: '#009688',
                a600: '#00897B',
                a700: '#00796B',
                a800: '#00695C',
                a900: '#004D40',
            },
        },
        green: {
            hex: '#4CAF50',
            name: 'Green',
            alternates: {
                a50: '#E8F5E9',
                a100: '#C8E6C9',
                a200: '#A5D6A7',
                a300: '#81C784',
                a400: '#66BB6A',
                a500: '#4CAF50',
                a600: '#43A047',
                a700: '#388E3C',
                a800: '#2E7D32',
                a900: '#1B5E20',
            },
        },
        lightGreen: {
            hex: '#8BC34A',
            name: 'Light Green',
            alternates: {
                a50: '#F1F8E9',
                a100: '#DCEDC8',
                a200: '#C5E1A5',
                a300: '#AED581',
                a400: '#9CCC65',
                a500: '#8BC34A',
                a600: '#7CB342',
                a700: '#689F38',
                a800: '#558B2F',
                a900: '#33691E',
            },
        },
        lime: {
            hex: '#CDDC39',
            name: 'Lime',
            alternates: {
                a50: '#F9FBE7',
                a100: '#F0F4C3',
                a200: '#E6EE9C',
                a300: '#DCE775',
                a400: '#D4E157',
                a500: '#CDDC39',
                a600: '#C0CA33',
                a700: '#AFB42B',
                a800: '#9E9D24',
                a900: '#827717',
            },
        },
        yellow: {
            hex: '#FFEB3B',
            name: 'Yellow',
            alternates: {
                a50: '#FFFDE7',
                a100: '#FFF9C4',
                a200: '#FFF59D',
                a300: '#FFF176',
                a400: '#FFEE58',
                a500: '#FFEB3B',
                a600: '#FDD835',
                a700: '#FBC02D',
                a800: '#F9A825',
                a900: '#F57F17',
            },
        },
        amber: {
            hex: '#FFC107',
            name: 'Amber',
            alternates: {
                a50: '#FFF8E1',
                a100: '#FFECB3',
                a200: '#FFE082',
                a300: '#FFD54F',
                a400: '#FFCA28',
                a500: '#FFC107',
                a600: '#FFB300',
                a700: '#FFA000',
                a800: '#FF8F00',
                a900: '#FF6F00',
            },
        },
        orange: {
            hex: '#FF9800',
            name: 'Orange',
            alternates: {
                a50: '#FFF3E0',
                a100: '#FFE0B2',
                a200: '#FFCC80',
                a300: '#FFB74D',
                a400: '#FFA726',
                a500: '#FF9800',
                a600: '#FB8C00',
                a700: '#F57C00',
                a800: '#EF6C00',
                a900: '#E65100',
            },
        },
        deepOrange: {
            hex: '#FF5722',
            name: 'Deep Orange',
            alternates: {
                a50: '#FBE9E7',
                a100: '#FFCCBC',
                a200: '#FFAB91',
                a300: '#FF8A65',
                a400: '#FF7043',
                a500: '#FF5722',
                a600: '#F4511E',
                a700: '#E64A19',
                a800: '#D84315',
                a900: '#BF360C',
            },
        },
        brown: {
            hex: '#795548',
            name: 'Brown',
            alternates: {
                a50: '#EFEBE9',
                a100: '#D7CCC8',
                a200: '#BCAAA4',
                a300: '#A1887F',
                a400: '#8D6E63',
                a500: '#795548',
                a600: '#6D4C41',
                a700: '#5D4037',
                a800: '#4E342E',
                a900: '#3E2723',
            },
        },
        grey: {
            hex: '#9E9E9E',
            name: 'Grey',
            alternates: {
                a50: '#FAFAFA',
                a100: '#F5F5F5',
                a200: '#EEEEEE',
                a300: '#E0E0E0',
                a400: '#BDBDBD',
                a500: '#9E9E9E',
                a600: '#757575',
                a700: '#616161',
                a800: '#424242',
                a900: '#212121',
            },
        },
        blueGrey: {
            hex: '#607D8B',
            name: 'Blue Grey',
            alternates: {
                a50: '#ECEFF1',
                a100: '#CFD8DC',
                a200: '#B0BEC5',
                a300: '#90A4AE',
                a400: '#78909C',
                a500: '#607D8B',
                a600: '#546E7A',
                a700: '#455A64',
                a800: '#37474F',
                a900: '#263238',
            },
        },
    },
    alternateNames: [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
    ],
}

function fadeOut(el) {
    el.style.opacity = 1
    ;(function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = 'none'
        } else {
            requestAnimationFrame(fade)
        }
    })()
}

function fadeIn(el) {
    el.style.opacity = 0
    el.style.display = 'block'
    ;(function fade() {
        var val = parseFloat(el.style.opacity)
        if (!((val += 0.1) > 1)) {
            el.style.opacity = val
            requestAnimationFrame(fade)
        }
    })()
}

function restore() {
    chrome.storage.local.get(
        {
            output: 'hashHex',
        },
        function(items) {
            document
                .querySelector(`input[value="${items.output}"]`)
                .setAttribute('checked', true)
        }
    )
}

function save() {
    const color = document.querySelector('input[name="output"]:checked').value
    chrome.storage.local.set({
        output: color,
    })
    const alert = document.querySelector('#alert')
    fadeIn(alert)
    alert.innerHTML = '<strong>SUCCESS:</strong> Options saved'
    setTimeout(() => {
        fadeOut(alert)
    }, 1500)
}

const _onLoadListener = function() {
    chrome.storage.local.get('output', items => {
        init(items.output)
    })
    restore()
    document
        .querySelectorAll('input[type=radio][name=output]')
        .forEach(input => {
            input.addEventListener('change', e => {
                save()
            })
        })
}

if (document.readyState !== 'loading') {
    _onLoadListener()
} else {
    document.addEventListener('DOMContentLoaded', _onLoadListener)
}

function init(output) {
    document.querySelector('.variations').innerHTML = ''
    document.querySelector('.colors').innerHTML = ''
    Object.entries(colorsJson.mainColors).forEach(([key, data]) => {
        let colortoadd = document.createElement('div')
        colortoadd.classList.add('color')
        colortoadd.setAttribute('data-clipboard-text', color(data.hex, output))
        colortoadd.setAttribute('data-hex', data.hex)
        colortoadd.setAttribute('id', key)
        colortoadd.style = `background: ${data.hex}`
        colortoadd.innerHTML = data.name
        document.querySelector('.colors').appendChild(colortoadd)
        let variation = document.createElement('div')
        variation.setAttribute('id', `colorset-${key}`)
        variation.classList.add('colorset')
        document.querySelector('.variations').appendChild(variation)
        Object.entries(data.alternates).forEach(([keys, datas]) => {
            let colorsettoadd = document.createElement('div')
            colorsettoadd.setAttribute(
                'data-clipboard-text',
                color(datas, output)
            )
            colorsettoadd.setAttribute('title', color(datas, output))
            colorsettoadd.setAttribute('data-hex', datas)
            colorsettoadd.setAttribute('id', keys)
            colorsettoadd.style = `background: ${datas}`
            colorsettoadd.classList.add('color')
            document
                .querySelector(`#colorset-${key}`)
                .appendChild(colorsettoadd)
        })
    })

    document.querySelectorAll('.color').forEach(color => {
        color.addEventListener('click', e => {
            let header = document.querySelector('header')
            let alert = document.querySelector('#alert')
            let id = e.target.getAttribute('id')
            header.style.background = e.target.dataset.hex
            if (id === 'a50' || id === 'a100') {
                header.style.color = '#000'
            } else {
                header.style.color = '#fff'
            }
            let clipboard = new Clipboard('.color')
            clipboard.on('success', e => {
                fadeIn(alert)
                alert.innerHTML = `<strong>SUCCESS:</strong> Copied to Clipboard ${
                    e.text
                }`
                setTimeout(() => {
                    fadeOut(alert)
                }, 1500)
            })
            clipboard.on('error', _ => {
                fadeIn(alert)
                alert.innerHTML =
                    '<strong>ERROR:</strong> Cannot copy to Clipboard'
                setTimeout(() => {
                    fadeOut(alert)
                }, 1500)
            })
        })
    })
}

function color(hex, output) {
    switch (output) {
        case 'hashHex':
            var convertedHex = hex
            break
        case 'hex':
            var convertedHex = toHex(hex)
            break
        case 'rgb':
            var convertedHex = toRGB(hex)
            break
        case 'rgba':
            var convertedHex = toRGBA(hex)
            break
        default:
            var convertedHex = hex
            break
    }
    return convertedHex
}

function toRGB(hex) {
    const R = hexToR(hex)
    const G = hexToG(hex)
    const B = hexToB(hex)
    const rgb = `rgb(${R},${G},${B})`
    return rgb
}

function toRGBA(hex) {
    const R = hexToR(hex)
    const G = hexToG(hex)
    const B = hexToB(hex)
    const A = 1
    const rgba = `rgba(${R},${G},${B},${A})`
    return rgba
}

function toHex(hex) {
    return hex.replace(/([#])/g, '')
}

function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16)
}
function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16)
}
function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16)
}
function cutHex(h) {
    return h.charAt(0) === '#' ? h.substring(1, 7) : h
}
