import '../styles/style.less';
import '../styles/style.scss';
import {displayData} from './module';


displayData('Hello');

function echo(a: string, b: number): void {
    console.log(a + b);
}

echo('my nomber', 12);
//////////////////////////////////////

const confObject: string[][] = [
    ['q', 'й'], ['w', 'ц'], ['e', 'у'], ['r', 'к'], ['t', 'е'],  [' ', ' '],
    ['y', 'н'], ['u', 'г'], ['i', 'ш'], [ 'o', 'щ'], ['p', 'з'], ['[', 'х'], [']', 'ъ'],
    ['a', 'ф'], ['s', 'ы'], ['d', 'в'], ['f', 'а'], ['g', 'п'], ['h', 'р'], ['j', 'о'], ['k', 'л'], ['l', 'д'], [';', 'ж'], ['\'' , 'э'],
    ['z', 'я'], ['x', 'ч'], ['c', 'с'], ['v', 'м'], ['b', 'и'], ['n', 'т'], ['m', 'ь'], [',', 'б'], ['.', 'ю'], ['/', '.'],
];

let configMap: Map<string, string> = new Map();
for (let i: number = 0; i < confObject.length; i++) {
    configMap.set(confObject[i][0], confObject[i][1]);
}

function translate(config: Map<string, string>, value: string): string {
    let stringArray: string[] = [];
    for (let char of value) {
        if (config.has(char)) {
            stringArray.push(config.get(char));
        } else {
            stringArray.push('%');
        }
    }
    return stringArray.join('');
}

document.getElementById('go').addEventListener('click', () => {
    let text: any = document.getElementById('text');
    text = text.value;
    let string = translate( configMap, text);
    document.getElementById('result').innerText = string;
});

