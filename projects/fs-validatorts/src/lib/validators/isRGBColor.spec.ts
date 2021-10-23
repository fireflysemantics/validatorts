import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isRgbColor } from "./isRgbColor";
//For the tests see
// 
test("isRgbColor", () => {
    runtest(testdata, isRgbColor)
})

const testdata: TestData[] = [
    {
        it: 'isRgbColor',
        valid: [
            'rgb(0,0,0)',
            'rgb(255,255,255)',
            'rgba(0,0,0,0)',
            'rgba(255,255,255,1)',
            'rgba(255,255,255,.1)',
            'rgba(255,255,255,0.1)',
            'rgb(5%,5%,5%)',
            'rgba(5%,5%,5%,.3)',
          ],
          invalid: [
            'rgb(0,0,0,)',
            'rgb(0,0,)',
            'rgb(0,0,256)',
            'rgb()',
            'rgba(0,0,0)',
            'rgba(255,255,255,2)',
            'rgba(255,255,255,.12)',
            'rgba(255,255,256,0.1)',
            'rgb(4,4,5%)',
            'rgba(5%,5%,5%)',
            'rgba(3,3,3%,.3)',
            'rgb(101%,101%,101%)',
            'rgba(3%,3%,101%,0.3)',
          ]
    } ,
    {
        it: "isRgbColor",
        args: [false],
        valid: [
          'rgb(5,5,5)',
          'rgba(5,5,5,.3)',
        ],
        invalid: [
          'rgb(4,4,5%)',
          'rgba(5%,5%,5%)',
        ]
    }
]